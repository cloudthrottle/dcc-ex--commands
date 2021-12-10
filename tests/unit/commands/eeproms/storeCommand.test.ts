import {storeCommand} from "../../../../src";

describe('storeCommand()', function () {
    it('is valid', () => {
        const sendString = '<E>'
        const command = storeCommand()
        expect(command).toEqual(sendString)
    })
})