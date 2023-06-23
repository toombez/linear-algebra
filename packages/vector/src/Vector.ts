import { IVector, VectorAsParameter, VectorType } from 'types'

export default class Vector<T> implements IVector<T> {
    private _components: VectorType<T>

    public constructor(
        components: VectorAsParameter<T> = [],
    ) {
        this._components = Vector.getComponents(components)
    }

    public get components() {
        return [...this._components]
    }

    public get size(): number {
        return this.components.length
    }

    public get isEmpty(): boolean {
        return this.components.length === 0
    }

    /**
     * Get values from vector as parameter type
     * @param vector vector type or vector class instance
     * @returns vector type values
     */
    public static getComponents<T>(
        vector: VectorAsParameter<T>,
    ): VectorType<T> {
        return this.isIVector(vector) ? vector.components : vector
    }

    /**
     * Check is implements vector IVector
     * @param vector IVector object or VectorType
     * @returns is vector implements IVector
     */
    public static isIVector<T>(
        vector: VectorAsParameter<T>,
    ): vector is IVector<T> {
        return 'components' in vector
    }
}
