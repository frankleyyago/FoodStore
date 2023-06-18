import styled from 'styled-components'
import { colors } from '../../styles'
import { Button } from '../Button/styles'

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
  display: none;
  justify-content: flex-end;
  z-index: 1;
  font-size: 14px;

  &.is-open {
    display: flex;
  }

  ${Button} {
    background-color: ${colors.yellow};
    color: ${colors.red};
    font-weight: bold;
    max-width: 100%;
    width: 100%;
    font-size: 14px;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.red};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  &.is-closed {
    display: none;
  }

  h1 {
    font-size: 16px;
    color: ${colors.yellow};
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    color: ${colors.yellow};
    line-height: 22px;
  }

  .margin-top {
    margin-top: 22px;
  }
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
    cursor: pointer;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`

export const InputGroup = styled.div`
  flex: auto;

  label {
    display: block;
    font-size: 14px;
    color: ${colors.yellow};
    margin: 8px 0;
    font-weight: bold;
    height: 16px;
  }

  input {
    background-color: ${colors.yellow};
    border: 1px solid ${colors.yellow};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    font-weight: bold;
    font-size: 14px;
  }

  &.max-width {
    max-width: 87px;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 24px;

  div {
    margin: 0;
  }
`
