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
  console.log(oreumData)

  /*   useEffect(() => {
    getOreumApi({
      page: 1,
      perPage: 10,
    }).then((res: any) => {
      setData(res.data.data)
    })
  })
 */
  /*   const handlefilterOreumData = () => {
    setFilterOreumData(data.filter((oreum: IOreumAPIRes) => oreum.콘텐츠명.includes('오름')))
  }
  */
  return (
    <div className={styles.wrap}>
      <button type='button'>필터되라 얍!</button>
      <ul>
        {/*         {filterOreumData &&
          filterOreumData.map((oreum: IOreumAPIRes, i) => {
            const index = `oreum-${i}`
            return (
              <li key={index}>
                <p>{i}</p>
              </li>
            )
          })}
 */}{' '}
      </ul>
    </div>
  )
}

export default Oreum
