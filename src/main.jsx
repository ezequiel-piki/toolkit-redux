import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Store/Store.js'
import { Counter } from './features/counter/Counter.jsx'
import PokemonApp from './PokemonApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <PokemonApp />
  </Provider>
  </React.StrictMode>,
)
