import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Footer from './components/Footer'

import PageRoutes from './routes'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'

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
