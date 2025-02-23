import React from 'react'

export let Small = React.memo(({value}) => {
    console.log('me volvi a llamar')
  
    return (

    <small>{value}</small>
  )
})
