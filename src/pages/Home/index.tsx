import HomeHeader from '../../components/HomeHeader'
import RestaurantsList from '../../components/RestaurantsList'

import { useGetRestaurantListQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const { data: restaurant } = useGetRestaurantListQuery()

  if (restaurant) {
    return (
      <>
        <HomeHeader />
        <div className="container">
          <RestaurantsList restaurants={restaurant} />
        </div>
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Home
