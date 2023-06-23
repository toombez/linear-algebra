import NumberVector from 'NumberVector'
import Vector from 'Vector'
import { IVectorFactory, IVectorFactoryFilledOptions, IVectorFactoryIndexesOptions } from 'types'

export default class VectorFactory implements IVectorFactory {
    public zeros(length: number): NumberVector {
        return new NumberVector(this.filled(0, length))
    }

    public ones(length: number): NumberVector {
        return new NumberVector(this.filled(1, length))
    }

    public filled<T>(
        value: T,
        length: number,
        options?: IVectorFactoryFilledOptions<T>
    ): Vector<T> {
        const copyCallback = options?.copyCallback || ((value) => value)

        const components = Array.from({ length }, () => copyCallback(value))

        return new Vector(components)
    }

    indexes(length: number, options?: IVectorFactoryIndexesOptions): NumberVector {
        const start = options?.start || 0
        const end = start + length

        return this.range(end, start)
    }

    public range(
        end: number,
        start: number = 0,
        step: number = 1
    ): NumberVector {
        const length = Math.ceil((end - start) / step)

        const components = Array
            .from({ length })
            .map((_, index) => start + index * step)

        return new NumberVector(components)
    }
}
