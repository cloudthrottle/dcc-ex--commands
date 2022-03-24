import { exRailFreeBlockCommand, ExRailFreeBlockCommandParams } from '../../../../src'

describe('exRailFreeBlockCommand()', function () {
  it('is valid', () => {
    const params: ExRailFreeBlockCommandParams = { blockId: 100 }
    const sendString = '</ FREE 100>'

    const command = exRailFreeBlockCommand(params)
    expect(command).toBe(sendString)
  })
})
