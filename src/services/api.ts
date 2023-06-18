import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'
import { Menu } from '../pages/Profile'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

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
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantListQuery,
  useGetMenuListQuery,
  usePurchaseMutation
} = api

export default api
