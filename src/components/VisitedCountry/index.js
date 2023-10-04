import './index.css'

const VisitedCountry = props => {
  const {countryDetails, onClickRemoveButton} = props
  const {id, name, imageUrl} = countryDetails

  const clickRemoveButton = () => {
    onClickRemoveButton(id)
  }

  return (
    <li key={id} className="visited-country-item">
      <img src={imageUrl} className="country-flag" alt="thumbnail" />
      <div className="visited-details-container">
        <p className="name">{name}</p>
        <button
          type="button"
          className="remove-button"
          onClick={clickRemoveButton}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry
