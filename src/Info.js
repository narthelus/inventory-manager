export default function Info() {
  const title = 'This is my title.'
  const showTitle = true

  if (showTitle) {
    return (
      <div>
        {title}
        <h1>Inventory System</h1>
        <p>Manage your stuff.</p>
      </div>
    )
  } else {
    return <p>empty</p>
  }
}
