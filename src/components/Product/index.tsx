import {
  Card,
  Description,
  Detail,
  Infos,
  ProductTitle,
  TitleHead
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

const Product = ({ restaurant, score, description, infos, image }: Props) => (
  <div>
    <Card>
      <img src={image} alt={restaurant} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Detail>
        <TitleHead>
          <ProductTitle>{restaurant}</ProductTitle>
          <div>
            <ProductTitle>{score}</ProductTitle>
            <img src={favStar} alt="Favorite star" />
          </div>
        </TitleHead>
        <Description> {description}</Description>
        <Button type="link" to="/perfil" title="Clique aqui para saber mais">
          Saiba mais
        </Button>
      </Detail>
    </Card>
  </div>
)

export default Product
