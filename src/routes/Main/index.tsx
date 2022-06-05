import { Link } from 'react-router-dom'
import Search from 'components/Search/index'
import { useRecoil } from 'hooks/state'
import { clickBtnValue, searchInputValue } from 'recoil/oreum'

import styles from './main.module.scss'
import { SearchIcon } from 'assets/svgs/index'

const Main = () => {
  const [, setClickBtn] = useRecoil(clickBtnValue)
  const [, setSearchKeyword] = useRecoil(searchInputValue)

  const handleBtnClick = (event: any) => {
    setClickBtn(event.target.textContent)
    setSearchKeyword(event.target.textContent)
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
