import styles from './main.module.scss'
import { Link } from 'react-router-dom'
import { SearchIcon } from 'assets/svgs/index'

const Main = () => {
  const handleSearchSubmit = () => {}

  return (
    <form className={styles.formWrap} onSubmit={handleSearchSubmit}>
      <h1 className={styles.logo}>
        <Link to='/'>
          <span>오름</span>에 <span>올레</span>
        </Link>
      </h1>
      <div className={styles.inputWrap}>
        <input type='text' placeholder='오름 또는 지역명을 입력하세요.' />
        <button type='submit' aria-label='검색'>
          <SearchIcon className={styles.icon} />
        </button>
      </div>
      <div className={styles.cardWrap}>
        <button type='button'>
          <span>낮은 오름</span>
          <br /> 찾기
          <SearchIcon className={styles.icon} />
        </button>
        <button type='button'>
          <span>지역별 오름</span>
          <br /> 찾기
          <SearchIcon className={styles.icon} />
        </button>
        <button type='button'>
          <span>인기도별 오름</span>
          <br /> 찾기
          <SearchIcon className={styles.icon} />
        </button>
      </div>
    </form>
  )
}

export default Main
