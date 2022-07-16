export interface Category {
  gameId: string;
  categoryId: string;
  categoryName: string;
  variables: Variable[];
}

export interface Variable {
  variableId: string;
  valueId: string;
  valueLabel: string;
}
