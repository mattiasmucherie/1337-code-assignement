import React from 'react'
import { RadioContainer, RadioLabel, RadioTitle } from './styledComponents'

interface SortingProps {
  setSortMethod: React.Dispatch<React.SetStateAction<string>>
  sortMethod: string
}

const Sorting: React.VFC<SortingProps> = ({ setSortMethod, sortMethod }) => {
  const changeMethod: React.ChangeEventHandler<HTMLInputElement> = e => {
    setSortMethod(e.target.value)
  }

  return (
    <RadioContainer>
      <RadioTitle>Sort By</RadioTitle>
      <div>
        <input type="radio" id="name" value="name" checked={sortMethod === 'name'} onChange={changeMethod} />
        <RadioLabel htmlFor="name">Name</RadioLabel>
      </div>
      <div>
        <input type="radio" id="office" value="office" checked={sortMethod === 'office'} onChange={changeMethod} />
        <RadioLabel htmlFor="office">Office</RadioLabel>
      </div>
    </RadioContainer>
  )
}

export default Sorting
