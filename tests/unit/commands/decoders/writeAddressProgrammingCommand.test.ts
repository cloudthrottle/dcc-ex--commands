import { writeAddressProgrammingCommand } from '../../../../src'

describe('writeAddressProgrammingCommand()', function () {
  it('is valid', () => {
    const options = {
      address: 1024
    }
    const sendString = '<W 1024>'
    const command = writeAddressProgrammingCommand(options)
    expect(command).toEqual(sendString)
  })
})
