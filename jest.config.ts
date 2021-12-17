import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  clearMocks: true,
  coverageProvider: 'babel',
  testEnvironment: 'node',
  preset: 'ts-jest/presets/default-esm', // or other ESM presets
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {}
}

export default config
