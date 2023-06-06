import * as S from './styles'

import favStar from '../../assets/images/star.svg'
import Tag from '../Tag'
import Button from '../Button'

type Props = {
  restaurant: string
  score: number
  description: string
  type: string
  image: string
}

const Restaurants = ({
  restaurant,
  score,
  description,
  image,
  type
}: Props) => (
  <div>
    <S.CardStyles>
      <img src={image} alt={restaurant} />
      <S.InfosStyles>
        <Tag>{type}</Tag>
      </S.InfosStyles>
      <S.DetailStyles>
        <S.TitleHeadStyles>
          <S.RestaurantTitleStyles>{restaurant}</S.RestaurantTitleStyles>
          <div>
            <S.RestaurantTitleStyles>{score}</S.RestaurantTitleStyles>
            <img src={favStar} alt="Favorite star" />
          </div>
        </S.TitleHeadStyles>
        <S.DescriptionStyles> {description}</S.DescriptionStyles>
        <Button type="link" to="/profile" title="Clique aqui para saber mais">
          Saiba mais
        </Button>
      </S.DetailStyles>
    </S.CardStyles>
  </div>
)

export default Restaurants
