import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

import GNB from 'routes/_shared/GNB'
import Oreum from './Oreum'
import NotFound from './NotFound'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <GNB />
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Oreum />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
