import { exRailUnlatchSensorCommand, ExRailUnlatchSensorCommandParams } from '../../../../src'

describe('exRailUnlatchSensorCommand()', function () {
  it('is valid', () => {
    const params: ExRailUnlatchSensorCommandParams = { sensorId: '100' }
    const sendString = '</ UNLATCH 100>'

    const command = exRailUnlatchSensorCommand(params)
    expect(command).toBe(sendString)
  })
})
