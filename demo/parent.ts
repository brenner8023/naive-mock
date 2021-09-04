
import { IChild } from './child';

class Other {

  /**
   * @TJS-format ipv4
   */
  ipv4: string;

  /**
   * @TJS-format uri
   */
   uri: string;

  /**
   * @TJS-pattern ^#[0-9a-f]{6}$
   */
   color: string;
}

/**
 * @id filled#
 */
interface IParent {

  /**
   * @default MaLong
   */
  name: string

  /**
   * @minimum 5
   * @maximum 10
   */
  age: number
  intro: string[]
  sex: boolean
  eat(): void

  /**
   * @TJS-format date-time
   */
  birthday: string

  /**
   * @TJS-examples ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"]
   */
  city: any

  child: IChild<'LJH' | 'GMQ' | 'ZSD'>

  other: Other
}
