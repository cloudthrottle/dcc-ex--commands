import { exRailPauseCommand, exRailResumeCommand, exRailRoutesCommand, exRailTasksCommand } from '../../../../src'

describe('exRailPauseCommand()', function () {
  it('is valid', () => {
    const sendString = '<PAUSE>'

    const command = exRailPauseCommand()
    expect(command).toBe(sendString)
  })
})

describe('exRailResumeCommand()', function () {
  it('is valid', () => {
    const sendString = '<RESUME>'

    const command = exRailResumeCommand()
    expect(command).toBe(sendString)
  })
})

describe('exRailTasksCommand()', function () {
  it('is valid', () => {
    const sendString = '</>'

    const command = exRailTasksCommand()
    expect(command).toBe(sendString)
  })
})

describe('exRailRoutesCommand()', function () {
  it('is valid', () => {
    const sendString = '</ ROUTES>'

    const command = exRailRoutesCommand()
    expect(command).toBe(sendString)
  })
})
