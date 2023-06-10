import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Footer from './components/Footer'

import PageRoutes from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <GlobalCss />
          <PageRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
