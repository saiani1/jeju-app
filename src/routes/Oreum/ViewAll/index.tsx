import { useEffect, useState } from 'react'
import { IOreumImgListAPIRes } from 'types/oreum.d'
import { getOreumImgApi } from 'services/jeju'
import OreumItem from '../OreumItem'
import useIntersectionObserver from 'hooks/useIntersectionObserver'

import styles from './viewAll.module.scss'

const ViewAll = () => {
  const pageSize = 10
  const [page, setPage] = useState(1)
  const [oreumData, setOreumData] = useState([])
  const [readMore, setReadMore] = useState(false)

  let selectTargetTimeout: NodeJS.Timeout

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (page > 9) return
    if (isIntersecting) {
      selectTargetTimeout = setTimeout(() => {
        setPage(page + 1)
      }, 1000)
      setReadMore(false)
    }
    if (!isIntersecting) {
      clearTimeout(selectTargetTimeout)
      setReadMore(true)
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
        setReadMore(true)
      })
      .catch((err) => {
        console.log(err)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  if (!oreumData) return null

  return (
    <>
      <ul className={styles.listWrap}>
        {oreumData.map((oreum: IOreumImgListAPIRes, i) => {
          const index = `oreum-${i}`
          return <OreumItem key={index} oreum={oreum} />
        })}
      </ul>
      {readMore && <div ref={setTarget}>Loading</div>}
    </>
  )
}

export default ViewAll
