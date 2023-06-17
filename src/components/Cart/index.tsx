import Button from '../Button'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { PriceFormat } from '../Modal'
import { useState } from 'react'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const [cart, setCart] = useState(true)
  const [delivery, setDelivery] = useState(false)
  const [payment, setPayment] = useState(false)
  const [order, setOrder] = useState(false)

  const goToCartAndDelivery = () => {
    setCart(!cart)
    setDelivery(!delivery)
  }

  const goToDeliveryAndPayment = () => {
    setDelivery(!delivery)
    setPayment(!payment)
  }

  const goToPaymentAndOrder = () => {
    setPayment(!payment)
    setOrder(!order)
  }

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
      <S.Sidebar className={cart ? '' : 'is-closed'}>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.image} alt="remover item do carrinho" />
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
        <Button
          onClick={goToCartAndDelivery}
          title="Clique aqui para continuar com a entrega"
          type="button"
        >
          <span>Continuar com a entrega</span>
        </Button>
      </S.Sidebar>

      <S.Sidebar className={delivery ? '' : 'is-closed'}>
        <h1>Entrega</h1>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="receiver">Quem irá receber</label>
            <input id="receiver" type="text" name="receiver" />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <input id="address" type="text" name="address" />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input id="city" type="text" name="city" />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="cep">CEP</label>
            <input id="cep" type="number" name="cep" />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="addressNumber">Número</label>
            <input id="addressNumber" type="text" name="addressNumber" />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input id="complement" type="text" name="complement" />
          </S.InputGroup>
        </S.Row>
        <S.ButtonContainer>
          <Button
            onClick={goToDeliveryAndPayment}
            title="Clique aqui para continuar com a entrega"
            type="button"
          >
            <span>Continuar com o pagamento</span>
          </Button>
          <Button
            onClick={goToCartAndDelivery}
            title="Clique aqui para continuar com a entrega"
            type="button"
          >
            <span>Voltar para o carrinho</span>
          </Button>
        </S.ButtonContainer>
      </S.Sidebar>

      <S.Sidebar className={payment ? '' : 'is-closed'}>
        <h1>Pagamento - Valor a pagar R$ 190,90</h1>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="cardOwner">Nome no cartão</label>
            <input id="cardOwner" type="text" name="cardOwner" />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input id="cardNumber" type="text" name="cardNumber" />
          </S.InputGroup>
          <S.InputGroup className="max-width">
            <label htmlFor="cvv">CVV</label>
            <input id="cvv" type="text" name="cvv" />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input id="expiresMonth" type="text" name="expiresMonth" />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input id="expiresYear" type="text" name="expiresYear" />
          </S.InputGroup>
        </S.Row>
        <S.ButtonContainer>
          <Button
            onClick={goToPaymentAndOrder}
            title="Clique aqui para continuar com a entrega"
            type="button"
          >
            <span>Finalizar pagamento</span>
          </Button>
          <Button
            onClick={goToDeliveryAndPayment}
            title="Clique aqui para continuar com a entrega"
            type="button"
          >
            <span>Voltar para a edição de endereço</span>
          </Button>
        </S.ButtonContainer>
      </S.Sidebar>

      <S.Sidebar className={order ? '' : 'is-closed'}>
        <h1>Pedido realizado - ORDER_ID</h1>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p className="margin-top">
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p className="margin-top">
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p className="margin-top">
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <S.ButtonContainer>
          <Button
            onClick={closeCart}
            title="Clique aqui para continuar com a entrega"
            type="button"
          >
            <span>Concluir</span>
          </Button>
        </S.ButtonContainer>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
