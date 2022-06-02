import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

import Main from './Main'
import Oreum from './Oreum'
import NotFound from './NotFound'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='oreum' element={<Oreum />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
