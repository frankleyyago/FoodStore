import * as S from './styles'

import favStar from '../../assets/images/star.svg'
import Tag from '../Tag'
import Button from '../Button'

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
      <S.CardStyles>
        <img src={image} alt={restaurant} />
        <S.InfosStyles>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </S.InfosStyles>
        <S.DetailStyles>
          <S.TitleHeadStyles>
            <S.RestaurantTitleStyles>{restaurant}</S.RestaurantTitleStyles>
            <div>
              <S.RestaurantTitleStyles>{score}</S.RestaurantTitleStyles>
              <img src={favStar} alt="Favorite star" />
            </div>
          </S.TitleHeadStyles>
          <S.DescriptionStyles>
            {' '}
            {getDescription(description)}
          </S.DescriptionStyles>
          <Button
            type="link"
            to={`/profile/${id}`}
            title="Clique aqui para saber mais"
          >
            <span>Saiba mais</span>
          </Button>
        </S.DetailStyles>
      </S.CardStyles>
    </div>
  )
}

export default Restaurants
