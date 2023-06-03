import { ModalContent, ModalStyles } from './styles'

import close from '../../assets/images/close.svg'

type Props = {
  menu: string
  description: string
  image: string
}

const Modal = ({ description, image, menu }: Props) => (
  <>
    <ModalStyles className="container">
      <ModalContent>
        <img src={image} alt="" />
        <img src={close} alt="" />
        <h3>{menu}</h3>
        <p>{description}</p>
      </ModalContent>
    </ModalStyles>
  </>
)

export default Modal
