import { styled } from 'styled-components'
import { colors } from '../../styles'

import backgroundBannerImg from '../../assets/images/banner.svg'

export const HomeHeader = styled.div`
  background-image: url(${backgroundBannerImg});
  text-align: center;
  justify-content: space-between;
  height: 384px;
  color: ${colors.red};
  line-height: 42px;
  font-style: bold;

  img {
    margin-top: 40px;
  }

  h2 {
    margin-top: 146px;
    margin-bottom: 40px;
    font-weight: 900;
    font-size: 36px;
    background-color: ${colors.yellow};
  }
`
