/**
 * `Vector` type
 */
export type VectorType<T = unknown> = Array<T>

/**
 * One dimensions `vector` type
 */
export type Vector1DType<T = unknown> = VectorType<T>

/**
 * Two dimensions `vector` type
 */
export type Vector2DType<T = unknown> = Vector1DType<Vector1DType<T>>

/**
 * `Vector` interface for implementing any `vector` class
 */
export interface IVector<T> {
    values: Vector1DType<T>
}
