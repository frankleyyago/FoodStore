import { Restaurant } from '../../pages/Home'
import Restaurants from '../Restaurant'

import * as S from './styles'

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
      <S.List>
        {restaurants.map((restaurant) => (
          <Restaurants
            key={restaurant.id}
            restaurant={restaurant.titulo}
            image={restaurant.capa}
            description={restaurant.descricao}
            score={restaurant.avaliacao}
            infos={getRestaurantTag(restaurant)}
            id={restaurant.id}
          />
        ))}
      </S.List>
    </div>
  )
}

export default RestaurantsList
