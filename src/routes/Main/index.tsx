import { Link } from 'react-router-dom'

import { useRecoil } from 'hooks/state'
import { searchInputValue, filterDataValue } from 'recoil/oreum'
import Search from 'components/Search/index'
import transformData from 'routes/Oreum/transformData'

import { SearchIcon } from 'assets/svgs/index'
import styles from './main.module.scss'

const Main = () => {
  const [, setFilterData] = useRecoil(filterDataValue)
  const [searchKeyword, setSearchKeyword] = useRecoil(searchInputValue)

  if (searchKeyword.length !== 0) setSearchKeyword('')

  const handleBtnClick = (event: React.MouseEvent<HTMLElement>) => {
    const targetText = (event.target as HTMLElement).textContent as string
    setSearchKeyword(targetText)
    setFilterData(transformData(targetText))
  }

  return (
    <div className={styles.wrap}>
      <Search title='main' />
      <div className={styles.cardWrap}>
        <Link to='oreum' onClick={handleBtnClick}>
          <SearchIcon className={styles.icon} />
          지역별 <br />
          보기
        </Link>
        <Link to='oreum' onClick={handleBtnClick}>
          <SearchIcon className={styles.icon} />
          소요시간별 <br />
          보기
        </Link>
      </div>
    </div>
  )
}

export default Main
