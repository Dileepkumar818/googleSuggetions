// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, userInput} = props
  const {suggestion} = suggestionsList

  const updateInput = () => {
    userInput(suggestion)
  }

  return (
    <li className="list-container">
      <p className="listPara">{suggestion}</p>
      <img
        className="image-arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={updateInput}
      />
    </li>
  )
}

export default SuggestionItem
