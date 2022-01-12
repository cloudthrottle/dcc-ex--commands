import { rosterCommand } from '../../../../src'

describe('rosterCommand()', function () {
  it('is valid', function () {
    const sendString = '<J>'
    const command = rosterCommand()
    expect(command).toEqual(sendString)
  })
})
