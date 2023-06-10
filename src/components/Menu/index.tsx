import * as S from './styles'

import Button from '../Button'
import Modal from '../Modal'

import { open } from '../../store/reducers/modal'
import { useDispatch } from 'react-redux'

export type Props = {
  menu: string
  description: string
  image: string
  id: number
}

const Menus = ({ menu, description, image, id }: Props) => {
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(open())
  }

  return (
    <>
      <S.CardStyles>
        <img src={image} alt={menu} />
        <S.DetailStyles>
          <S.TitleHeadStyles>
            <S.RestaurantTitleStyles>{menu}</S.RestaurantTitleStyles>
          </S.TitleHeadStyles>
          <S.DescriptionStyles>{description}</S.DescriptionStyles>
          <Button
            onClick={openModal}
            type="button"
            title="Clique aqui para saber mais"
          >
            Mais detalhes
          </Button>
        </S.DetailStyles>
      </S.CardStyles>
      <Modal description={description} image={image} menu={menu} id={id} />
    </>
  )
}

export default Menus
