import {
  ButtonStyles,
  Card,
  Description,
  Detail,
  Infos,
  ProductTitle,
  TitleHead
} from './styles'

import favStar from '../../assets/images/star.svg'
import Tag from '../Tag'

type Props = {
  id: number
  dish: string
  score: string
  description: string
  infos: string[]
  image: string
}

const Product = ({ id, dish, score, description, infos, image }: Props) => (
  <div>
    <Card>
      <img src={image} alt={dish} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Detail>
        <TitleHead>
          <ProductTitle>{dish}</ProductTitle>
          <div>
            <ProductTitle>{score}</ProductTitle>
            <img src={favStar} alt="Favorite star" />
          </div>
        </TitleHead>
        <Description> {description}</Description>
        <ButtonStyles>Saiba mais</ButtonStyles>
      </Detail>
    </Card>
  </div>
)

export default Product
