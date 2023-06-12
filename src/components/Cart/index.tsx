import Button from '../Button'
import * as S from './styles'

import pizza from '../../assets/images/pizza.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          <S.CartItem>
            <img src={pizza} alt="" />
            <div>
              <h3>Nome do prato</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </S.CartItem>
          <S.CartItem>
            <img src={pizza} alt="" />
            <div>
              <h3>Nome do prato</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </S.CartItem>
        </ul>
        <S.Prices>
          <p>Valor total</p>
          <p>R$ 182,70</p>
        </S.Prices>
        <Button title="Clique aqui para continuar com a entrega" type="button">
          <span>Continuar com a entrega</span>
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
