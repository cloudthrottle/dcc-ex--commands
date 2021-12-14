import {Command} from "../../utils";
import {ParserKeyError} from "../errors";
import {ParserResult, ParserStatus} from "../../types";

const eraseParserKey = '0'

export const eraseParser: (params: Command) => ParserResult = ({key}) => {
    if (key !== eraseParserKey) {
        throw new ParserKeyError('eraseParser', key)
    }

    return {
        status: ParserStatus.SUCCESS
    }
}