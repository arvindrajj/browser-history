import './index.css'

const HistoryItem = props => {
  const {browserHistory, onDeleteBrowserHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = browserHistory

  const deleteHistory = () => {
    onDeleteBrowserHistory(id)
  }
  return (
    <li className="browser-history-container">
      <div className="content-container">
        <p className="time">{timeAccessed}</p>
        <div className="app-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="website-container">
            <p className="title">{title}</p>
            <a href={domainUrl} className="anchor">
              <p className="link">{domainUrl}</p>
            </a>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="button"
        testid="delete"
        onClick={deleteHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
