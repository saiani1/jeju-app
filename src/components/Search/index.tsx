import { ChangeEvent, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useRecoil } from 'hooks/state'
import { searchInputValue, filterDataValue } from 'recoil/oreum'
import Dropdown from 'components/Dropdown'
import transformData from 'routes/Oreum/transformData'

import { LogoIcon, SearchIcon, XIcon } from 'assets/svgs/index'
import styles from './search.module.scss'

interface Props {
  title: string
}

const CITY_DATA = ['전체', '제주시', '서귀포시']

const Search = ({ title }: Props) => {
  const nagivate = useNavigate()
  const [searchKeyword, setSearchKeyword] = useRecoil(searchInputValue)
  const [, setFilterData] = useRecoil(filterDataValue)

  const inputRef = useRef<HTMLInputElement>(null)

  const mainSearch = title === 'main' ? `${styles.mainSearch}` : ''
  const oreumSearch = title === 'oreum' ? `${styles.oreumSearch}` : ''

  const handleSearchSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setFilterData(transformData(searchKeyword))
    if (title === 'main') nagivate('oreum')
  }

  const handleInputClear = () => {
    setSearchKeyword('')
  }

  const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.currentTarget.value)
  }

  const handleClickBtn = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const targetText = (event.target as HTMLElement).textContent as string
    setSearchKeyword(targetText)
    setFilterData(transformData(targetText))
  }

  return (
    <form className={`${styles.wrap} ${mainSearch} ${oreumSearch}`} onSubmit={handleSearchSubmit}>
      <h1>
        <Link to='/'>
          <LogoIcon className={styles.logo} />
        </Link>
      </h1>
      <div className={styles.inputWrap}>
        <input
          type='text'
          placeholder='오름이나 지역을 입력하세요.'
          value={searchKeyword}
          ref={inputRef}
          onChange={handleKeywordChange}
        />
        {searchKeyword && (
          <button type='button' className={styles.clearBtn} onClick={handleInputClear}>
            <XIcon className={styles.clearIcon} />
          </button>
        )}
        <button type='submit' aria-label='검색' className={styles.submitBtn}>
          <SearchIcon className={styles.icon} />
        </button>
      </div>
      {title === 'oreum' && (
        <div className={styles.filterWrap}>
          <button type='button' className={styles.filterBtn} onClick={handleClickBtn}>
            소요시간별 보기
          </button>
          <span>지역별 보기</span>
          <Dropdown data={CITY_DATA} />
        </div>
      )}
    </form>
  )
}

export default Search
