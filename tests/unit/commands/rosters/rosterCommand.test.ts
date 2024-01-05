import { rosterCommand } from '../../../../src'

describe('rosterCommand()', function () {
  it('is valid', function () {
    const sendString = '<JR>'
    const command = rosterCommand()
    expect(command).toEqual(sendString)
  })

  describe('for a specific Cab', () => {
    it('is valid', function () {
      const sendString = '<JR 70>'
      const command = rosterCommand({ cabId: 70 })
      expect(command).toEqual(sendString)
    })
  })
})
