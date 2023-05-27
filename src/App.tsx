import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Footer from './components/Footer'

import PageRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalCss />
        <PageRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
