import * as S from './styles'

import Button from '../Button'

export type Props = {
  menu: string
  description: string
  image: string
  id: number
}

const Menus = ({ menu, description, image, id }: Props) => {
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
            type="link"
            to={`/profile/${id}`}
            title="Clique aqui para saber mais"
          >
            Mais detalhes
          </Button>
        </S.DetailStyles>
      </S.CardStyles>
    </>
  )
}

export default Menus
