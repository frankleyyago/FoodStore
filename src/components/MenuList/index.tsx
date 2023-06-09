import Menus from '../Menu'
import { ListStyles } from './styles'
import { Menu } from '../../pages/Profile'

export type Props = {
  menus: Menu[]
}

const MenuList = ({ menus }: Props) => {
  return (
    <div>
      <ListStyles>
        {menus.map((menu) => (
          <Menus
            key={menu.id}
            menu={menu.nome}
            image={menu.foto}
            description={menu.descricao}
            id={menu.id}
          />
        ))}
      </ListStyles>
    </div>
  )
}

export default MenuList
