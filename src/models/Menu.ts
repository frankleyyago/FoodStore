class Menu {
  dishName: string
  description: string
  image: string
  id: number

  constructor(
    id: number,
    dishName: string,
    description: string,
    image: string
  ) {
    this.id = id
    this.dishName = dishName
    this.description = description
    this.image = image
  }
}

export default Menu
