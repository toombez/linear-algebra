import Vector from 'Vector'
import { IMathOperationsVector, IVector, VectorAsParameter } from 'types'

export default class NumberVector
    extends Vector<number>
    implements IMathOperationsVector<number>
{
    public get magnitude() {
        const sumOfSquares = this.components
            .map((component) => component ** 2)
            .reduce((sum, component) => sum + component, 0)

        return Math.sqrt(sumOfSquares)
    }

    public add(vector: VectorAsParameter<number>): NumberVector {
        const components = new NumberVector(vector).components
            .map((component, index) => component + this.components[index])

        return new NumberVector(components)
    }

    public substract(vector: VectorAsParameter<number>): NumberVector {
        return new NumberVector(vector)
            .inverse()
            .add(this)
    }

    public multiply(factor: number): NumberVector {
        const components = this.components
            .map((component) => factor * component)

        return new NumberVector(components)
    }

    public divide(factor: number): NumberVector {
        return this.multiply(1 / factor)
    }

    public inverse(): NumberVector {
        const components = this.components
            .map((component) => -component)

        return new NumberVector(components)
    }

    public dotProduct(vector: VectorAsParameter<number>): NumberVector {
        const components = Vector.getComponents(vector)
            .map((component, index) => component * this.components[index])

        return new NumberVector(components)
    }

    // TODO: add cross product

    public normalize(): NumberVector {
        const { magnitude } = this
        const components = this.components
            .map((component) => component / magnitude)

        return new NumberVector(components)
    }
}
