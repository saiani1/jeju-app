import data from 'assets/data/jejuClimbingTimeData.json'
import { IOreumTimeAPIRes } from 'types/oreum.d'

interface IClimbingTime {
  time: number
  name: string
}

// eslint-disable-next-line @typescript-eslint/no-shadow
const transformData = (data: IOreumTimeAPIRes[]) => {
  // 측정시간, 위치정보만으로 새로운 객체배열 생성
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

  // 중복을 제거하여 name으로만 배열을 만든다.

  // 같은 name값을 가진 객체들 중 가장 큰 time값을 가진 아이들만 새로운 배열에 푸쉬한다.
  /*   const tmpArray = newArray
    .filter((prev, current) => {
      return prev.name === current.name
    })
    .reduce((prev, current) => {
      return prev.time > current.time ? prev : current
    })
 */
  console.log(transformData(data))

  return filterNameArr
}

export default transformData
