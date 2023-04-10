export type Required<T> = {
  [P in keyof T]-?: T[P];
};
