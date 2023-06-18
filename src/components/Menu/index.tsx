import { open } from '../../store/reducers/modal'
import { useDispatch } from 'react-redux'

import Button from '../Button'

import * as S from './styles'

export type Props = {
  menu: string
  description: string
  image: string
  id: number
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
      <S.Card>
        <img src={image} alt={menu} />
        <S.Detail>
          <S.TitleHead>
            <S.RestaurantTitle>{menu}</S.RestaurantTitle>
          </S.TitleHead>
          <S.Description> {getDescription(description)}</S.Description>
          <Button
            onClick={openModal}
            type="button"
            title="Clique aqui para saber mais"
          >
            <span>Mais detalhes</span>
          </Button>
        </S.Detail>
      </S.Card>
    </>
  )
}

export default Menus
