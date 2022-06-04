import axios from 'axios'
import { IOreumImgAPIRes } from 'types/oreum'

const BASE_URL = 'https://gis.jeju.go.kr/rest/JejuOleumVRImg/getOleumADetailList'

interface Params {
  page: number
  pageSize: number
}

export const getOreumImgApi = (params: Params) =>
  axios.get<IOreumImgAPIRes>(`${BASE_URL}`, {
    params: {
      ...params,
    },
  })
