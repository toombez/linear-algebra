import { VectorType } from '@linear-algebra/vector'

/**
 * Matrix type
 */
export type MatrixType<T> = VectorType<VectorType<T>>

export type MatrixAsParameter<T> = MatrixType<T> | IMatrix<T>

export interface IMatrixDimensions {
    /**
     * Matrix rows count
     */
    rows: number

    /**
     * Matrix columns count
     */
    columns: number

    /**
     * Matrix is square shape
     */
    isSquare: boolean
}

export interface IMatrix<T> {
    /**
     * Matrix elements
     */
    elements: MatrixType<T>

    /**
     * Get column by index
     * @param index column index
     */
    columnVector(index: number): VectorType<T>

    /**
     * Get row by index
     * @param index row index
     */
    rowVector(index: number): VectorType<T>

    /**
     * Transpose matrix
     */
    transpose(): IMatrix<T>

    /**
     * Matrix dimensions
     */
    dimensions: IMatrixDimensions
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
