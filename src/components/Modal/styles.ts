import styled from 'styled-components'
import { colors } from '../../styles'
import { LinkStyles } from '../Button/styles'

export const ModalStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  color: ${colors.white};
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  ${LinkStyles} {
    background-color: ${colors.yellow};
    color: ${colors.red};
  }
`

export const ModalContentStyles = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${colors.red};
  display: block;
  max-width: 100%;
  border-radius: 8px;
`

export const ModalHeaderStyles = styled.header`
  display: flex;
  justify-content: flex-end;

  img {
    margin: 8px 8px 0 0;
    cursor: pointer;
  }
`

export const ModalBodyStyles = styled.div`
  display: flex;
  padding: 8px 32px;
  font-size: 14px;
  line-height: 22px;

  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
    border-radius: 8px;
  }

  > div {
    margin-left: 24px;
  }

  p {
    font-size: 14px;
    margin-top: 16px;
  }

  h4 {
    margin: 16px 0 20px;
  }
`
