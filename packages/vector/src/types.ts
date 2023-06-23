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
 * Vector type to pass as parameter
 */
export type VectorAsParameter<T> = VectorType<T> | IVector<T>

/**
 * `Vector` interface for implementing any `vector` class
 */
export interface IVector<T> {
    /**
     * Vector components
     */
    values: Vector1DType<T>
}
