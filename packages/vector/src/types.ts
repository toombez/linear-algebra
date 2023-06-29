/**
 * `Vector` type
 */
export type VectorType<T = unknown> = Array<T>

/**
 * Immutable vector type
 */
export type ImmutableVectorType<T> = Readonly<VectorType<T>>

/**
 * Vector type to pass as parameter
 */
export type VectorAsParameter<T> =
    VectorType<T>
    | ImmutableVectorType<T>
    | IVector<T>

/**
 * `Vector` interface for implementing any `vector` class
 */
export interface IVector<T> {
    /**
     * Vector components
     */
    readonly components: ImmutableVectorType<T>

    /**
     * Is empry vector
     */
    readonly isEmpty: boolean

    /**
     * Size
     */
    readonly size: number
}

export interface IMathOperationsVector<T> {
    /**
     * Vector magnitude
     */
    magnitude: number

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

    /**
     * Normalize vector
     */
    normalize(): IVector<T>
}

/**
 * Vector factory filled method options
 */
export interface IVectorFactoryFilledOptions<T> {
    /**
     * Copy value callback
     * @param value value to copy
     * @returns copy of value
     */
    copyCallback?: (value: T) => T
}

/**
 * Vector factory indexes options
 */
export interface IVectorFactoryIndexesOptions {
    /**
     * Indexes start
     */
    start?: number
}

export interface IVectorFactory {
    /**
     * Vector filled by zeros
     * @param length vector length
     */
    zeros(length: number): IVector<number>

    /**
     * Vector filled by ones
     * @param length vector length
     */
    ones(length: number): IVector<number>

    /**
     * Vector filled by value
     * @param value value to fill
     * @param length vector length
     * @param options options
     */
    filled<T>(
        value: T,
        length: number,
        options?: IVectorFactoryFilledOptions<T>,
    ): IVector<T>

    /**
     * Vector of indexes
     * @param length vector length
     * @param options options
     */
    indexes(
        length: number,
        options?: IVectorFactoryIndexesOptions,
    ): IVector<number>

    /**
     * Vector of numbers in range
     * @param end not included range end
     * @param start included range start
     * @param step range step
     */
    range(end: number, start?: number, step?: number): IVector<number>
}
