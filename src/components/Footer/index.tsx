import logo from '../../assets/images/logo.svg'
import social from '../../assets/images/social.svg'
import { FooterStyle, SocialImg } from './styles'

const Footer = () => (
  <FooterStyle>
    <img src={logo} alt="" />
    <SocialImg src={social} alt="" />
    <h3>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </h3>
  </FooterStyle>
)

export default Footer
