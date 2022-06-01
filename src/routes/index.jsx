import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

import GNB from 'routes/_shared/GNB'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <GNB />
      <div className={styles.app}>.</div>
    </div>
  )
}

export default App
