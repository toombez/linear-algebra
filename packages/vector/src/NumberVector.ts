import Vector from 'Vector'
import { IMathOperationsVector, VectorAsParameter } from 'types'

export default class NumberVector
    extends Vector<number>
    implements IMathOperationsVector<number>
{
    add(vector: VectorAsParameter<number>): NumberVector {
        const components = new NumberVector(vector).components
            .map((component, index) => component + this.components[index])

        return new NumberVector(components)
    }

    substract(vector: VectorAsParameter<number>): NumberVector {
        return new NumberVector(vector)
            .inverse()
            .add(this)
    }

    multiply(factor: number): NumberVector {
        const components = this.components
            .map((component) => factor * component)

        return new NumberVector(components)
    }

    divide(factor: number): NumberVector {
        return this.multiply(1 / factor)
    }

    inverse(): NumberVector {
        const components = this.components
            .map((component) => -component)

        return new NumberVector(components)
    }
}
