import { useState } from 'react'

import * as S from './styles'

import close from '../../assets/images/close.svg'
import Button from '../Button'

import pizza from '../../assets/images/pizza.svg'

type Props = {
  menu?: string
  description?: string
  image?: string
  porcao?: string
  id?: number
}

type ModalState = {
  isVisible: boolean
}

const Modal = ({ description, image, menu, id, porcao }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: true
  })
  return (
    <>
      <S.ModalStyles className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContentStyles className="container">
          <S.ModalHeaderStyles>
            <img
              src={close}
              alt="Clique aqui para fechar"
              onClick={() => {
                setModal({ isVisible: false })
              }}
            />
          </S.ModalHeaderStyles>
          <S.ModalBodyStyles>
            <img src={image} alt="" />
            <div>
              <h3>{menu}</h3>
              <p>{description}</p>
              <h4>Serve: de {porcao}</h4>
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
