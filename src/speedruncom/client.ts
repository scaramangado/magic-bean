import { Category, Variable } from '../model/appTypes';
import { SrcCategory, SrcRecords, SrcWrapper } from "./model";
import { Duration } from "luxon";

const downloadCategories = async (key: string): Promise<SrcCategory[]> => {

  const rawCategoryList: SrcWrapper<SrcCategory[]> =
    (await (await fetch(`https://www.speedrun.com/api/v1/games/${key}/categories?embed=variables`))
      .json()) as SrcWrapper<SrcCategory[]>;

  return rawCategoryList
    .data
    .filter(c => c.type === "per-game");
};

const convertCategory = (gameId: string, srcCategory: SrcCategory): Category[] => {

  let categories: Category[] = [
    {
      gameId,
      categoryId: srcCategory.id,
      categoryName: srcCategory.name,
      variables: [],
    }
  ];

  for (const srcVariable of srcCategory.variables.data.filter(v => v.scope.type === "global")) {

    const variables = Object.keys(srcVariable.values.values).map((k): Variable => ({
      variableId: srcVariable.id,
      valueId: k,
      valueLabel: srcVariable.values.values[k].label,
    }));

    categories = variables.flatMap((v): Category[] =>
      categories.map((c): Category => ({
        ...c,
        categoryName: c.categoryName + `, ${v.valueLabel}`,
        variables: [...c.variables, v],
      }))
    );
  }

  return categories;
};

export const downloadWorldRecord = async (category: Category): Promise<Duration> => {

  const baseUrl = `https://www.speedrun.com/api/v1/categories/${category.categoryId}/records?`;
  const query = category.variables.map(v => `var-${v.variableId}=${v.valueId}`).join("&");
  const url = baseUrl + query;

  const records = (await ((await fetch(url)).json()) as SrcWrapper<SrcRecords[]>).data[0];

  return Duration.fromISO(records.runs[0].run.times.primary);
};

export const getCategoriesForGame = async (gameId: string): Promise<Category[]> =>
  downloadCategories(gameId)
    .then(list => list.flatMap(srcCategory => convertCategory(gameId, srcCategory)));
