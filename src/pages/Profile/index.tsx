import pizza from '../../assets/images/pizza.svg'
import ProfileHeader from '../../components/ProfileHeader'
import MenuList from '../../components/MenuList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
  const [menu, setMenu] = useState<Menu[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((response) => setMenu(response))
  }, [id])

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
