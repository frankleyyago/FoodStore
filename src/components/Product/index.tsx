import {
  ButtonStyles,
  Card,
  Description,
  Detail,
  ProductTitle,
  TitleHead
} from './styles'

import favStar from '../../assets/images/star.svg'

const Product = () => (
  <div>
    <Card>
      <img src="https://via.placeholder.com/472x217" alt="" />
      <Detail>
        <TitleHead>
          <ProductTitle>prato 1</ProductTitle>
          <div>
            <ProductTitle>4.9</ProductTitle>
            <img src={favStar} alt="Favorite star" />
          </div>
        </TitleHead>
        <Description>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Description>
        <ButtonStyles>Saiba mais</ButtonStyles>
      </Detail>
    </Card>
  </div>
)

export default Product
