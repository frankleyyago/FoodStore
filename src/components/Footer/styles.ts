import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterStyles = styled.div`
  background-color: ${colors.yellow};
  height: 298px;
  color: ${colors.red};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;

  h3 {
    margin-top: 80px;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
  }
`

export const SocialImgStyles = styled.img`
  margin-top: 32px;
`
