import { powerCommand, PowerCommandParams, Track } from '../../../../src'

describe('powerCommand()', function () {
  describe('power off', () => {
    const options: PowerCommandParams = {
      power: 0
    }
    const sendString = '<0>'

    it('is valid', () => {
      const command = powerCommand(options)
      expect(command).toBe(sendString)
    })
  })

  describe('power on', () => {
    const options: PowerCommandParams = {
      power: 1
    }
    const sendString = '<1>'

    it('is valid', () => {
      const command = powerCommand(options)
      expect(command).toBe(sendString)
    })
  })

  describe('power off main', () => {
    const options: PowerCommandParams = {
      power: 0,
      track: Track.MAIN
    }
    const sendString = '<0 MAIN>'

    it('is valid', () => {
      const command = powerCommand(options)
      expect(command).toBe(sendString)
    })
  })

  describe('power on main', () => {
    const options: PowerCommandParams = {
      power: 1,
      track: Track.MAIN
    }
    const sendString = '<1 MAIN>'

    it('is valid', () => {
      const command = powerCommand(options)
      expect(command).toBe(sendString)
    })
  })

  describe('power off programming', () => {
    const options: PowerCommandParams = {
      power: 0,
      track: Track.PROG
    }
    const sendString = '<0 PROG>'

    it('is valid', () => {
      const command = powerCommand(options)
      expect(command).toBe(sendString)
    })
  })

  describe('power on programming', () => {
    const options: PowerCommandParams = {
      power: 1,
      track: Track.PROG
    }
    const sendString = '<1 PROG>'

    it('is valid', () => {
      const command = powerCommand(options)
      expect(command).toBe(sendString)
    })
  })

  describe('power off join', () => {
    const options: PowerCommandParams = {
      power: 0,
      track: Track.JOIN
    }
    const sendString = '<0 JOIN>'

    it('is valid', () => {
      const command = powerCommand(options)
      expect(command).toBe(sendString)
    })
  })

  describe('power on join', () => {
    const options: PowerCommandParams = {
      power: 1,
      track: Track.JOIN
    }
    const sendString = '<1 JOIN>'

    it('is valid', () => {
      const command = powerCommand(options)
      expect(command).toBe(sendString)
    })
  })
})
