import { GlobalCss } from './styles'

import Header from './components/Header/index'

function App() {
  return (
    <div className="App">
      <GlobalCss />
      <Header />
      <div className="container"></div>
    </div>
  )
}

export default App
