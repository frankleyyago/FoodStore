import Menus from '../Menu'
import { ListStyles } from './styles'
import Menu from '../../models/Menu'

export type Props = {
  menus: Menu[]
}

const MenuList = ({ menus }: Props) => (
  <div>
    <ListStyles>
      {menus.map((menu) => (
        <Menus
          key={menu.id}
          menu={menu.dishName}
          image={menu.image}
          description={menu.description}
        />
      ))}
    </ListStyles>
  </div>
)

export default MenuList
