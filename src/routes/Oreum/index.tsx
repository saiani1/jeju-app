import { useEffect, useState } from 'react'
import { IOreumImgListAPIRes } from 'types/oreum.d'
import { getOreumImgApi } from 'services/jeju'
import OreumItem from './OreumItem'
import useIntersectionObserver from 'hooks/useIntersectionObserver'

import styles from './oreum.module.scss'
import Search from 'components/Search'

const Oreum = () => {
  const pageSize = 10
  const [page, setPage] = useState(1)
  const [oreumData, setOreumData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  let selectTargetTimeout: NodeJS.Timeout

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    console.log(`감지결과 : ${isIntersecting}`, page)
    setIsLoading(false)

    if (page > 9) return
    if (isIntersecting) {
      selectTargetTimeout = setTimeout(() => {
        setPage(page + 1)
      }, 1000)
    }
    if (!isIntersecting) {
      clearTimeout(selectTargetTimeout)
    }
  }
  const { setTarget } = useIntersectionObserver({ onIntersect })

  useEffect(() => {
    if (page > 9) return
    getOreumImgApi({
      page,
      pageSize,
    })
      .then((res: any) => {
        if (oreumData.length === 0) setOreumData(res.data.resultSummary)
        else setOreumData((prev) => prev.concat(res.data.resultSummary))
        console.log('call Api!')
        setIsLoading(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [page])

  if (!oreumData) return null

  console.log(isLoading)

  return (
    <div className={styles.wrap}>
      <Search title='oreum' />
      <ul className={styles.listWrap}>
        {oreumData.map((oreum: IOreumImgListAPIRes, i) => {
          const index = `oreum-${i}`
          return <OreumItem key={index} oreum={oreum} />
        })}
      </ul>
      {isLoading && <div ref={setTarget}>Loading</div>}
    </div>
  )
}

export default Oreum
