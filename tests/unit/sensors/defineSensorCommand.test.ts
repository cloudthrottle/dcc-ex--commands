import {defineSensorCommand, DefineSensorCommandParams} from "../../../src";

describe('defineSensorCommand()', function () {
  it('is valid', () => {
    const options: DefineSensorCommandParams = {
      sensor: 12,
      pin: 1234,
      pullUp: 1
    }

    const sendString = '<S 12 1234 1>'
    const command = defineSensorCommand(options)
    expect(command).toEqual(sendString)
  })
})
