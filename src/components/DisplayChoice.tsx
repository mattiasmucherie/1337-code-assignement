import React from 'react'
import { RadioContainer, RadioTitle } from './styledComponents'

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
        <label htmlFor="grid">Grid</label>
      </div>
      <div>
        <input type="radio" id="list" value="list" checked={displayMethod === 'list'} onChange={changeMethod} />
        <label htmlFor="list">List</label>
      </div>
    </RadioContainer>
  )
}

export default DisplayChoice
