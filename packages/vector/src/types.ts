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
    components: VectorType<T>

    /**
     * Is empry vector
     */
    isEmpty: boolean

    /**
     * Size
     */
    size: number
}

export interface IMathOperationsVector<T> {
    /**
     * Addition operation
     *
     * TODO: allow use vector with different sizes
     * @param vector another vector to add
     */
    add(vector: VectorAsParameter<T>): IVector<T>

    /**
     * Subtraction operaiton
     *
     * TODO: allow use vector with different sizes
     * @param vector another vector to substract
     */
    substract(vector: VectorAsParameter<T>): IVector<T>

    /**
     * Multiply operation
     * @param factor value to multiply vector
     */
    multiply(factor: number): IVector<T>

    /**
     * Divide operation
     * @param factor value to divide vector
     */
    divide(factor: number): IVector<T>

    /**
     * Inverse operation
     */
    inverse(): IVector<T>

    /**
     * Dot product operation
     * @param vector vector to product
     */
    dotProduct(vector: VectorAsParameter<T>): IVector<T>
}
