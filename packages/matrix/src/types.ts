import { ImmutableVectorType, VectorType } from '@linear-algebra/vector'

/**
 * Matrix type
 */
export type MatrixType<T> = VectorType<VectorType<T>>

export type ImmutableMatrixType<T> = ImmutableVectorType<
    ImmutableVectorType<T>
>

export type MatrixAsParameter<T> = MatrixType<T> | IMatrix<T>

export interface IMatrixDimensions {
    /**
     * Matrix rows count
     */
    readonly rows: number

    /**
     * Matrix columns count
     */
    readonly columns: number

    /**
     * Matrix is square shape
     */
    readonly isSquare: boolean
}

export interface IMatrix<T> {
    /**
     * Matrix elements
     */
    readonly elements: ImmutableMatrixType<T>

    /**
     * Matrix dimensions
     */
    readonly dimensions: IMatrixDimensions

    /**
     * Get column by index
     * @param index column index
     */
    columnVector(index: number): ImmutableVectorType<T>

    /**
     * Get row by index
     * @param index row index
     */
    rowVector(index: number): ImmutableVectorType<T>

    /**
     * Transpose matrix
     */
    transpose(): IMatrix<T>
}

export interface IMathOperationsMatrix<T> {
    /**
     * Add matrix operation
     * @param matrix another matrix to add
     */
    add(matrix: MatrixAsParameter<T>): IMatrix<T>

    /**
     * Substract matrix operation
     * @param matrix another matrix to substract
     */
    substract(matrix: MatrixAsParameter<T>): IMatrix<T>

    /**
     * Scalar multiply operation
     * @param factor multiply factor
     */
    scalarMultiply(factor: number): IMatrix<T>

    /**
     * Multiplty matrices operation
     * @param matrix another matrix to multiply
     */
    multiply(matrix: MatrixAsParameter<T>): IMatrix<T>

    /**
     * Inverse matrix elements
     */
    inverse(): IMatrix<T>
}
