import { useEffect, useState } from 'react'
import OreumItem from '../OreumItem'
import { IOreumTimeAPIRes } from 'types/oreum.d'
import transformData from '../transformData'
import data from 'assets/data/jejuClimbingTimeData.json'

import styles from './climbingTime.module.scss'

const ClimbingTime = () => {
  console.log(transformData(data as any))

  return <ul className={styles.listWrap}>.</ul>
}

export default ClimbingTime
