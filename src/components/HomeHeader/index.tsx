import { HomeHeaderStyles } from './styles'

import logo from '../../assets/images/logo.svg'

const HomeHeader = () => (
  <HomeHeaderStyles>
    <img src={logo} alt="efood" />
    <h2>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </h2>
  </HomeHeaderStyles>
)

export default HomeHeader
