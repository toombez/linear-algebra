import { VectorType } from '@linear-algebra/vector'

/**
 * Matrix type
 */
export type MatrixType<T> = VectorType<VectorType<T>>

export interface IMatrixDimensions {
    rows: number
    columns: number
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
    column(index: number): VectorType<T>

    /**
     * Get row by index
     * @param index row index
     */
    row(index: number): VectorType<T>

    /**
     * Transpose matrix
     */
    transpose(): IMatrix<T>
}
