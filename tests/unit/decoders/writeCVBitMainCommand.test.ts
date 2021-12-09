import {writeCVBitMainCommand, WriteCVBitMainCommandParams} from "../../../src";

describe('writeCVBitMainCommand()', function () {
    const options: WriteCVBitMainCommandParams = {
        cab: 22,
        cv: 14,
        bit: 7,
        value: 1
    }
    const sendString = '<b 22 14 7 1>'

    it('is valid', () => {
        const command = writeCVBitMainCommand(options)
        expect(command).toBe(sendString)
    })
})