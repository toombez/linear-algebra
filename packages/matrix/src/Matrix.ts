import { ImmutableVectorType } from '@linear-algebra/vector';
import MatrixDimensions from 'MatrixDimensions';
import { IMatrix, ImmutableMatrixType, MatrixAsParameter } from 'types';

export default class Matrix<T> implements IMatrix<T> {
    private _elements: ImmutableMatrixType<T>

    constructor(rows: MatrixAsParameter<T> = []) {
        this._elements = Matrix.getElements(rows)
    }

    public get elements() {
        return this._elements
    }

    public rowVector(index: number): ImmutableVectorType<T> {
        return this.elements[index]
    }

    public columnVector(index: number): ImmutableVectorType<T> {
        return this
            .transpose()
            .rowVector(index)
    }

    public transpose(): IMatrix<T> {
        const elements = this.elements[0]
            .map((_, colIndex) => this.elements.map(row => row[colIndex]))

        return new Matrix(elements)
    }

    public get dimensions(): MatrixDimensions {
        return new MatrixDimensions(this)
    }

    /**
     * Get element from matrix as parameter
     * @param matrix matrix as parameter
     * @returns matrix elements
     */
    public static getElements<T>(
        matrix: MatrixAsParameter<T>
    ): ImmutableMatrixType<T> {
        return this.isIMatrix(matrix) ? matrix.elements : matrix
    }

    /**
     * Check is implemented matrix IMatrix
     * @param matrix MatrixType or IMatrix
     * @returns is implemented matrix IMatrix
     */
    public static isIMatrix<T>(
        matrix: MatrixAsParameter<T>
    ): matrix is IMatrix<T> {
        return 'elements' in matrix
            && 'dimensions' in matrix
            && 'columnVector' in matrix
            && 'rowVector' in matrix
            && 'transpose' in matrix
    }
}
