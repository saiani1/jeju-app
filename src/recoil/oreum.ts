import { atom } from 'recoil'
import { IOreumImgListAPIRes } from 'types/oreum.d'

export const searchInputValue = atom<string>({
  key: '#searchInputValue',
  default: '',
})

export const clickBtnValue = atom<string>({
  key: '#clickBtnValue',
  default: '',
})

export const filterDataValue = atom<IOreumImgListAPIRes[]>({
  key: '#filterDataValue',
  default: [],
})

export const allDataValue = atom<IOreumImgListAPIRes[]>({
  key: '#allDataValue',
  default: [],
})

export const pageDataValue = atom<number>({
  key: '#pageDataValue',
  default: 1,
})
