import { Vector } from '../dist'
import { it, expect, describe } from 'vitest'

describe('vector', () => {
    it('size equals components length', () => {
        const vector = new Vector<number>([1, 2, 3])

        expect(vector.size).toBe(vector.components.length)
    })

    it('can be created from other vector', () => {
        const sourceVector = new Vector<number>([1, 2, 3])
        const vector = new Vector(sourceVector)

        expect(vector.components).equals(sourceVector.components)
    })

    it('empty on empty passed array', () => {
        const vector = new Vector([])

        expect(vector.isEmpty).toBe(true)
    })
})

