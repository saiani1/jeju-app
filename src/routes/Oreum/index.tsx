import { useState, useEffect } from 'react'

import { useRecoil } from 'hooks/state'
import { filterDataValue } from 'recoil/oreum'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import OreumItem from './OreumItem'
import Search from 'components/Search'
import { IOreumImgList } from 'types/oreum.d'

import styles from './oreum.module.scss'

const Oreum = () => {
  const [filterData] = useRecoil(filterDataValue)
  const [readMore, setReadMore] = useState(false)

  /*   const [infinityItemArr, setInfinityItemArr] = useState([])

  let selectTargetTimeout: NodeJS.Timeout

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isIntersecting) {
      selectTargetTimeout = setTimeout(() => {
        setReadMore(true)
      }, 1000)
    }
    if (!isIntersecting) {
      clearTimeout(selectTargetTimeout)
      setReadMore(false)
    }
  }

  const { setTarget } = useIntersectionObserver({ onIntersect })

  useEffect(() => {
    let sliceData = filterData
    if (sliceData.length !== 0) {
      setInfinityItemArr((prev) => prev.concat(sliceData.slice(0, 20)))
      sliceData = filterData.slice(20)
      setReadMore(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readMore])
 */

  return (
    <div className={styles.wrap}>
      <Search title='oreum' />
      <p className={styles.info}>
        <span>{filterData.length}</span>개의 검색결과가 있습니다.
      </p>
      <ul className={styles.listWrap}>
        {filterData.map((oreum: IOreumImgList, i) => {
          const index = `oreum-${i}`
          return <OreumItem key={index} oreum={oreum} />
        })}
      </ul>
      {/*       {!readMore && <div ref={setTarget}>Loading</div>}
       */}{' '}
    </div>
  )
}

export default Oreum
