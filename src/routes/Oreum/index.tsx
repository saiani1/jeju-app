import { IOreumImgList } from 'types/oreum.d'
import { useRecoil } from 'hooks/state'
import { filterDataValue } from 'recoil/oreum'

import OreumItem from './OreumItem'
import Search from 'components/Search'

import styles from './oreum.module.scss'

const Oreum = () => {
  const [filterData] = useRecoil(filterDataValue)

  return (
    <div className={styles.wrap}>
      <Search title='oreum' />
      <ul className={styles.listWrap}>
        {filterData.map((oreum: IOreumImgList, i) => {
          const index = `oreum-${i}`
          return <OreumItem key={index} oreum={oreum} />
        })}
      </ul>
    </div>
  )
}

export default Oreum
