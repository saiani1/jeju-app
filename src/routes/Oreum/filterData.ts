import filterTimeData from 'assets/data/filterTimeData.json'
import { IOreumImgListAPIRes } from 'types/oreum.d'

const filterData = (keyword: string, data: IOreumImgListAPIRes[], page: number) => {
  // 소요시간별 보기 새로운 배열 만들기

  let filtering: Object[] = []

  if (keyword === '소요시간별 보기') {
    for (let i = 0; i < filterTimeData.length; i += 1) {
      filtering = data.filter((item) => {
        return item.oleumKname === filterTimeData[i].name
      })
    }
    page += 1
  }
  if (data === '제주시') {
    filterData.oleumAddr.split(' ')[0] === '제주시'
  }
  if (data === '서귀포시') {
    filterData.oleumAddr.split(' ')[0] === '서귀포시'
  }
  if (data === '지역별 보기' || data === '전체') return

  /* 
   ** 해야할 것
   1. 소요시간별 보기의 경우 API에서 넘어오는 데이터와 타임데이터가 이름이 같다면 배열에 추가해서 뿌려줘야 함. (oreumItem에서는 해당 오브젝트에 time키가 있는지 확인해야할 것.)
   2. 키워드가 제주시, 서귀포시 일 경우에는 oleumAddr.split(' ')[0]이 제주시인지, 서귀포시인지 확인해서 filterData배열에 넣어야 한다.
   3. 전체일 경우, API를 필터하지 않고 10개씩 뿌려준다.
   4. 키워드 검색이 들어갈 경우에는 API 10개 호출 => oleumKname.include를 해서 있는지 확인, 없으면 다시 호출, 다시 확인을 거쳐서 11개가 넘어갔는데도 없으면 없다고 뜨게 하고, 있으면 작업 중단하고 화면에 표시한다.
  */
}

export default filterData
