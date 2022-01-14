import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class History extends Component {
  state = {
    searchInput: '',
    historyList: [],
  }

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteBrowserHistory = testId => {
    const {historyList} = this.state

    const browserHistoryList = historyList.filter(item => item.id !== testId)
    this.setState({historyList: browserHistoryList})
  }

  render() {
    const {searchInput} = this.state
    const {historyList} = this.state
    const filteredHistoryList = historyList.filter(item =>
      item.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
          <div className="search-bar">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-logo"
              />
            </div>
            <input
              type="search"
              className="input"
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <ul className="browser-histories-container">
          {filteredHistoryList.map(each => (
            <HistoryItem
              browserHistory={each}
              key={each.id}
              onDeleteBrowserHistory={this.onDeleteBrowserHistory}
            />
          ))}
          {filteredHistoryList.length === 0 && (
            <div className="bottom-container">
              <p className="msg">There is no history to show</p>
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default History
