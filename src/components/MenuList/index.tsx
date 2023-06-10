import Menus from '../Menu'
import Modal from '../Modal'

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
          <Menus
            key={menu.id}
            menu={menu.nome}
            image={menu.foto}
            description={menu.descricao}
            id={menu.id}
          />
        ))}
      </ListStyles>
      <ListStyles>
        {menus.map((modal) => (
          <Modal
            key={modal.id}
            menu={modal.nome}
            description={modal.descricao}
            image={modal.foto}
          />
        ))}
      </ListStyles>
    </div>
  )
}

export default MenuList
