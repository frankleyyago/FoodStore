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
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((ans) => ans.json())
      .then((ans) => setRestaurant(ans))
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
