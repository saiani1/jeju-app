import axios from 'axios'
import { IOreumAPIRes } from 'types/oreum'

// const BASE_URL = 'https://api.odcloud.kr/api/15043497/v1/uddi:e2b01efa-220d-4773-be00-ae6d34628a0c'

/* https://cors-anywhere.herokuapp.com/
 */
const BASE_URL = 'https://gis.jeju.go.kr/rest/JejuOleumVRImg/getOleumADetailList'

interface Params {
  page: number
  pageSize: number
}
/* page: number
perPage: number
 */

export const getOreumApi = (params: Params) =>
  axios.get<IOreumAPIRes>(`${BASE_URL}`, {
    params: {
      ...params,
    },
  })
/*   serviceKey: process.env.REACT_APP_JEJU_APP_KEY,
 */
