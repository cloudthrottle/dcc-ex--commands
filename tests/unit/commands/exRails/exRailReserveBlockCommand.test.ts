import {
  exRailReserveBlockCommand,
  ExRailReserveBlockCommandParams
} from '../../../../src'

describe('exRailReserveBlockCommand()', function () {
  it('is valid', () => {
    const params: ExRailReserveBlockCommandParams = { blockId: '100' }
    const sendString = '</ RESERVE 100>'

    const command = exRailReserveBlockCommand(params)
    expect(command).toBe(sendString)
  })
})
