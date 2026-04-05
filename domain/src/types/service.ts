import { BaseEntity } from "./entity.js";
import { AsyncResult } from "./result.js";
import { UUID } from "./uuid.js";

export const FilterOperators = {
  Eq: "Eq",
  Neq: "Neq",
  Gt: "Gt",
  Gte: "Gte",
  Lt: "Lt",
  Lte: "Lte",
  Contains: "Contains",
  In: "In",
};

export type FilterOperator =
  (typeof FilterOperators)[keyof typeof FilterOperators];

export interface IFilter<T> {}

export interface BaseFilter<T> extends IFilter<T> {
  field: keyof T;
  operator: FilterOperator;
  value: any;
}

export interface AndFilter<T> extends IFilter<T> {
  filters: IFilter<T>[];
}

export interface OrFilter<T> extends IFilter<T> {
  filters: IFilter<T>[];
}

export interface SingleQuery<T> {
  filter?: IFilter<T>;
  includeDeleted?: boolean;
}

export interface MultipleQuery<T> extends SingleQuery<T> {
  limit?: number;
  offset?: number;
}

export interface MultipleQueryResult<T> {
  data: T[];
  total: number;
  limit: number;
  offset: number;
  pages: number;
}

export interface BaseService<T extends BaseEntity> {
  getOne: (query: SingleQuery<T>) => AsyncResult<T>;
  getMany: (query: MultipleQuery<T>) => AsyncResult<MultipleQueryResult<T>>;
  create: (entity: T) => AsyncResult<void>;
  update: (entity: T) => AsyncResult<void>;
  delete: (id: UUID) => AsyncResult<void>;
}
