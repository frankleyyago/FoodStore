import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'

import Footer from './components/Footer'
import Home from './pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
      </>
    )
  }
])

function App() {
  return (
    <div className="App">
      <GlobalCss />
      <RouterProvider router={routes} />
      <Footer />
    </div>
  )
}

export default App
