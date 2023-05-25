import { GlobalCss } from './styles'

import Header from './components/Header/index'
import Product from './components/Product'
import ProductsList from './components/ProductsList'

function App() {
  return (
    <div className="App">
      <GlobalCss />
      <Header />
      <div className="container">
        <ProductsList />
      </div>
    </div>
  )
}

export default App
