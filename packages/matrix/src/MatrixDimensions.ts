import { IMatrix, IMatrixDimensions } from 'types';

export default class MatrixDimensions implements IMatrixDimensions {
    constructor(
        private matrix: IMatrix<any>
    ) {}

    public get rows() {
        return this.matrix.elements.length
    }

    public get columns() {
        return this.matrix.elements[0].length
    }
}
