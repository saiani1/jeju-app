import { useState, useRef } from 'react'
import useOnClickOutside from 'hooks/useOnClickOutside'
import { useRecoil } from 'hooks/state'
import { clickBtnValue, searchInputValue } from 'recoil/oreum'

import styles from './dropdown.module.scss'
import { ArrowIcon } from 'assets/svgs'

interface Props {
  data: string[]
}

const Dropdown = ({ data }: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [, setClickBtn] = useRecoil(clickBtnValue)
  const [, setSearchKeyword] = useRecoil(searchInputValue)
  const [selectedOption, setSelectedOption] = useState<string>('전체')
  const [dropdownClick, setDropdownClick] = useState(false)

  const handleDropdownClick = () => {
    setDropdownClick((prev) => !prev)
  }

  const handleOptionClick = (event: React.MouseEvent<HTMLElement>) => {
    const targetText = (event.target as HTMLElement).textContent
    setSelectedOption(targetText as string)
    setClickBtn(targetText as string)
    setSearchKeyword(targetText as string)
    setDropdownClick(false)
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
