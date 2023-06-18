import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import { close, remove } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
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
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const goToCartAndDelivery = () => {
    if (items.length === 0) {
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
      </S.Sidebar>

      {isSuccess ? (
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
                  <input
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
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
                  <input
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                  />
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
                    className={checkInputHasError('cvv') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="expiresMonth">Mês de expiração</label>
                  <input
                    id="expiresMonth"
                    type="text"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="expiresYear">Ano de expiração</label>
                  <input
                    id="expiresYear"
                    type="text"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
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
        </>
      )}
    </S.CartContainer>
  )
}

export default Cart
