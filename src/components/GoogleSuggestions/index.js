// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchItem: ''}

  onInput = event => {
    this.setState({searchItem: event.target.value})
  }

  userInput = suggestion => {
    this.setState({searchItem: suggestion})
  }

  render() {
    const {searchItem} = this.state
    const {suggestionsList} = this.props
    const searchresults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().include(searchItem.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image-google"
        />
        <div className="input">
          <div className="search">
            <input
              type="search"
              value={searchItem}
              className="inputSearch"
              onChange={this.onInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search logo"
              className="image-search"
            />
          </div>
          <ul className="list">
            {searchresults.map(each => (
              <SuggestionItem
                suggestionsList={each}
                key={each.id}
                updateInput={this.userInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
