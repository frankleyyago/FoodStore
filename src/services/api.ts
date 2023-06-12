import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantList: builder.query<Restaurant, void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetRestaurantListQuery } = api

export default api
