import { useState, useRef } from 'react'
import useOnClickOutside from 'hooks/useOnClickOutside'

import styles from './dropdown.module.scss'

const Dropdown = () => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [selectedOption, setSelectedOption] = useState<string>('전체')
  const [dropdownClick, setDropdownClick] = useState(false)

  const handleDropdownClick = () => {
    setDropdownClick((prev) => !prev)
  }

  const handleOptionClick = (event: React.MouseEvent<HTMLElement>) => {
    const targetText = (event.target as HTMLElement).textContent
    setSelectedOption(targetText as string)
    setDropdownClick(false)
  }

  useOnClickOutside(dropdownRef, () => setDropdownClick(false))

  return (
    <div className={styles.dropdownWrap} ref={dropdownRef}>
      <button type='button' className={styles.dropdown} onClick={handleDropdownClick}>
        {selectedOption}
      </button>
      {dropdownClick && (
        <ul className={styles.dropdownListWrap}>
          <li>
            <button type='button' onClick={handleOptionClick}>
              지역명
            </button>
          </li>
          <li>
            <button type='button' onClick={handleOptionClick}>
              오름명
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Dropdown
