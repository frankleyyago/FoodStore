import Button from '../Button'
import * as S from './styles'

import pizza from '../../assets/images/pizza.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { PriceFormat } from '../Modal'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((amount, currentPrice) => {
      return (amount += currentPrice.price)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.image} alt="" />
              <div>
                <h3>{item.menu}</h3>
                <span>{PriceFormat(item.price)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Prices>
          <p>Valor total</p>
          <p>{PriceFormat(getTotalPrice())}</p>
        </S.Prices>
        <Button title="Clique aqui para continuar com a entrega" type="button">
          <span>Continuar com a entrega</span>
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
