import * as S from './styles'

import Button from '../Button'

import { open } from '../../store/reducers/modal'
import { useDispatch } from 'react-redux'

export type Props = {
  menu: string
  description: string
  image: string
  id?: number
  portion: string
  price: number
}

const Menus = ({ menu, description, image }: Props) => {
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(open())
  }
  console.log(openModal)

  const getDescription = (description: string) => {
    if (description.length > 117) {
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
    </>
  )
}

export default Menus
