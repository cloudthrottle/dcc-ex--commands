import {Command} from "../../utils";
import {ParserKeyError} from "../errors";
import {ParserResult, ParserStatus} from "../../types";

const storeParserKey = 'e'

export const storeParser: (params: Command) => ParserResult = ({key, attributes}) => {
    if (key !== storeParserKey) {
        throw new ParserKeyError('storeParser', key)
    }

    return {
        status: ParserStatus.SUCCESS
    }
}