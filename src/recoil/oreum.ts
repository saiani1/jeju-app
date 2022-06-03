import { atom } from 'recoil'
import { IOreumImgListAPIRes, IOreumTimeAPIRes } from 'types/oreum.d'

export const searchInputValue = atom<string>({
  key: '#searchInputValue',
  default: '',
})

export const oreumApiList = atom<IOreumImgListAPIRes[]>({
  key: '#oreumApiList',
  default: [],
})

export const oreumTimeApiList = atom<IOreumTimeAPIRes[]>({
  key: '#oreumTimeApiList',
  default: [],
})
