import React from 'react'
import Router from './Router/Router'
import { Provider } from 'react-redux'
import store from './redux/store'
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  )
}

export default App