import oreumImgData from 'assets/data/oreumImgData.json'
import filterTimeData from 'assets/data/filterTimeData.json'

import { IOreumImgList } from 'types/oreum.d'

const transformData = (keyword: string) => {
  let result: IOreumImgList[] = []

  const map = new Map()
  oreumImgData.forEach((item) => map.set(item.oleumKname, item))
  filterTimeData.forEach((item) => map.set(item.name, { ...map.get(item.name), ...item }))
  const arr = Array.from(map.values())
  result = arr.filter((item) => item.oleumKname !== undefined)

  if (keyword === '전체' || keyword === '지역별 보기') return result
  if (keyword === '소요시간별 보기') return result.filter((item) => item.time !== undefined)
  if (keyword !== undefined)
    return result.filter((item) => item.oleumKname.includes(keyword) || item.oleumAddr.includes(keyword))

  return result
}

export default transformData
