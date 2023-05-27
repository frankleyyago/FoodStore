import { styled } from 'styled-components'
import { colors } from '../../styles'
import { LinkStyles } from '../Button/styles'

export const CardStyles = styled.div`
  display: block;
  background-color: ${colors.red};
  color: ${colors.yellow};
  border: 8px solid ${colors.red};
  grid-template-columns: 1fr 1fr;
  position: relative;

  ${LinkStyles} {
    background-color: ${colors.yellow};
    color: ${colors.red};
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const TitleHeadStyles = styled.div`
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

//remove
export const DetailStyles = styled.div`
  padding: 0px;
`

export const RestaurantTitleStyles = styled.h3`
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
  margin-top: 8px;
`

export const DescriptionStyles = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  display: block;
`

export const InfosStyles = styled.div`
  position: absolute;
  top: 22px;
  right: 12px;
`
