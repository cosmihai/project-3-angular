export interface Cocktail {
  _id: string,
  name: String,
  glass: String,
  category: String,
  ingredients: Array<object>,
  garnish: String,
  preparation: String,
  isIBA: boolean,
  imageUrl: string,
  owner: string
}