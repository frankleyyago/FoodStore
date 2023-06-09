import { useEffect, useState } from 'react'

import HomeHeader from '../../components/HomeHeader'
import RestaurantsList from '../../components/RestaurantsList'

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
  const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setRestaurant(response)
      })
  }, [])
  return (
    <>
      <HomeHeader />
      <div className="container">
        <RestaurantsList restaurants={restaurant} />
      </div>
    </>
  )
}

export default Home
