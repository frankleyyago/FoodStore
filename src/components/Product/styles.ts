import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  display: block;
  background-color: ${colors.white};
  color: ${colors.red};
  border: 2px solid ${colors.red};
  grid-template-columns: 1fr 1fr;
`
export const TitleHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;

    img {
      margin-left: 8px;
    }
  }
`

export const Detail = styled.div`
  padding: 8px;
`

export const ProductTitle = styled.h3`
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
  margin-top: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  display: block;
`

export const ButtonStyles = styled.button`
  background-color: ${colors.red};
  color: ${colors.lightYellow};
  border: none;
  padding: 4px 6px;
  margin-top: 16px;
`
