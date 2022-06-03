import { IOreumAPIRes } from 'types/oreum.d'
import styles from './oreumItem.module.scss'

interface Props {
  oreum: IOreumAPIRes
}

const OreumItem = ({ oreum }: Props) => {
  return (
    <li className={styles.wrap}>
      <h3 className={styles.title}>{oreum.oleumKname}</h3>
      <img src={oreum.imgPath} alt={oreum.oleumKname} />
      <div className={styles.tagWrap}>
        <div className={styles.address}>{oreum.oleumAddr}</div>
      </div>
      <p className={styles.address}>{oreum.explan}</p>
    </li>
  )
}

export default OreumItem
