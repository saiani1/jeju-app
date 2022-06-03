import { Link, useNavigate } from 'react-router-dom'

import { SearchIcon, XIcon } from 'assets/svgs/index'
import { ChangeEvent, useRef } from 'react'
import styles from './search.module.scss'
import { useRecoil } from 'hooks/state'
import { searchInputValue } from 'recoil/search'

interface Props {
  title: string
}

const Search = ({ title }: Props) => {
  const [searchKeyword, setSearchKeyword] = useRecoil(searchInputValue)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const mainSearch = title === 'main' ? `${styles.mainSearch}` : ''
  const oreumSearch = title === 'oreum' ? `${styles.oreumSearch}` : ''

  const handleSearchSubmit = () => {
    navigate('/oreum')
  }

  const handleInputClear = () => {
    setSearchKeyword('')
  }

  const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.currentTarget.value)
  }

  return (
    <form className={`${styles.wrap} ${mainSearch} ${oreumSearch}`} onSubmit={handleSearchSubmit}>
      <h1 className={styles.logo}>
        <Link to='/'>
          <span>오름</span>에 <span>올레</span>
        </Link>
      </h1>
      <div className={styles.inputWrap}>
        <input
          type='text'
          placeholder='오름 또는 지역명을 입력하세요.'
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
    </form>
  )
}

export default Search
