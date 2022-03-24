import {
  exRailLatchSensorCommand,
  ExRailLatchSensorCommandParams
} from '../../../../src'

describe('exRailLatchSensorCommand()', function () {
  it('is valid', () => {
    const params: ExRailLatchSensorCommandParams = { sensorId: 100 }
    const sendString = '</ LATCH 100>'

    const command = exRailLatchSensorCommand(params)
    expect(command).toBe(sendString)
  })
})
