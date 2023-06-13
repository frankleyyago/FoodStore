import * as S from './styles'

import closed from '../../assets/images/close.svg'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../store/reducers/modal'
import { RootReducer } from '../../store'
import { Props } from '../Menu'

import { add, open } from '../../store/reducers/cart'

export const PriceFormat = (price: number) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
const Modal = ({ description, image, menu, price, portion, id }: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.modal)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add({ id, menu, description, image, portion, price }))
    dispatch(open())
  }

  const closeModal = () => {
    dispatch(close())
  }

  return (
    <>
      <S.ModalStyles className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeModal}>
          <S.ModalContentStyles className="container">
            <S.ModalHeaderStyles>
              <img
                onClick={closeModal}
                src={closed}
                alt="Clique aqui para fechar"
              />
            </S.ModalHeaderStyles>
            <S.ModalBodyStyles>
              <img src={image} alt="" />
              <div>
                <h3>{menu}</h3>
                <p>{description}</p>
                <h4>Serve: de {portion}</h4>
                <div>
                  <Button
                    type="button"
                    title="Clique aqui para adicionar ao carrinho"
                    onClick={addToCart}
                  >
                    <span>Adicionar ao carrinho - {PriceFormat(price)}</span>
                  </Button>
                </div>
              </div>
            </S.ModalBodyStyles>
          </S.ModalContentStyles>
        </S.Overlay>
      </S.ModalStyles>
    </>
  )
}

export default Modal
