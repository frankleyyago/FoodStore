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

const Profile = () => {
  const { id } = useParams()
  const { data: menu } = useGetMenuListQuery(id!)
  console.log('Dados do menu:', menu)

  if (!menu) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <ProfileHeader />
      <div className="container">
        <MenuList menus={menu} />
      </div>
    </>
  )
}

export default Profile
