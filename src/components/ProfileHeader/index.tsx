import {
  BannerRestaurantStyles,
  ProfileHeaderStyles,
  RestaurantCountryStyles,
  RestaurantNameStyles
} from './styles'

import logo from '../../assets/images/logo.svg'

const ProfileHeader = () => (
  <>
    <ProfileHeaderStyles>
      <div>
        <h2>Restaurantes</h2>
        <img src={logo} alt="eFood" />
        <h2>0 produto(s) no carrinho</h2>
      </div>
    </ProfileHeaderStyles>
    <BannerRestaurantStyles>
      <div>
        <RestaurantCountryStyles>Italiana</RestaurantCountryStyles>
        <RestaurantNameStyles>La Dolce Vita Trattoria</RestaurantNameStyles>
      </div>
    </BannerRestaurantStyles>
  </>
)

export default ProfileHeader
