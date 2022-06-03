import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'
import { IOreumAPIRes } from 'types/oreum.d'
import { getOreumApi } from 'services/jeju'
import OreumItem from './OreumItem'

import styles from './oreum.module.scss'
import { isAxiosError } from 'utils/axios'

const Oreum = () => {
  const [oreumData, setOreumData] = useState([])

  /*   const page = 1
  const pageSize = 10
  */
  useEffect(() => {
    getOreumApi({
      page: 1,
      pageSize: 10,
    }).then((res: any) => {
      setOreumData(res.data.resultSummary)
    })
  }, [])
  /*   const { data } = useQuery(
    ['getOreumApi', page, pageSize],
    () => getOreumApi({ page, pageSize }).then((res: any) => setOreumData(res.data.resultSummary)),
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
 */
  if (!oreumData) return null

  return (
    <div className={styles.wrap}>
      <ul>
        {oreumData.map((oreum: IOreumAPIRes, i) => {
          const index = `oreum-${i}`
          return <OreumItem key={index} oreum={oreum} />
        })}
      </ul>
    </div>
  )
}

export default Oreum
