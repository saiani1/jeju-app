import { useState, useRef } from 'react'

import { useRecoil } from 'hooks/state'
import { searchInputValue, filterDataValue } from 'recoil/oreum'
import useOnClickOutside from 'hooks/useOnClickOutside'
import transformData from 'routes/Oreum/transformData'

import { ArrowIcon } from 'assets/svgs'
import styles from './dropdown.module.scss'

interface Props {
  data: string[]
}

const Dropdown = ({ data }: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [, setFilterData] = useRecoil(filterDataValue)
  const [, setSearchKeyword] = useRecoil(searchInputValue)
  const [selectedOption, setSelectedOption] = useState<string>('전체')
  const [dropdownClick, setDropdownClick] = useState(false)

  const handleDropdownClick = () => {
    setDropdownClick((prev) => !prev)
  }

  const handleOptionClick = (event: React.MouseEvent<HTMLElement>) => {
    const targetText = (event.target as HTMLElement).textContent as string
    setSelectedOption(targetText)
    setSearchKeyword(targetText)
    setDropdownClick(false)
    setFilterData(transformData(targetText))
  }

  useOnClickOutside(dropdownRef, () => setDropdownClick(false))

  return (
    <div className={styles.wrap} ref={dropdownRef}>
      <div className={styles.btnWrap}>
        <button type='button' className={styles.dropdown} onClick={handleDropdownClick}>
          {selectedOption}
        </button>
        <ArrowIcon className={styles.icon} />
      </div>
      {dropdownClick && (
        <ul className={styles.listWrap}>
          {data.map((city: string, i: number) => {
            const index = `city-${i}`
            return (
              <li key={index}>
                <button type='button' className={styles.listBtn} onClick={handleOptionClick}>
                  {city}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
