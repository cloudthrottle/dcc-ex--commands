import {makeCommand} from "../../../src";
import {makeCommandFromAttributes} from "../../../src/utils/makeCommand";

describe('makeCommand()', function () {
    it('returns the argument wrapped in < >', function () {
        const instruction = "tests-instruction"
        expect(makeCommand(instruction)).toBe("<tests-instruction>")
    });
});

describe('makeCommandFromAttributes()', function () {
    it('returns the argument wrapped in < >', function () {
        const attributes = [
            0,
            1,
            null,
            undefined,
            "TEST",
            "test"
        ]
        expect(makeCommandFromAttributes(attributes)).toEqual("<0 1 TEST test>")
    });
});