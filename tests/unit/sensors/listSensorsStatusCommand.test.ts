import {listSensorsStatusCommand} from "../../../src";

describe('listSensorsStatusCommand()', function () {
  it('is valid', () => {
    const sendString = '<Q>'
    const command = listSensorsStatusCommand()
    expect(command).toEqual(sendString)
  })
})
