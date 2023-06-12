import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'
import { Menu } from '../pages/Profile'

interface RestaurantResponse {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  capa: string
  cardapio: Menu[]
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantList: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getMenuList: builder.query<Menu[], string>({
      query: (id) => `restaurantes/${id}`,
      transformResponse: (response: RestaurantResponse) => response.cardapio
    })
  })
})

export const { useGetRestaurantListQuery, useGetMenuListQuery } = api

export default api
