import { IOreumImgList } from 'types/oreum.d'
import { MountainIcon } from 'assets/svgs'

import styles from './oreumItem.module.scss'

interface Props {
  oreum: IOreumImgList
}

const OreumItem = ({ oreum }: Props) => {
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
          <li className={styles.tag}>{oreum.oleumAddr.split(' ')[0]}</li>
        </ul>
      </div>
      <div className={styles.address}>{oreum.oleumAddr}</div>
      <p className={styles.content}>{oreum.explan}</p>
    </li>
  )
}

export default OreumItem
