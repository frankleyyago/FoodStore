import * as S from './styles'

import Button from '../Button'

type Props = {
  menu: string
  description: string
  image: string
}

const Menus = ({ menu, description, image }: Props) => {
  return (
    <>
      <S.CardStyles>
        <img src={image} alt={menu} />
        <S.DetailStyles>
          <S.TitleHeadStyles>
            <S.RestaurantTitleStyles>{menu}</S.RestaurantTitleStyles>
          </S.TitleHeadStyles>
          <S.DescriptionStyles>{description}</S.DescriptionStyles>
          <Button type="link" to="/profile" title="Clique aqui para saber mais">
            Mais detalhes
          </Button>
        </S.DetailStyles>
      </S.CardStyles>
    </>
  )
}

export default Menus
