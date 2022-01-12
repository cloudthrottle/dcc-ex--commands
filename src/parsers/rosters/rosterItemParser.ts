import { Command } from '../../utils'
import { ParserResult, ParserStatus } from '../../types'
import { ParserKeyError } from '../errors'

export interface RosterItemParams {
  cabId: number
  displayName: string
}

export type RosterItemResult = ParserResult<RosterItemParams>
export const rosterItemParserKey = 'j'

export const rosterItemParser: (params: Command) => RosterItemResult = ({ key, attributes }) => {
  const [cabId, ...nameParts] = attributes
  const displayName = nameParts.join(' ').replaceAll('"', '')

  if (key !== rosterItemParserKey) {
    throw new ParserKeyError('rosterItemParser', key)
  }

  return {
    key: rosterItemParserKey,
    status: ParserStatus.SUCCESS,
    params: {
      cabId: parseInt(cabId),
      displayName
    }
  }
}
