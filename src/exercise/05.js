// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({style, size, className = '', ...otherProps}) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>

      <Box size="medium" style={{fontStyle: 'italic', backgroundColor: 'pink'}}>
        medium pink box
      </Box>

      <Box
        size="large"
        style={{fontStyle: 'italic', backgroundColor: 'orange'}}
      >
        large orange box
      </Box>
    </div>
  )
}

export default App
