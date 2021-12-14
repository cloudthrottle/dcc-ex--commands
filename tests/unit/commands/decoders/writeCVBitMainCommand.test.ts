import { writeCVBitMainCommand, WriteCVBitMainCommandParams } from '../../../../src'

describe('writeCVBitMainCommand()', function () {
  it('is valid', () => {
    const options: WriteCVBitMainCommandParams = {
      cab: 22,
      cv: 14,
      bit: 7,
      value: 1
    }
    const sendString = '<b 22 14 7 1>'
    const command = writeCVBitMainCommand(options)
    expect(command).toEqual(sendString)
  })
})
