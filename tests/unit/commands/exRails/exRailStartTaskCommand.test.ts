import {
  exRailStartTaskCommand,
  ExRailStartTaskCommandParams
} from '../../../../src'

describe('exRailStartTaskCommand()', function () {
  it('is valid', () => {
    const params: ExRailStartTaskCommandParams = { address: 10, taskId: 100 }
    const sendString = '</ START 10 100>'

    const command = exRailStartTaskCommand(params)
    expect(command).toBe(sendString)
  })
})
