import Menus from '../Menu'

import { Menu } from '../../pages/Profile'

import { ListStyles } from './styles'

export type Props = {
  menus: Menu[]
}

const MenuList = ({ menus }: Props) => {
  return (
    <div>
      <ListStyles>
        {menus.map((menu) => (
          <li key={menu.id}>
            <Menus
              menu={menu.nome}
              image={menu.foto}
              description={menu.descricao}
              id={menu.id}
            />
          </li>
        ))}
      </ListStyles>
    </div>
  )
}

export default MenuList
