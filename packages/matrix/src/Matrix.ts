import { VectorType } from '@linear-algebra/vector';
import { IMatrix, MatrixType } from 'types';

export default class Matrix<T> implements IMatrix<T> {
    private _elements: MatrixType<T>

    constructor(rows: MatrixType<T> = []) {
        this._elements = rows
    }

    public get elements() {
        return this._elements
    }

    public column(index: number): VectorType<T> {
        return this
            .transpose()
            .row(index)
    }

    public row(index: number): VectorType<T> {
        return this.elements[index]
    }

    public transpose(): IMatrix<T> {
        const elements = this.elements[0]
            .map((_, colIndex) => this.elements.map(row => row[colIndex]))

        return new Matrix(elements)
    }
}
