import logo from '../../assets/images/logo.svg'
import social from '../../assets/images/social.svg'

import * as S from './styles'

const Footer = () => (
  <S.Footer>
    <img src={logo} alt="" />
    <S.SocialImg src={social} alt="" />
    <h3>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </h3>
  </S.Footer>
)

export default Footer
