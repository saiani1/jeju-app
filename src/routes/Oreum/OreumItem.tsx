import { IOreumImgList } from 'types/oreum.d'
import { MountainIcon } from 'assets/svgs'

import styles from './oreumItem.module.scss'

interface Props {
  oreum: IOreumImgList
}

const OreumItem = ({ oreum }: Props) => {
  const addrArr = oreum.oleumAddr.split(' ').filter((item) => {
    return item !== ''
  })

  return (
    <li className={styles.wrap}>
      <img src={oreum.imgPath} alt={oreum.oleumKname} />
      <div className={styles.titleWrap}>
        <h3 className={styles.title}>
          <MountainIcon className={styles.icon} />
          {oreum.oleumKname}
        </h3>
        <ul className={styles.tagWrap}>
          {oreum.time !== undefined && <li className={styles.tag}>{oreum.time}분</li>}
          <li className={styles.tag}>{addrArr[0]}</li>
          <li className={styles.tag}>{addrArr[1]}</li>
        </ul>
      </div>
      <span className={styles.address}>{oreum.oleumAddr}</span>
      <p className={styles.content}>{oreum.explan}</p>
    </li>
  )
}

export default OreumItem
