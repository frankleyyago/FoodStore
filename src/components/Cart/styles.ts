import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonStyles } from '../Button/styles'

import remove from '../../assets/images/remove.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  font-size: 14px;

  ${ButtonStyles} {
    background-color: ${colors.yellow};
    color: ${colors.red};
    font-weight: bold;
    max-width: 100%;
    width: 100%;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.red};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`

export const Prices = styled.div`
  color: ${colors.yellow};
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin: 40px 0 16px;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.yellow};
  color: ${colors.red};
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  div {
    display: block;
    font-size: 18px;
    margin-left: 8px;

    img {
      height: 16px;
      width: 16px;
    }

    span {
      display: block;
      margin-top: 16px;
    }
  }

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  button {
    background-image: url(${remove});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 0;
  }
`
