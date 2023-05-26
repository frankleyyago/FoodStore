class Restaurant {
  restaurantName: string
  score: string
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    id: number,
    restaurantName: string,
    score: string,
    description: string,
    infos: string[],
    image: string
  ) {
    this.id = id
    this.restaurantName = restaurantName
    this.score = score
    this.description = description
    this.infos = infos
    this.image = image
  }
}

export default Restaurant
