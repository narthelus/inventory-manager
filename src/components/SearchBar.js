import { type } from '@testing-library/user-event/dist/type'
import { useState } from 'react'

export default function SearchBar(props) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [type, setType] = useState('')
  const [brand, setBrand] = useState('')

  const searchButtonPressed = () => {
    props.updateSearchParams({ name, price, type, brand })
  }

  return (
    <div>
      <h2>Search for an Item</h2>
      <form>
        <label htmlFor='name-field'>Name:</label>
        <input
          id='name-field'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor='price-field'>Max Price:</label>
        <input
          id='price-field'
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <label htmlFor='type-field'>Type:</label>
        <input
          id='type-field'
          type='text'
          value={type}
          onChange={(e) => setType(e.target.value)}
        ></input>
        <label htmlFor='brand-field'>Brand:</label>
        <input
          id='brand-field'
          type='text'
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        ></input>
        <button type='button' onClick={searchButtonPressed}>
          Search
        </button>
      </form>
    </div>
  )
}
