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
    protected getValues(vector: VectorAsParameter<T>) {
        return 'values' in vector ? vector.values : vector
    }
}
