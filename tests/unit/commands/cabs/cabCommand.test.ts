import {cabCommand, CabCommandParams} from "../../../../src";

describe('cabCommand()', function () {
    it('is valid', function () {
        const params: CabCommandParams = {
            cab: 22,
            func: 14,
            value: 0
        }
        const sendString = '<F 22 14 0>'
        const command = cabCommand(params)
        expect(command).toEqual(sendString)
    });
})
