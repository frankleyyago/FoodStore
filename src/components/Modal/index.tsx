import { useState } from 'react'

import * as S from './styles'

import close from '../../assets/images/close.svg'
import Button from '../Button'

type Props = {
  menu: string
  description: string
  image: string
}

type ModalState = {
  isVisible: boolean
}

const Modal = ({ description, image, menu }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
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
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </p>
              <h4>Serve: de 2 a 3 pessoas</h4>
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
