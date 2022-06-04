import { useEffect, useState } from 'react'
import { IOreumImgListAPIRes } from 'types/oreum.d'
import { getOreumImgApi } from 'services/jeju'
import { useRecoil } from 'hooks/state'
import { searchInputValue, pageDataValue, filterDataValue, allDataValue } from 'recoil/oreum'

import OreumItem from './OreumItem'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import Search from 'components/Search'

import styles from './oreum.module.scss'

const Oreum = () => {
  const [searchKeyword, setSearchKeyword] = useRecoil(searchInputValue)
  const [page, setPage] = useRecoil(pageDataValue)
  const [filterData, setFilterData] = useRecoil(filterDataValue)
  const [allData, setAllData] = useRecoil(allDataValue)
  const [readMore, setReadMore] = useState(false)

  let selectTargetTimeout: NodeJS.Timeout

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (page > 9) return
    if (isIntersecting) {
      selectTargetTimeout = setTimeout(() => {
        setPage(page + 1)
      }, 500)
      setReadMore(false)
    }
    if (!isIntersecting) {
      clearTimeout(selectTargetTimeout)
      setReadMore(true)
    }
  }

  const { setTarget } = useIntersectionObserver({ onIntersect })

  const pageSize = 10

  useEffect(() => {
    if (page > 9) return

    getOreumImgApi({
      page,
      pageSize,
    })
      .then((res) => {
        if (allData.length === 0) setAllData(res.data.resultSummary)
        else setAllData((prev) => prev.concat(res.data.resultSummary))
        setReadMore(true)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  if (!allData) return null

  return (
    <div className={styles.wrap}>
      <Search title='oreum' />
      <ul className={styles.listWrap}>
        {allData.map((oreum: IOreumImgListAPIRes, i) => {
          const index = `oreum-${i}`
          return <OreumItem key={index} oreum={oreum} />
        })}
      </ul>
      {readMore && <div ref={setTarget}>Loading</div>}
    </div>
  )
}

export default Oreum
