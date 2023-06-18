import ProfileHeader from '../../components/ProfileHeader'
import MenuList from '../../components/MenuList'
import { useParams } from 'react-router-dom'
import { useGetMenuListQuery } from '../../services/api'

export type Menu = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type MenuParams = {
  id: string
}

const Profile = () => {
  const { id } = useParams() as MenuParams
  const { data: menu, isLoading } = useGetMenuListQuery(id)

  return (
    <>
      <ProfileHeader isLoading={isLoading} />
      <div className="container">
        <MenuList isLoading={isLoading} menus={menu} />
      </div>
    </>
  )
}

export default Profile
