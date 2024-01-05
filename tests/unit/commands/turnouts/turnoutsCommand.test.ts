import { turnoutsCommand } from '../../../../src'

describe('turnoutsCommand()', function () {
  it('is valid', () => {
    const sendString = '<JT>'
    const command = turnoutsCommand()
    expect(command).toBe(sendString)
  })

  describe('for a specific Turnout', () => {
    it('is valid', function () {
      const sendString = '<JT 70>'
      const command = turnoutsCommand({ turnoutId: 70 })
      expect(command).toEqual(sendString)
    })
  })
})
