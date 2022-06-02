import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'

import { getOreumApi } from 'services/jeju'
import { IOreumAPIRes, IJejuAPIRes } from 'types/oreum.d'
import { isAxiosError } from 'utils/axios'

import styles from './oreum.module.scss'

const Oreum = () => {
  const [oreumData, setOreumData] = useState([])

  const page = 1
  const perPage = 10

  const { data, isLoading } = useQuery(
    [`getOreumApi`, page, perPage],
    () => getOreumApi({ page, perPage }).then((res: any) => setOreumData(res.data)),
    {
      refetchOnWindowFocus: true,
      suspense: true,
      useErrorBoundary: true,
      onError(err) {
        if (isAxiosError(err)) {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      },
    }
  )

  return <div className={styles.wrap}>.</div>
}

export default Oreum
