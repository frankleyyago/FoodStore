import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

import Button from '../Button'
import { close, remove } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { clear } from '../../store/reducers/cart'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const navigate = useNavigate()

  const [cart, setCart] = useState(true)
  const [delivery, setDelivery] = useState(false)
  const [payment, setPayment] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false)

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
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
      zipCode: Yup.string()
        .min(8, 'O nome precisa ter pelo menos 10 caracteres')
        .required('O campo é obrigatório'),
      addressNumber: Yup.number()
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
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O campo precisa ter no minimo 4 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.addressNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.price
        }))
      })
    }
  })

  const goToCartAndDelivery = () => {
    if (items.length === 0 && !isSuccess) {
      return closeCart()
    } else {
      setCart(!cart)
      setDelivery(!delivery)
    }
  }

  const goToDeliveryAndPayment = () => {
    setDelivery(!delivery)
    setPayment(!payment)
  }

  const goToPaymentAndOrderSuccess = () => {
    setPayment(!payment)
    setOrderSuccess(!orderSuccess)
  }

  const finishPurchase = () => {
    setCart(true)
    setDelivery(false)
    setPayment(false)
    setOrderSuccess(false)
    navigate('/')
    closeCart()
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

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar className={cart ? '' : 'is-closed'}>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.image} alt="remover item do carrinho" />
                  <div>
                    <h3>{item.menu}</h3>
                    <span>{parseToBrl(item.price)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </S.CartItem>
              ))}
            </ul>
            <S.Prices>
              <p>Valor total</p>
              <p>{parseToBrl(getTotalPrice())}</p>
            </S.Prices>
            <Button
              onClick={goToCartAndDelivery}
              title="Clique aqui para continuar com a entrega"
              type="button"
            >
              <span>Continuar com a entrega</span>
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho esta vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </S.Sidebar>

      {isSuccess && data ? (
        <S.Sidebar className={orderSuccess ? '' : 'is-closed'}>
          <h1>Pedido realizado - {data.orderId}</h1>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p className="margin-top">
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p className="margin-top">
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p className="margin-top">
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <S.ButtonContainer>
            <Button
              onClick={finishPurchase}
              title="Clique aqui para continuar com a entrega"
              type="button"
            >
              <span>Concluir</span>
            </Button>
          </S.ButtonContainer>
        </S.Sidebar>
      ) : (
        <>
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
                    className={checkInputHasError('receiver') ? 'error' : ''}
                  />
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
                    className={checkInputHasError('address') ? 'error' : ''}
                  />
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
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <InputMask
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                    mask="99999-99"
                  />
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
                    className={
                      checkInputHasError('addressNumber') ? 'error' : ''
                    }
                  />
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
                    className={checkInputHasError('complement') ? 'error' : ''}
                  />
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
                    className={checkInputHasError('cardOwner') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </S.InputGroup>
                <S.InputGroup className="max-width">
                  <label htmlFor="cvv">CVV</label>
                  <InputMask
                    id="cvv"
                    type="text"
                    name="cvv"
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cvv') ? 'error' : ''}
                    mask="999"
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="expiresMonth">Mês de expiração</label>
                  <InputMask
                    id="expiresMonth"
                    type="text"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                    mask="99"
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="expiresYear">Ano de expiração</label>
                  <InputMask
                    id="expiresYear"
                    type="text"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                    mask="99"
                  />
                </S.InputGroup>
              </S.Row>
              <S.ButtonContainer>
                <Button
                  onClick={() => {
                    goToPaymentAndOrderSuccess()
                    form.handleSubmit()
                  }}
                  title="Clique aqui para continuar com a entrega"
                  type="button"
                  disabled={isLoading}
                >
                  <span>
                    {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
                  </span>
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
        </>
      )}
    </S.CartContainer>
  )
}

export default Cart
