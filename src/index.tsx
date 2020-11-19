import React from 'react'
import ReactDOM from 'react-dom'
import Page from './Page'
import './index.css'

if (module && module.hot) {
  module.hot.accept()
}

ReactDOM.render(<Page />, document.querySelector('#root'))
