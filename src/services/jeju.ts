import axios from 'axios'
import { IOreumImgAPIRes, IOreumTimeAPIRes } from 'types/oreum'

const BASE_URL = 'https://gis.jeju.go.kr/rest/JejuOleumVRImg/getOleumADetailList'
const BASE_URL2 = 'https://api.odcloud.kr/api/15096602/v1/uddi:fa68340e-64c8-4462-ae24-c574990b5e2c'

interface Params {
  page: number
  pageSize: number
}

interface Params2 {
  page: number
  perPage: number
}

export const getOreumImgApi = (params: Params) =>
  axios.get<IOreumImgAPIRes>(`${BASE_URL}`, {
    params: {
      ...params,
    },
  })

// 데이터 217153개
export const getOreumTimeApi = (params: Params2) =>
  axios.get<IOreumTimeAPIRes>(`${BASE_URL2}`, {
    params: {
      ...params,
      serviceKey: process.env.REACT_APP_JEJU_APP_KEY,
    },
  })
