import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import PageRoutes from './routes'
import { store } from './store'

import Footer from './components/Footer'
import Cart from './components/Cart'

import { GlobalCss } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <GlobalCss />
          <PageRoutes />
          <Footer />
          <Cart />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
