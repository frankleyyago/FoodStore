import { useState } from 'react'

import { Menu } from '../../pages/Profile'
import Menus from '../Menu'
import Modal from '../Modal'

import * as S from './styles'

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
      <S.List>
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
      </S.List>
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
