export const oot = "j1l9qz1g";
export const ootextras = "76rkv4d8";

export interface SrcWrapper<T> {
  data: T;
}

export interface SrcCategory {
  id: string;
  name: string;
  type: SrcCategoryType;
  variables: SrcWrapper<SrcCategoryVariable[]>;
}

export interface SrcCategoryVariable {
  id: string;
  "is-subcategory": boolean;
  values: { values: { [value: string]: { label: string; }; }; };
}

export interface SrcLeaderboard {
  runs: SrcRun[];
}

export interface SrcRun {
  run: { times: { primary: string; }; };
}

export type SrcCategoryType = "per-game" | "per-level";
export type SrcCategoryVariableType = "global" | "full-game";
