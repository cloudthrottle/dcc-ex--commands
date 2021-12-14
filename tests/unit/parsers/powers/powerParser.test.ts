import {ParserKeyError, powerParser, ReturnTrack} from "../../../../src";

describe('powerParser()', function () {
    it("parses '<p1 MAIN>'", () => {
        const result = powerParser({
            key: "p1",
            attributes: ["MAIN"]
        })

        const expected = {
            power: 1,
            track: ReturnTrack.MAIN
        }
        expect(result).toEqual(expected)
    })

    it("parses '<p0 MAIN>'", () => {
        const result = powerParser({
            key: "p0",
            attributes: ["MAIN"]
        })

        const expected = {
            power: 0,
            track: ReturnTrack.MAIN
        }
        expect(result).toEqual(expected)
    })

    it("parses '<p1>'", () => {
        const result = powerParser({
            key: "p1",
            attributes: []
        })

        const expected = {
            power: 1,
            track: ReturnTrack.ALL
        }
        expect(result).toEqual(expected)
    })

    describe('with incorrect key', function () {
        it('throws a ParserKeyError', function () {
            expect(() => {
                powerParser({key: "test", attributes: []})
            }).toThrowError(ParserKeyError)
        });
    });
})