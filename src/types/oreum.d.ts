export interface IJejuAPIRes {
  page: number
  perPage: number
  totalCount: number
  currentCount: number
  matchCount: number
  data: IOreumAPIRes[]
}

export interface IOreumAPIRes {
  oleumKname: string
  oleumEname: string
  oleumAddr: string
  oleumAltitu: number
  x: number
  y: number
  explan: string
  imgPath: string
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
