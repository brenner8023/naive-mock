type Sports = 'pingpong' | 'football' | 'dance'

interface Lesson {
  English: string
  Chinese: string
}

export interface IChild<T> {
  name: T
  like: Record<string, Sports>
  love: Omit<Lesson, 'Chinese'>
  never: never
  unknown: unknown
  any: any
  null: null
  // undefined: undefined
}