import logo from '../../assets/images/logo.svg'
import social from '../../assets/images/social.svg'
import { FooterStyles, SocialImgStyles } from './styles'

const Footer = () => (
  <FooterStyles>
    <img src={logo} alt="" />
    <SocialImgStyles src={social} alt="" />
    <h3>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </h3>
  </FooterStyles>
)

export default Footer
