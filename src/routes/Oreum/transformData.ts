import data from 'assets/data/jejuClimbingTimeData.json'
import { IOreumTimeAPIRes } from 'types/oreum.d'

interface IClimbingTime {
  time: number
  name: string
}

// eslint-disable-next-line @typescript-eslint/no-shadow
const transformData = (data: IOreumTimeAPIRes[]) => {
  const climbingTimeArr = data.map((item: IOreumTimeAPIRes) => {
    return { time: Number(item.측정시간.slice(0, 2)), name: item.위치정보 }
  })

  const filterNameArr = climbingTimeArr.filter((item: IClimbingTime, i) => {
    return (
      climbingTimeArr.findIndex((item2) => {
        return item.name === item2.name
      }) === i
    )
  })

  let result: IClimbingTime[] = []

  for (let i = 0; i < filterNameArr.length; i += 1) {
    const tmpArr = climbingTimeArr
      .filter((item) => {
        return filterNameArr[i].name === item.name
      })
      .reduce((prev, current) => {
        return prev.time > current.time ? prev : current
      })

    result.push(tmpArr)
  }

  return result
}

export default transformData
