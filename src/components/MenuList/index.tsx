import Menus from '../Menu'

import { Menu } from '../../pages/Profile'

import { ListStyles } from './styles'
import Modal from '../Modal'
import { useState } from 'react'

export type Props = {
  menus: Menu[]
}

const MenuList = ({ menus }: Props) => {
  const [selectedMenu, setSelectedMenu] = useState<Menu>()

  const handleMenuClick = (menu: Menu) => {
    setSelectedMenu(menu)
  }

  return (
    <div>
      <ListStyles>
        {menus.map((menu) => (
          <li key={menu.id} onClick={() => handleMenuClick(menu)}>
            <Menus
              menu={menu.nome}
              image={menu.foto}
              description={menu.descricao}
              portion={menu.porcao}
              price={menu.preco}
              id={menu.id}
            />
          </li>
        ))}
      </ListStyles>
      {selectedMenu && (
        <Modal
          image={selectedMenu.foto}
          description={selectedMenu.descricao}
          menu={selectedMenu.nome}
          id={selectedMenu.id}
          portion={selectedMenu.porcao}
          price={selectedMenu.preco}
        />
      )}
    </div>
  )
}

export default MenuList
