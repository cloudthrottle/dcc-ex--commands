import { emergencyStopCommand } from '../../../../src'

describe('emergencyStopCommand()', function () {
  it('is valid', () => {
    const sendString = '<!>'
    const command = emergencyStopCommand()
    expect(command).toEqual(sendString)
  })
})
