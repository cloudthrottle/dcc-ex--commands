import { listTurnoutsCommand } from '../../../../src'

describe('listTurnoutsCommand()', function () {
  it('is valid', () => {
    const sendString = '<T>'
    const command = listTurnoutsCommand()
    expect(command).toBe(sendString)
  })
})
