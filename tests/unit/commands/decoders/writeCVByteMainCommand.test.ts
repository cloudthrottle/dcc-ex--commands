import { writeCVByteMainCommand } from '../../../../src'

describe('writeCVByteMainCommand()', function () {
  it('is valid', () => {
    const options = {
      cab: 22,
      cv: 14,
      value: 134
    }
    const sendString = '<w 22 14 134>'
    const command = writeCVByteMainCommand(options)
    expect(command).toEqual(sendString)
  })
})
