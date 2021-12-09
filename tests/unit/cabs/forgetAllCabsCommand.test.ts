import {forgetAllCabsCommand} from "../../../src";

describe('forgetAllCabsCommand()', function () {
    it('is valid', function () {
        const sendString = '<->'
        const command = forgetAllCabsCommand()
        expect(command).toEqual(sendString)
    });
})
