import {eraseParser, parseCommand, ParserKeyError, ParserStatus, storeParser} from "../../../../src";

describe('eraseParser()', function () {
    it("parses '<0>'", () => {
        const commandParams = parseCommand('<0>')
        const result = eraseParser(commandParams)

        const expected = {
            status: ParserStatus.SUCCESS
        }
        expect(result).toEqual(expected)
    })

    describe('with incorrect key', function () {
        it('throws a ParserKeyError', function () {
            expect(() => {
                const commandParams = parseCommand('<incorrect-key>')
                eraseParser(commandParams)
            }).toThrowError(ParserKeyError)
        });
    });
});