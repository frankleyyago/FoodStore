import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Restaurant from '../../models/Restaurant'

import sushi from '../../assets/images/hioki.svg'

const restaurant: Restaurant[] = [
  {
    id: 1,
    restaurantName: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    score: '4,9'
  },
  {
    id: 2,
    restaurantName: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Italiano'],
    score: '4,9'
  },
  {
    id: 3,
    restaurantName: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Destaque da semana'],
    score: '4,9'
  },
  {
    id: 4,
    restaurantName: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Destaque da mes'],
    score: '4,9'
  }
]

const Home = () => (
  <>
    <Header />
    <div className="container">
      <ProductsList restaurants={restaurant} />
    </div>
  </>
)

export default Home
