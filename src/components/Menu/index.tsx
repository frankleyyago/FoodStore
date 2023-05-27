import {
  CardStyles,
  DescriptionStyles,
  DetailStyles,
  RestaurantTitleStyles,
  TitleHeadStyles
} from './styles'

import Button from '../Button'

type Props = {
  menu: string
  description: string
  image: string
}

const Menus = ({ menu, description, image }: Props) => (
  <div>
    <CardStyles>
      <img src={image} alt={menu} />
      <DetailStyles>
        <TitleHeadStyles>
          <RestaurantTitleStyles>{menu}</RestaurantTitleStyles>
        </TitleHeadStyles>
        <DescriptionStyles>{description}</DescriptionStyles>
        <Button type="link" to="/profile" title="Clique aqui para saber mais">
          Adicionar ao carrinho
        </Button>
      </DetailStyles>
    </CardStyles>
  </div>
)

export default Menus
