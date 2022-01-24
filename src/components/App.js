import { useState } from 'react'
import SearchBar from './SearchBar'
import AddItem from './AddItem'
import ItemsDisplay from './ItemsDisplay'
import styled from 'styled-components'

const Title = styled.h1`
  color: ${(props) => (props.color ? props.color : 'black')};
`

export default function App() {
  const [filters, setFilters] = useState({})
  const [data, setData] = useState({ items: [] })

  const updateFilters = (searchParams) => {
    setFilters(filters)
  }

  const addItemToData = (item) => {
    let items = data['items']
    item.id = items.length
    items.push(item)
    setData({ items })
    console.log(data)
  }

  return (
    <div className='App'>
      <Title color='red'>Test</Title>
      <SearchBar updateSearchParams={updateFilters} />
      <ItemsDisplay items={data['items']} />
      <AddItem addItem={addItemToData} />
    </div>
  )
}
