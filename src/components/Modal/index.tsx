import * as S from './styles'

import closed from '../../assets/images/close.svg'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../store/reducers/modal'
import { RootReducer } from '../../store'

type Props = {
  menu?: string
  description?: string
  image?: string
  id?: number
}

const Modal = ({ description, image, menu, id }: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.modal)

  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(close())
  }

  return (
    <>
      <S.ModalStyles className={isOpen ? 'is-open' : ''}>
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
              <h4>Serve: de 1 a 2 pessoas</h4>
              <div>
                <Button
                  type="link"
                  title="Clique aqui para adicionar ao carrinho"
                >
                  Adicionar ao carrinho - R$ 60,90
                </Button>
              </div>
            </div>
          </S.ModalBodyStyles>
        </S.ModalContentStyles>
      </S.ModalStyles>
    </>
  )
}

export default Modal
