import { useEffect, useState } from 'react'
import { Menu } from '../../pages/Profile/index'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import backgroundRestaurantImg from '../../assets/images/restaurant.svg'
import { Restaurant } from '../../pages/Home'

const ProfileHeader = () => {
  const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((response) => setRestaurant(response))
  }, [])

  return (
    <>
      <S.ProfileHeaderStyles>
        <div>
          <h2>Restaurantes</h2>
          <img src={logo} alt="eFood" />
          <h2>0 produto(s) no carrinho</h2>
        </div>
      </S.ProfileHeaderStyles>
      <S.BannerRestaurantStyles
        style={{ backgroundImage: `url(${restaurant[1].capa})` }}
      >
        <div>
          <S.RestaurantCountryStyles>
            {restaurant[0].tipo}
          </S.RestaurantCountryStyles>
          <S.RestaurantNameStyles>
            La Dolce Vita Trattoria
          </S.RestaurantNameStyles>
        </div>
      </S.BannerRestaurantStyles>
    </>
  )
}

export default ProfileHeader
