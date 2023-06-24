import { VectorType } from '@linear-algebra/vector'

/**
 * Matrix type
 */
export type MatrixType<T> = VectorType<VectorType<T>>

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
