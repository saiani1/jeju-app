import { atom } from 'recoil'
import { IOreumImgList } from 'types/oreum.d'

export const searchInputValue = atom<string>({
  key: '#searchInputValue',
  default: '',
})

export const filterDataValue = atom<IOreumImgList[]>({
  key: '#filterDataValue',
  default: [],
})
