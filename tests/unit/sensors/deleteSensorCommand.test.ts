import {deleteSensorCommand} from "../../../src";

describe('deleteSensorCommand()', function () {
  it('is valid', () => {
    const options = {
      sensor: 12
    }

    const sendString = '<S 12>'
    const command = deleteSensorCommand(options)
    expect(command).toEqual(sendString)
  })
})
