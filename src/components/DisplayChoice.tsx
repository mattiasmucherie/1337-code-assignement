import React from 'react'
import { RadioContainer, RadioLabel, RadioTitle } from './styledComponents'

interface DisplayChoiceProps {
  setDisplayMethod: React.Dispatch<React.SetStateAction<string>>
  displayMethod: string
}

const DisplayChoice: React.VFC<DisplayChoiceProps> = ({ setDisplayMethod, displayMethod }) => {
  const changeMethod: React.ChangeEventHandler<HTMLInputElement> = e => {
    setDisplayMethod(e.target.value)
  }

  return (
    <RadioContainer>
      <RadioTitle>Display Mode</RadioTitle>
      <div>
        <input type="radio" id="grid" value="grid" checked={displayMethod === 'grid'} onChange={changeMethod} />
        <RadioLabel htmlFor="grid">Grid</RadioLabel>
      </div>
      <div>
        <input type="radio" id="list" value="list" checked={displayMethod === 'list'} onChange={changeMethod} />
        <RadioLabel htmlFor="list">List</RadioLabel>
      </div>
    </RadioContainer>
  )
}

export default DisplayChoice
