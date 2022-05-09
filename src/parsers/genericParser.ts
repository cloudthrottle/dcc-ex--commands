import { ParserResult } from '../types/index.js'
import { rosterItemParser } from './rosters/index.js'
import { eraseParser, storeParser } from './eeproms/index.js'
import { powerParser } from './powers/index.js'
import { locoParser, throttleParser } from './throttles/index.js'
import { decoderAddressParser } from './decoders/index.js'

type ParserFunction = (command: string) => ParserResult<any>
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
            const result = parser(command)
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
    locoParser,
    powerParser,
    rosterItemParser,
    storeParser,
    throttleParser,
    decoderAddressParser
  ]

  return createParser(allParsers)
}
