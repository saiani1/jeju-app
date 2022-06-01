import { axios } from 'hooks/worker'
import { IJejuAPIRes } from 'types/jeju.d'

const BASE_URL = 'https://api.odcloud.kr/api/15043497/v1/uddi:e2b01efa-220d-4773-be00-ae6d34628a0c'

interface Params {
  page: number
  perPage: number
}

// 37.494958, 126.844128
export const getWeatherForecast5DaysApi = (params: Params) =>
  axios.get<IJejuAPIRes>(`${BASE_URL}`, {
    params: {
      ...params,
      serviceKey: process.env.REACT_APP_JEJU_APP_KEY,
    },
  })
