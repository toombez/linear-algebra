import { describe, expect, it } from 'vitest'
import { NumberVector, Vector } from '../dist'

describe('number vector', () => {
    it('inverse method returns inversed components', () => {
        const vector = new NumberVector([1, 2, 3])
        const result = vector.components.map((v) => -v)

        expect(vector.inverse().components).toStrictEqual(result)
    })

    it('creating number vector from Vector class', () => {
        const vector = new Vector([1, 2, 3])

        expect(() => new NumberVector(vector)).not.toThrow()
    })

    it('mangitude is square root of sum of squares', () => {
        const vector = new NumberVector([1, 2, 3])

        const magnitude = vector.components
            .reduce((magnitude, component) => magnitude + component ** 2, 0)

        expect(vector.magnitude).toEqual(magnitude ** 0.5)
    })

    it('normalized vector', () => {
        const vector = new NumberVector([1, 1])
        const magnitude = vector.magnitude
        const result = vector.components
            .map((component) => component / magnitude)

        expect(vector.normalize().components).toStrictEqual(result)
    })
})
