import { GlobalCss } from './styles'

import Header from './components/Header/index'
import ProductsList from './components/ProductsList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <GlobalCss />
      <Header />
      <div className="container">
        <ProductsList />
      </div>
      <Footer />
    </div>
  )
}

export default App
