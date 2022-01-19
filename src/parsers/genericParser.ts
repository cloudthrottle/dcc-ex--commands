import { ParserResult } from '../types/index.js'
import { Command, parseCommand } from '../utils/index.js'
import { rosterItemParser } from './rosters/index.js'
import { eraseParser, storeParser } from './eeproms/index.js'
import { powerParser } from './powers/index.js'
import { throttleParser } from './throttles/index.js'

type ParserFunction = (params: Command) => ParserResult<any>
type ParseResult = (command: string) => Promise<ParserResult<any>>
interface Parser {
  parse: ParseResult
}
type CreateParser = (parsers: ParserFunction[]) => Parser
type GenericParser = () => Parser

export const createParser: CreateParser = (parsers) => {
  return {
    parse: async (command: string) => {
      const results = parsers.map(async parser => {
        return await new Promise<ParserResult<any>>((resolve, reject) => {
          try {
            const commandParams = parseCommand(command)
            const result = parser(commandParams)
            resolve(result)
          } catch (e) {
            reject(e)
          }
        })
      })

      return await Promise.any(results)
    }
  }
}

export const genericParser: GenericParser = () => {
  const allParsers: ParserFunction[] = [
    eraseParser,
    storeParser,
    powerParser,
    rosterItemParser,
    throttleParser
  ]

  return createParser(allParsers)
}