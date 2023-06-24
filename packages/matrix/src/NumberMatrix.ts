import Matrix from 'Matrix';
import { IMathOperationsMatrix, IMatrix, MatrixAsParameter } from 'types';

export default class NumberMatrix
    extends Matrix<number>
    implements IMathOperationsMatrix<number>
{
    add(matrix: MatrixAsParameter<number>): NumberMatrix {
        const _matrix = NumberMatrix.getElements(matrix)

        const rows = this.elements
            .map((row, rowIndex) => row
                .map((element, elementIndex) => {
                    return element + _matrix[rowIndex][elementIndex]
                })
            )

        return new NumberMatrix(rows)
    }

    substract(matrix: MatrixAsParameter<number>): NumberMatrix {
        const numberMatrix = new NumberMatrix(matrix)

        return this.add(numberMatrix.inverse())
    }

    inverse(): NumberMatrix {
        const rows = this.elements
            .map((row) => row.map((element) => -element))

        return new NumberMatrix(rows)
    }

    scalarMultiply(factor: number): NumberMatrix {
        const rows = this.elements
            .map((row) => row.map((element) => element * factor))

        return new NumberMatrix(rows)
    }

    multiply(matrix: MatrixAsParameter<number>): IMatrix<number> {
        throw new Error('Method not implemented.');
    }
}
