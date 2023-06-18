import { useState } from 'react'

import { Menu } from '../../pages/Profile'
import Menus from '../Menu'
import Modal from '../Modal'
import Loader from '../Loader'

import * as S from './styles'

export type Props = {
  menus?: Menu[]
  isLoading: boolean
}

const MenuList = ({ menus, isLoading }: Props) => {
  const [selectedMenu, setSelectedMenu] = useState<Menu>()

  const handleMenuClick = (menu: Menu) => {
    setSelectedMenu(menu)
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <S.List>
        {menus &&
          menus.map((menu) => (
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
