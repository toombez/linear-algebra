import {
    IVector,
    ImmutableVectorType,
    VectorAsParameter,
} from 'types'

export default class Vector<T> implements Readonly<IVector<T>> {
    private _components: ImmutableVectorType<T> = []

    public constructor(components: VectorAsParameter<T> = []) {
        this._components = Vector.getComponents(components)
    }

    public get components(): ImmutableVectorType<T> {
        return this._components
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
    ): ImmutableVectorType<T> {
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
            && 'size' in vector
            && 'isEmpty' in vector
    }
}
