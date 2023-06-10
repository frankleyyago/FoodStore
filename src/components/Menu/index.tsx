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
  portion: string
  price: number
}

const Menus = ({ menu, description, image, id, portion, price }: Props) => {
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(open())
  }

  const getDescription = (description: string) => {
    if (description.length > 132) {
      return description.slice(0, 120) + '...'
    }
    return description
  }

  return (
    <>
      <S.CardStyles>
        <img src={image} alt={menu} />
        <S.DetailStyles>
          <S.TitleHeadStyles>
            <S.RestaurantTitleStyles>{menu}</S.RestaurantTitleStyles>
          </S.TitleHeadStyles>
          <S.DescriptionStyles>
            {' '}
            {getDescription(description)}
          </S.DescriptionStyles>
          <Button
            onClick={openModal}
            type="button"
            title="Clique aqui para saber mais"
          >
            <span>Mais detalhes</span>
          </Button>
        </S.DetailStyles>
      </S.CardStyles>
      <Modal
        description={description}
        image={image}
        menu={menu}
        id={id}
        portion={portion}
        price={price}
      />
    </>
  )
}

export default Menus
