import { Restaurant } from '../../pages/Home'
import Loader from '../Loader'
import Restaurants from '../Restaurant'

import * as S from './styles'

export type Props = {
  restaurants?: Restaurant[]
  isLoading: boolean
}

const RestaurantsList = ({ restaurants, isLoading }: Props) => {
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

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <S.List>
        {restaurants &&
          restaurants.map((restaurant) => (
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
