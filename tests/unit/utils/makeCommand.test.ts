import {makeCommand} from "../../../src";

describe('makeCommand()', function () {
    it('returns the argument wrapped in < >', function () {
        const instruction = "tests-instruction"
        expect(makeCommand(instruction)).toBe("<tests-instruction>")
    });
});