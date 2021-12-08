import {makeCommand} from "../utils";
import {Active} from "../../types";

export type CabCommandParams = { cab: number; func: number; value: Active };

const cabSendKey = "F"

export const cabCommand: (params: CabCommandParams) => string = ({ cab, func, value }) => {
    const attributes = [
        cabSendKey,
        cab,
        func,
        value
    ]
    const str = attributes.join(' ')
    return makeCommand(str)
};
