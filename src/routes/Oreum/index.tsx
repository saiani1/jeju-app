import { useEffect, useState } from 'react'
import axios from 'axios'
import { IOreumAPIRes, IJejuAPIRes } from 'types/oreum.d'
import OreumItem from './OreumItem'

import styles from './oreum.module.scss'

const Oreum = () => {
  const [oreumData, setOreumData] = useState([])

  axios({
    method: 'get',
    url: 'https://gis.jeju.go.kr/rest/JejuOleumVRImg/getOleumRDetailList',
    params: { 'page': 1, 'pageSize': 10 },
    responseType: 'json',
    headers: { 'access-control-allow-origin': '*' },
  }).then((res) => {
    console.log(JSON.stringify(res))
  })

  return (
    <div className={styles.wrap}>
      <ul>
        {oreumData.map((oreum: IOreumAPIRes, i) => {
          const index = `oreum-${i}`
          return <OreumItem key={index} oreum={oreum} />
        })}
      </ul>
    </div>
  )
}

export default Oreum
