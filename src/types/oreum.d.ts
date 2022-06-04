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
  time: number
}
