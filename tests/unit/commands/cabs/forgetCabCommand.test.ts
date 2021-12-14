import { ForgerCabCommandParams, forgetCabCommand } from '../../../../src'

describe('forgetCabCommand()', function () {
  it('is valid', function () {
    const params: ForgerCabCommandParams = {
      cab: 22
    }
    const sendString = '<- 22>'
    const command = forgetCabCommand(params)
    expect(command).toEqual(sendString)
  })
})
