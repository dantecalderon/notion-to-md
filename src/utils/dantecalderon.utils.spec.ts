import { parseCaption } from './dantecalderon.utils'

describe('dantecalderon utils', () => {
  describe('parseCaption', () => {
    it('should parse caption options', () => {
      expect(parseCaption('{”width”: 320} Description')).toEqual({
        options: {
          width: 320
        },
        caption: 'Description'
      })
    })
  
    it('should return empty object when invalid format', () => {
      expect(parseCaption('{”w: 0} Description')).toEqual({
        options: {},
        caption: '{”w: 0} Description'
      })
    })
  })
})