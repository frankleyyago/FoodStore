import { HeaderStyles } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderStyles>
    <img src={logo} alt="efood" />
    <h2>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </h2>
  </HeaderStyles>
)

export default Header
