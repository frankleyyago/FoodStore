import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export type Banner = {
  titulo: string
  capa: string
  tipo: string
}

const ProfileHeader = () => {
  const { id } = useParams()
  const [banner, setBanner] = useState<Banner>({} as Banner)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setBanner(response)
      })
  }, [id])

  if (!banner) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <S.ProfileHeaderStyles>
        <div>
          <a href="/">Restaurantes</a>
          <Link to={'/'}>
            <img src={logo} alt="eFood" />
          </Link>
          <h2>0 produto(s) no carrinho</h2>
        </div>
      </S.ProfileHeaderStyles>
      <S.BannerRestaurantStyles
        style={{ backgroundImage: `url(${banner.capa})` }}
      >
        <div>
          <S.RestaurantCountryStyles>{banner.tipo}</S.RestaurantCountryStyles>
          <S.RestaurantNameStyles>{banner.titulo}</S.RestaurantNameStyles>
        </div>
      </S.BannerRestaurantStyles>
    </>
  )
}

export default ProfileHeader
