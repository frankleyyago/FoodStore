import * as S from './styles'

import logo from '../../assets/images/logo.svg'

const HomeHeader = () => (
  <S.HomeHeader>
    <img src={logo} alt="efood" />
    <h2>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </h2>
  </S.HomeHeader>
)

export default HomeHeader
