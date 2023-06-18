import favStar from '../../assets/images/star.svg'
import Tag from '../Tag'
import Button from '../Button'

import * as S from './styles'

type Props = {
  restaurant: string
  score: number
  description: string
  infos: string[]
  image: string
  id: number
}

const Restaurants = ({
  restaurant,
  score,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 245) {
      return description.slice(0, 245) + '...'
    }
    return description
  }

  return (
    <div>
      <S.Card>
        <img src={image} alt={restaurant} />
        <S.Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </S.Infos>
        <S.Detail>
          <S.TitleHead>
            <S.RestaurantTitle>{restaurant}</S.RestaurantTitle>
            <div>
              <S.RestaurantTitle>{score}</S.RestaurantTitle>
              <img src={favStar} alt="Favorite star" />
            </div>
          </S.TitleHead>
          <S.Description> {getDescription(description)}</S.Description>
          <Button
            type="link"
            to={`/profile/${id}`}
            title="Clique aqui para saber mais"
          >
            <span>Saiba mais</span>
          </Button>
        </S.Detail>
      </S.Card>
    </div>
  )
}

export default Restaurants
