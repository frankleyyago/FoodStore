import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import backgroundRestaurantImg from '../../assets/images/restaurant.svg'

const ProfileHeader = () => {
  return (
    <>
      <S.ProfileHeaderStyles>
        <div>
          <h2>Restaurantes</h2>
          <img src={logo} alt="eFood" />
          <h2>0 produto(s) no carrinho</h2>
        </div>
      </S.ProfileHeaderStyles>
      <S.BannerRestaurantStyles>
        <div>
          <S.RestaurantCountryStyles>Italiano</S.RestaurantCountryStyles>
          <S.RestaurantNameStyles>
            La Dolce Vita Trattoria
          </S.RestaurantNameStyles>
        </div>
      </S.BannerRestaurantStyles>
    </>
  )
}

export default ProfileHeader
