import Product from '../Product'
import { List, Container } from './styles'
import Restaurant from '../../models/Restaurant'

export type Props = {
  restaurants: Restaurant[]
}

const ProductsList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <Product
          key={restaurant.id}
          restaurant={restaurant.restaurantName}
          image={restaurant.image}
          description={restaurant.description}
          score={restaurant.score}
          infos={restaurant.infos}
        />
      ))}
    </List>
  </Container>
)

export default ProductsList
