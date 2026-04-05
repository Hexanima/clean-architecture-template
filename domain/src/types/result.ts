import { TaggedError } from "./error.js";

export type Result<TResult, TError extends TaggedError = TaggedError> =
  | TResult
  | TError;

export type AsyncResult<
  TResult,
  TError extends TaggedError = TaggedError,
> = Promise<Result<TResult, TError>>;
