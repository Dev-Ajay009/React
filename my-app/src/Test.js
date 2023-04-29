import React from 'react'

function Test(props) {
    console.log(props);
  return (
    <div>
    Test--{props.Text}
    <h1>{props.Method('Data pass to prenet')}</h1>
    </div>
  )
}

export default Test