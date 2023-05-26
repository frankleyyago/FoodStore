import Product from '../Product'
import { List, Container } from './styles'

import sushi from '../../assets/images/hioki.svg'

const ProductsList = () => (
  <Container>
    <List>
      <Product
        id={1}
        dish="Hioki Sushi"
        image={sushi}
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        score="4,6"
        infos={['Destaque da semana', 'japonesa']}
      />
      <Product
        id={2}
        dish="Hioki Sushi"
        image={sushi}
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        score="4,6"
        infos={['Destaque da semana', 'japonesa']}
      />
      <Product
        id={3}
        dish="Hioki Sushi"
        image={sushi}
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        score="4,6"
        infos={['Destaque da semana', 'japonesa']}
      />
      <Product
        id={4}
        dish="Hioki Sushi"
        image={sushi}
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        score="4,6"
        infos={['Destaque da semana', 'japonesa']}
      />
      <Product
        id={5}
        dish="Hioki Sushi"
        image={sushi}
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        score="4,6"
        infos={['Destaque da semana', 'japonesa']}
      />
      <Product
        id={6}
        dish="Hioki Sushi"
        image={sushi}
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        score="4,6"
        infos={['Destaque da semana', 'japonesa']}
      />
    </List>
  </Container>
)

export default ProductsList
