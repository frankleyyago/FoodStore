import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.svg'

import * as S from './styles'
import Loader from '../Loader'

export type Banner = {
  titulo?: string
  capa?: string
  tipo?: string
  isLoading: boolean
}

const ProfileHeader = ({ isLoading }: Banner) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const { id } = useParams()
  const [banner, setBanner] = useState<Banner>({} as Banner)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setBanner(response)
      })
  }, [id])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <S.ProfileHeader>
        <div>
          <a href="/">Restaurantes</a>
          <Link to={'/'}>
            <img src={logo} alt="eFood" />
          </Link>
          <a role="button" onClick={openCart}>
            {items.length} produto(s) no carrinho
          </a>
        </div>
      </S.ProfileHeader>
      <S.BannerRestaurant style={{ backgroundImage: `url(${banner.capa})` }}>
        <div>
          <S.RestaurantCountry>{banner.tipo}</S.RestaurantCountry>
          <S.RestaurantName>{banner.titulo}</S.RestaurantName>
        </div>
      </S.BannerRestaurant>
    </>
  )
}

export default ProfileHeader
