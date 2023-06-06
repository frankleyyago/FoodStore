import { Restaurant } from '../../pages/Home'
import Restaurants from '../Restaurant'
import { ListStyles } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  const getRestaurantTag = (restaurant: Restaurant) => {
    const tags = []

    if (restaurant.destacado === true) {
      tags.push('destaque da semana')
    }

    if (restaurant.tipo) {
      tags.push(restaurant.tipo)
    }

    return tags
  }

  return (
    <div>
      <ListStyles>
        {restaurants.map((restaurant) => (
          <Restaurants
            key={restaurant.id}
            restaurant={restaurant.titulo}
            image={restaurant.capa}
            description={restaurant.descricao}
            score={restaurant.avaliacao}
            infos={getRestaurantTag(restaurant)}
          />
        ))}
      </ListStyles>
    </div>
  )
}

export default RestaurantsList
