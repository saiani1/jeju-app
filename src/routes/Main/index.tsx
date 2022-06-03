import Search from 'components/Search/index'

import styles from './main.module.scss'
import { SearchIcon } from 'assets/svgs/index'

const Main = () => {
  return (
    <div className={styles.wrap}>
      <Search title='main' />
      <div className={styles.cardWrap}>
        <button type='button'>
          <SearchIcon className={styles.icon} />
          <span>낮은 오름</span>
          <br /> 찾기
        </button>
        <button type='button'>
          <SearchIcon className={styles.icon} />
          <span>지역별 오름</span>
          <br /> 찾기
        </button>
        <button type='button'>
          <SearchIcon className={styles.icon} />
          <span>인기도별 오름</span>
          <br /> 찾기
        </button>
      </div>
    </div>
  )
}

export default Main
