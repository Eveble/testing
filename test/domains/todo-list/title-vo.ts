import { define, ValueObject } from '@eveble/eveble';

@define('TodoList.Title')
export class Title extends ValueObject {
  value: string;

  /**
   * Create a Title.
   * @param arg - Object with value property or string.
   */
  constructor(arg: { value: string } | string) {
    let props: { value: string };
    if (typeof arg === 'string') {
      props = { value: arg };
    } else {
      props = arg;
    }
    super(props);
  }

  /**
   * Convert Title to string by returning its value.
   * @returns Title's value.
   */
  public toString(): string {
    return this.value;
  }
}
