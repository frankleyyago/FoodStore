import { styled } from 'styled-components'
import { colors } from '../../styles'

import backgroundBannerImg from '../../assets/images/banner.svg'

export const ProfileHeader = styled.div`
  background-image: url(${backgroundBannerImg});
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 186px;
  color: ${colors.red};

  div {
    display: flex;
    justify-content: space-between;
    width: 1024px;
    max-width: 100%;
    align-items: center;
    height: 98px;
    margin-top: 20px;
  }

  img {
    height: 58px;
  }

  a {
    font-size: 18px;
    text-decoration: none;
    color: ${colors.red};
    font-weight: bold;
    cursor: pointer;
  }
`

export const BannerRestaurant = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  position: relative;
  display: flex;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    color: ${colors.white};
    width: 1024px;
  }
`

export const RestaurantCountry = styled.h2`
  font-size: 32px;
  margin-top: 24px;
  font-weight: 100;
`

export const RestaurantName = styled.h1`
  font-size: 32px;
  margin-top: 156px;
  font-weight: 900;
`
