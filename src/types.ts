export type User = {
  id: number;
  name: string;
  email: string;
  token: string;
};

export type Recipe = {
  ID: number;
  title: string;
  instructions: string;
  ingredients: Ingredient[];
  image: string;
};

export type Ingredient = {
  ID: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  name: string;
  recipes: null;
};
