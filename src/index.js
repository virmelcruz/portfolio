import React from 'react'
import {render} from 'react-dom'
import Player from './components/player'
import { Provider } from 'react-redux'
import App from './App'
import store from './config/store'

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
