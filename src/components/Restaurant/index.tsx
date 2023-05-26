import {
  CardStyles,
  DescriptionStyles,
  DetailStyles,
  InfosStyles,
  RestaurantTitleStyles,
  TitleHeadStyles
} from './styles'

import favStar from '../../assets/images/star.svg'
import Tag from '../Tag'
import Button from '../Button'

type Props = {
  restaurant: string
  score: string
  description: string
  infos: string[]
  image: string
}

const Restaurant = ({
  restaurant,
  score,
  description,
  infos,
  image
}: Props) => (
  <div>
    <CardStyles>
      <img src={image} alt={restaurant} />
      <InfosStyles>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </InfosStyles>
      <DetailStyles>
        <TitleHeadStyles>
          <RestaurantTitleStyles>{restaurant}</RestaurantTitleStyles>
          <div>
            <RestaurantTitleStyles>{score}</RestaurantTitleStyles>
            <img src={favStar} alt="Favorite star" />
          </div>
        </TitleHeadStyles>
        <DescriptionStyles> {description}</DescriptionStyles>
        <Button type="link" to="/perfil" title="Clique aqui para saber mais">
          Saiba mais
        </Button>
      </DetailStyles>
    </CardStyles>
  </div>
)

export default Restaurant
