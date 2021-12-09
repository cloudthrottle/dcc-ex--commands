import {writeCVByteProgrammingCommand} from "../../../src";

describe('writeCVByteProgrammingCommand()', function () {
    it('is valid', () => {
        const options = {
            cv: 14,
            value: 134,
            callbackNum: 1024,
            callbackSub: 3
        }
        const sendString = '<W 14 134 1024 3>'
        const command = writeCVByteProgrammingCommand(options)
        expect(command).toEqual(sendString)
    })
})