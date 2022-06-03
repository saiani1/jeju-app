import { IOreumAPIRes } from 'types/oreum.d'
import { MountainIcon } from 'assets/svgs'
import styles from './oreumItem.module.scss'

interface Props {
  oreum: IOreumAPIRes
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
          <li className={styles.tag}>156m</li>
          <li className={styles.tag}>20분</li>
        </ul>
      </div>
      <div className={styles.address}>{oreum.oleumAddr}</div>
      <p className={styles.content}>{oreum.explan}</p>
    </li>
  )
}

export default OreumItem
