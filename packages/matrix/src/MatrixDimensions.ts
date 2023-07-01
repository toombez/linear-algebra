import { IMatrix, IMatrixDimensions } from 'types';

export default class MatrixDimensions implements IMatrixDimensions {
    constructor(
        private readonly matrix: IMatrix<any>
    ) {}

    public get rows(): number {
        return this.matrix.elements.length
    }

    public get columns(): number {
        return this.matrix.elements[0].length
    }

    public get isSquare() {
        return this.rows === this.columns
    }
}
