import './index.css'

const CountryItem = props => {
  const {countryDetails, clickVisitedButton} = props
  const {id, name, isVisited} = countryDetails

  const onClickButton = () => {
    clickVisitedButton(id)
  }

  return (
    <li>
      <div className="country-item">
        <p className="country-name">{name}</p>
        {isVisited ? (
          <p className="visit-text">Visited</p>
        ) : (
          <button
            type="button"
            onClick={onClickButton}
            className="visited-button"
          >
            Visit
          </button>
        )}
      </div>
    </li>
  )
}

export default CountryItem
