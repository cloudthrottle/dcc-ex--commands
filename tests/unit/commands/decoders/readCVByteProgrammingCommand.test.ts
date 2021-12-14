import { readCVByteProgrammingCommand } from '../../../../src'

describe('readCVByteProgrammingCommand()', function () {
  it('is valid', () => {
    const options = {
      cv: 14,
      callbackNum: 1024,
      callbackSub: 3
    }
    const sendString = '<R 14 1024 3>'

    const command = readCVByteProgrammingCommand(options)
    expect(command).toBe(sendString)
  })
})
