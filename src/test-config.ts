import { Config, define } from '@eveble/eveble';

@define()
export class TestConfig extends Config {
  public untestedProperties: string[] = [
    'timestamp',
    'version',
    'metadata',
    'schemaVersion',
  ];

  /**
   * Creates an instance of TestConfig.
   * @param props - Properties of the type required for construction.
   */
  constructor(props?: Partial<TestConfig>) {
    super();
    if (props) Object.assign(this, this.processProps(props));
  }
}
