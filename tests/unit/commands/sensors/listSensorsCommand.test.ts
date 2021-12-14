import { listSensorsCommand } from '../../../../src'

describe('listSensorsCommand()', function () {
  it('is valid', () => {
    const sendString = '<S>'
    const command = listSensorsCommand()
    expect(command).toEqual(sendString)
  })
})
