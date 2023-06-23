import { IVector, VectorAsParameter, VectorType } from 'types';

export default abstract class Vector<T> implements IVector<T> {
    public constructor(
        private _values: VectorType<T> = [],
    ) {}

    public get values() {
        return [...this._values]
    }

    /**
     * Get values from vector as parameter type
     * @param vector vector type or vector class instance
     * @returns vector type values
     */
    protected getValues(vector: VectorAsParameter<T>): VectorType<T> {
        return this.isIVector(vector) ? vector.values : vector
    }

    public get size(): number {
        return this.values.length
    }

    public get isEmpty(): boolean {
        return this.values.length === 0
    }

    private isIVector(vector: VectorAsParameter<T>): vector is IVector<T> {
        return 'values' in vector
    }
}
