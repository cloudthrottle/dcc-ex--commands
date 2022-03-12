import {
  exRailKillTaskCommand,
  ExRailKillTaskCommandParams
} from '../../../../src'

describe('exRailKillTaskCommand()', function () {
  it('is valid', () => {
    const params: ExRailKillTaskCommandParams = { taskId: '100' }
    const sendString = '</ KILL 100>'

    const command = exRailKillTaskCommand(params)
    expect(command).toBe(sendString)
  })
})
