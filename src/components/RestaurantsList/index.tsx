import Restaurants from '../Restaurant'
import { ListStyles } from './styles'
import Restaurant from '../../models/Restaurant'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div>
    <ListStyles>
      {restaurants.map((restaurant) => (
        <Restaurants
          key={restaurant.id}
          restaurant={restaurant.restaurantName}
          image={restaurant.image}
          description={restaurant.description}
          score={restaurant.score}
          infos={restaurant.infos}
        />
      ))}
    </ListStyles>
  </div>
)

export default RestaurantsList
