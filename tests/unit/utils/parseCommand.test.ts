import { isControlCharacters, parseCommand, removeControlCharacters } from '../../../src'

describe('isControlCharacters()', () => {
  describe('when a "<" is passed in', () => {
    it('returns true', () => {
      expect(isControlCharacters('<')).toBeTruthy()
    })
  })

  describe('when a ">" is passed in', () => {
    it('returns true', () => {
      expect(isControlCharacters('>')).toBeTruthy()
    })
  })

  describe('when a "P" is passed in', () => {
    it('returns false', () => {
      expect(isControlCharacters('P')).toBeFalsy()
    })
  })
})

describe('removeControlCharacters()', () => {
  describe('when a command string', () => {
    it('returns a string without control characters', () => {
      expect(removeControlCharacters('<test>')).toEqual('test')
    })
  })

  describe('when a not a command string', () => {
    it('returns an unmodified string', () => {
      expect(removeControlCharacters('test')).toEqual('test')
    })
  })
})

describe('parseCommand()', () => {
  it('returns a key and attributes', () => {
    expect(parseCommand('<T 1 12 123>')).toEqual({
      key: 'T',
      attributes: ['1', '12', '123']
    })
  })

  it('returns a key and attributes with negative number', () => {
    expect(parseCommand('<r -1>')).toEqual({
      key: 'r',
      attributes: ['-1']
    })
  })

  describe('with string values', () => {
    it('returns a key and string attributes', () => {
      expect(parseCommand('<j 70 "My Loco" "Other Parts">'))
        .toEqual({
          key: 'j',
          attributes: ['70', 'My Loco', 'Other Parts']
        })
    })
  })
})
