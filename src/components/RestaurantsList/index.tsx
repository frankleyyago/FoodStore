import { Restaurant } from '../../pages/Home'
import Restaurants from '../Restaurant'
import { ListStyles } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div>
    <ListStyles>
      {restaurants.map((restaurant) => (
        <Restaurants
          key={restaurant.id}
          restaurant={restaurant.titulo}
          image={restaurant.capa}
          description={restaurant.descricao}
          score={restaurant.avaliacao}
          type={restaurant.tipo}
        />
      ))}
    </ListStyles>
  </div>
)

export default RestaurantsList
