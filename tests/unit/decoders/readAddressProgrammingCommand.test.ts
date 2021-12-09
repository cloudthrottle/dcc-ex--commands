import {readAddressProgrammingCommand} from "../../../src";

describe('readAddressProgrammingCommand()', function () {
    it("is valid", () => {
        const sendString = '<R>'
        const command = readAddressProgrammingCommand()
        expect(command).toEqual(sendString)
    })
})