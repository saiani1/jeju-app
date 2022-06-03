export interface IJejuAPIRes {
  page: number
  perPage: number
  totalCount: number
  currentCount: number
  matchCount: number
  data: IOreumAPIRes[]
}

export interface IOreumImgAPIRes {
  resultCode: string
  resultMsg: string
  resultSummary: IOreumImgListAPIRes[]
}

export interface IOreumImgListAPIRes {
  oleumKname: string
  oleumEname: string
  oleumAddr: string
  oleumAltitu: number
  x: number
  y: number
  explan: string
  imgPath: string
}

export interface IOreumTimeAPIRes {
  고유번호: number
  위치정보: string
  측정연도: number
  측정월: number
  측정일: number
  측정시간: string
  연령대: string
  성별: string
}

/*   데이터기준일자: string
  면적: number
  비고: number
  소재지: string
  오름명: string
  표고: string
  행정시: string
  형태: string
 */
