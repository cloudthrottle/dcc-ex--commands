import {deleteTurnoutCommand} from "../../../src";

describe('deleteTurnoutCommand()', function () {
    it('is valid', () => {
        const options = {
            turnout: 12
        }

        const sendString = '<T 12>'
        const command = deleteTurnoutCommand(options)
        expect(command).toBe(sendString)
    })
})