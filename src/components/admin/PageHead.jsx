import React from 'react'

function PageHead({title, subtitle}) {
  return (
    <div className='page-head'>
      <h3>{title}</h3>
      <h1>{subtitle}</h1>
    </div>
  )
}

export default PageHead