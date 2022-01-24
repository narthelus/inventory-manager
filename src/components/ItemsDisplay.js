import React from 'react'

export default function ItemsDisplay(props) {
  const showItem = (item) => {
    return (
      <div key={Math.random()}>
        <p key={1}>Id: {item.id}</p>
        <p key={2}>Name: {item.name}</p>
        <p key={3}>Price: {item.price}</p>
        <p key={4}>Type: {item.type}</p>
        <p key={5}>Brand: {item.brand}</p>
      </div>
    )
  }
  return <div>{props.items.map(showItem)}</div>
}
