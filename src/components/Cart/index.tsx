import Button from '../Button'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'

import pizza from '../../assets/images/pizza.svg'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={pizza} alt="" />
          <div>
            <h3>Nome do prato</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizza} alt="" />
          <div>
            <h3>Nome do prato</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Prices>
        <p>Valor total</p>
        <p>R$ 182,70</p>
      </Prices>
      <Button title="Clique aqui para continuar com a entrega" type="button">
        <span>Continuar com a entrega</span>
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
