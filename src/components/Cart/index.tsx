import Button from '../Button'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { PriceFormat } from '../Modal'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const [cart, setCart] = useState(true)
  const [delivery, setDelivery] = useState(false)
  const [payment, setPayment] = useState(false)
  const [order, setOrder] = useState(false)

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      addressNumber: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(10, 'O nome precisa ter pelo menos 10 caracteres')
        .required('O campo é obrigatório'),
      addressNumber: Yup.string()
        .min(1, 'O nome precisa ter pelo menos 1 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string()
        .min(2, 'O nome precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      cardOwner: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(13, 'O campo precisa ter no minimo 13 caracteres')
        .max(19, 'O campo precisa ter no maximo 19 caracteres')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'O campo precisa ter no minimo 3 caracteres')
        .max(3, 'O campo precisa ter no maximo 3 caracteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O campo precisa ter no minimo 2 caracteres')
        .max(2, 'O campo precisa ter no maximo 2 caracteres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(4, 'O campo precisa ter no minimo 4 caracteres')
        .max(4, 'O campo precisa ter no maximo 4 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

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

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
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
        <form onSubmit={form.handleSubmit}>
          <h1>Entrega</h1>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                id="receiver"
                type="text"
                name="receiver"
                value={form.values.receiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('receiver', form.errors.receiver)}</small>
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                id="address"
                type="text"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('address', form.errors.address)}</small>
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('city', form.errors.city)}</small>
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                type="number"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cep', form.errors.cep)}</small>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="addressNumber">Número</label>
              <input
                id="addressNumber"
                type="text"
                name="addressNumber"
                value={form.values.addressNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('addressNumber', form.errors.addressNumber)}
              </small>
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                id="complement"
                type="text"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('complement', form.errors.complement)}
              </small>
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
        </form>
      </S.Sidebar>

      <S.Sidebar className={payment ? '' : 'is-closed'}>
        <form onSubmit={form.handleSubmit}>
          <h1>Pagamento - Valor a pagar R$ 190,90</h1>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="cardOwner">Nome no cartão</label>
              <input
                id="cardOwner"
                type="text"
                name="cardOwner"
                value={form.values.cardOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('cardOwner', form.errors.cardOwner)}
              </small>
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                id="cardNumber"
                type="text"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('cardNumber', form.errors.cardNumber)}
              </small>
            </S.InputGroup>
            <S.InputGroup className="max-width">
              <label htmlFor="cvv">CVV</label>
              <input
                id="cvv"
                type="text"
                name="cvv"
                value={form.values.cvv}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input
                id="expiresMonth"
                type="text"
                name="expiresMonth"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
              </small>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input
                id="expiresYear"
                type="text"
                name="expiresYear"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('expiresYear', form.errors.expiresYear)}
              </small>
            </S.InputGroup>
          </S.Row>
          <S.ButtonContainer>
            <Button
              onClick={() => {
                goToPaymentAndOrder()
                form.handleSubmit()
              }}
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
        </form>
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
