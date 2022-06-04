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
