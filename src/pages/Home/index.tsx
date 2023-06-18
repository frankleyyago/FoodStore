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
  const { data: restaurant, isLoading } = useGetRestaurantListQuery()

  return (
    <>
      <HomeHeader />
      <div className="container">
        <RestaurantsList isLoading={isLoading} restaurants={restaurant} />
      </div>
    </>
  )
}

export default Home
