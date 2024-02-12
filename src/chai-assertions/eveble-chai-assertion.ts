/* eslint-disable no-undef */
import * as chai from 'chai';
import { isFunction, isEqual, omit, some, has } from 'lodash';
import { inspect } from 'util';
import { Struct, validate, Event, EvebleTypes, Command } from '@eveble/eveble';
import { getTypeName } from '@eveble/helpers';
import colorize from '@pinojs/json-colorizer';

export class ProcessedAssertion {
  actual: Record<string, any>[];

  expected: Record<string, any>[];

  actualReadable: string[];

  expectedReadable: string[];

  constructor(
    actual: Record<string, any>[],
    expected: Record<string, any>[],
    actualReadable: string[],
    expectedReadable: string[]
  ) {
    this.actual = actual;
    this.expected = expected;
    this.actualReadable = actualReadable;
    this.expectedReadable = expectedReadable;
  }
}
declare global {
  export namespace Chai {
    interface Assertion {
      events(
        expected: EvebleTypes.Event[],
        untestedProps?: string[]
      ): Promise<void>;
      messages(
        expected: (EvebleTypes.Event | EvebleTypes.Command)[],
        untestedProps?: string[]
      ): Promise<void>;
      commands(
        expected: EvebleTypes.Command[],
        untestedProps?: string[]
      ): Promise<void>;
      state(expected: Struct, untestedProps?: string[]): Promise<void>;
    }
    interface Include {
      events(
        expected: EvebleTypes.Event[],
        untestedProps?: string[]
      ): Promise<void>;
      messages(
        expected: (EvebleTypes.Event | EvebleTypes.Command)[],
        untestedProps?: string[]
      ): Promise<void>;
      commands(
        expected: EvebleTypes.Command[],
        untestedProps?: string[]
      ): Promise<void>;
    }
  }
}
export const evebleChai = (
  chaiInstance: Chai.ChaiStatic,
  utils: Chai.ChaiUtils
): void => {
  const Assertion = chaiInstance.Assertion;

  function property(name: string, asserter: any): void {
    utils.addProperty(Assertion.prototype, name, function (): void {
      // eslint-disable-next-line prefer-rest-params
      asserter.apply(this, arguments);
    });
  }

  function method(name: string, asserter: any): void {
    utils.addMethod(Assertion.prototype, name, function (): void {
      // eslint-disable-next-line prefer-rest-params
      asserter.apply(this, arguments);
    });
  }

  /**
   * Stringified processed struct to readable by human form.
   * @param originalStruct - Original instance of `Struct`.
   * @param processedStruct - Processed version of struct without untestable props.
   * @returns Stringified version of processed struct.
   */
  function stringifyStruct(
    originalStruct: Struct,
    processedStruct: Record<string, any>
  ): string {
    return `${getTypeName(originalStruct)} ${inspect(processedStruct, {
      colors: true,
      depth: 10,
    })}\n`;
  }

  /**
   *
   * @param actual - Actual provided data to assertion(the content of `expect(...).to`)
   * @param expected - Expected values provided in `...structs(...)`
   * @param untestedProps - Properties that will not be tested(like `metadata`, `timestamp` etc...)
   * @return Instance of `ProcessedAssertion`.
   */
  function processAssertion(
    actual: Struct[],
    expected: Struct[],
    untestedProps: string[] = [
      'timestamp',
      'version',
      'metadata',
      'schemaVersion',
      'createdAt',
      'updatedAt',
      'deletedAt',
    ]
  ): ProcessedAssertion {
    const processedActual: Record<string, any>[] = [];
    const processedExpected: Record<string, any>[] = [];
    const processedActualString: string[] = [];
    const processedExpectedString: string[] = [];

    let actualTarget: any[] = actual;
    if (Array.isArray(actual) === false) {
      actualTarget = [actual];
    }
    let expectedTarget: any[] = expected;
    if (Array.isArray(expected) === false) {
      expectedTarget = [expected];
    }

    for (const [index, actualStruct] of Object.entries(actualTarget)) {
      processedActual[index] = omit(
        JSON.parse(JSON.stringify(actualStruct)),
        untestedProps
      );
      processedActualString[index] = stringifyStruct(
        actualStruct,
        processedActual[index]
      );

      const expectedStruct = expectedTarget[index];
      if (expectedStruct === undefined) {
        continue;
      }
      for (const key of Object.keys(actualStruct.getPropTypes())) {
        // Expected array does not include specific struct
        if (isFunction(expectedStruct[key])) {
          // Check that the actual value is of the expected type
          validate(actualStruct[key], expectedStruct[key]);
        }
        untestedProps.forEach((untestedPropName) => {
          if (has(actualStruct, `${key}.${untestedPropName}`) === true) {
            delete processedActual[key][untestedPropName];
          }
        });
      }
    }

    for (const [index, expectedStruct] of Object.entries(expectedTarget)) {
      processedExpected[index] = omit(
        JSON.parse(JSON.stringify(expectedStruct)),
        untestedProps
      );

      processedExpectedString[index] = stringifyStruct(
        expectedStruct,
        processedExpected[index]
      );
    }

    return new ProcessedAssertion(
      processedActual,
      processedExpected,
      processedActualString,
      processedExpectedString
    );
  }
  // eslint-disable-next-line consistent-return
  function validateStructs(expected: Struct[], untestedProps: string[]): void {
    const have = utils.flag(this, 'have') || false;
    const include = utils.flag(this, 'include') || false;
    const negate = utils.flag(this, 'negate') || false;

    const actual: any = this._obj;
    const processed = processAssertion(actual, expected, untestedProps);
    const colorizeOptions = { pretty: true };
    const actualStringified = colorize(
      JSON.stringify(actual, null, 2),
      colorizeOptions
    );
    const expectedStringified = colorize(
      JSON.stringify(expected, null, 2),
      colorizeOptions
    );

    if (have) {
      if (negate) {
        return this.assert(
          isEqual(processed.actual, processed.expected),
          null,
          `expected ${actualStringified} to not have ${expectedStringified}`,
          processed.actualReadable.join(''),
          processed.expectedReadable.join(''),
          true
        );
      }
      return this.assert(
        isEqual(processed.actual, processed.expected),
        `expected ${actualStringified} to have ${expectedStringified}`,
        null,
        processed.actualReadable.join(''),
        processed.expectedReadable.join(''),
        true
      );
    }

    if (include) {
      for (const [index, struct] of Object.entries(processed.expected)) {
        const structStringified = inspect(struct, {
          colors: true,
          depth: 10,
        });
        const structName = getTypeName(expected[index]);
        this.assert(
          some(processed.actual, (actualStruct: Struct) =>
            isEqual(actualStruct, struct)
          ),
          `Expected struct \n ${structName} ${structStringified} to be includeed in ${actualStringified}`,
          `Expected struct \n ${structName} ${structStringified} to not be includeed in ${actualStringified}`,
          struct,
          processed.actualReadable.join('')
        );
      }
    }
  }

  method('events', validateStructs);
  method('structs', validateStructs);
  method('messages', validateStructs);
  method('commands', validateStructs);
  method('state', validateStructs);

  property('have', function () {
    utils.flag(this, 'have', true);
    return this as any;
  });

  property('include', function () {
    utils.flag(this, 'include', true);
    return this as any;
  });

  /**
   * STATE
   */
  (chai.assert as any).haveState = function (
    actual: Struct[],
    expected: Struct[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.have.state(
      expected,
      untestedProps
    );
  };

  /**
   * STRUCTS
   */
  (chai.assert as any).haveArrayOfStructs = function (
    actual: Struct[],
    expected: Struct[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.have.structs(
      expected,
      untestedProps
    );
  };

  (chai.assert as any).notHaveArrayOfStructs = function (
    actual: Struct[],
    expected: Struct[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.not.have.structs(
      expected,
      untestedProps
    );
  };

  (chai.assert as any).includeArrayOfStructs = function (
    actual: Struct[],
    expected: Struct[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.include.structs(
      expected,
      untestedProps
    );
  };

  (chai.assert as any).notIncludeArrayOfStructs = function (
    actual: Struct[],
    expected: Struct[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.not.include.structs(
      expected,
      untestedProps
    );
  };

  /**
   * MESSAGES
   */
  (chai.assert as any).haveArrayOfMessages = function (
    actual: EvebleTypes.Message[],
    expected: EvebleTypes.Message[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.have.messages(
      expected,
      untestedProps
    );
  };

  (chai.assert as any).notHaveArrayOfMessages = function (
    actual: EvebleTypes.Message[],
    expected: EvebleTypes.Message[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.not.have.messages(
      expected,
      untestedProps
    );
  };

  (chai.assert as any).includeArrayOfMessages = function (
    actual: EvebleTypes.Message[],
    expected: EvebleTypes.Message[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.include.messages(
      expected,
      untestedProps
    );
  };

  (chai.assert as any).notIncludeArrayOfMessages = function (
    actual: EvebleTypes.Message[],
    expected: EvebleTypes.Message[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.not.include.messages(
      expected,
      untestedProps
    );
  };

  /**
   * COMMANDS
   */
  (chai.assert as any).haveArrayOfCommands = function (
    actual: Command<any>[],
    expected: Command<any>[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.have.commands(
      expected,
      untestedProps
    );
  };

  (chai.assert as any).notHaveArrayOfCommands = function (
    actual: Command<any>[],
    expected: Command<any>[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.not.have.commands(
      expected,
      untestedProps
    );
  };

  (chai.assert as any).includeArrayOfCommands = function (
    actual: Command<any>[],
    expected: Command<any>[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.include.commands(
      expected,
      untestedProps
    );
  };

  (chai.assert as any).notIncludeArrayOfCommands = function (
    actual: Command<any>[],
    expected: Command<any>[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.not.include.commands(
      expected,
      untestedProps
    );
  };

  /**
   * EVENTS
   */
  (chai.assert as any).haveArrayOfEvents = function (
    actual: Event<any>[],
    expected: Event<any>[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.have.events(
      expected,
      untestedProps
    );
  };

  (chai.assert as any).notHaveArrayOfEvents = function (
    actual: Event<any>[],
    expected: Event<any>[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.not.have.events(
      expected,
      untestedProps
    );
  };

  (chai.assert as any).includeArrayOfEvents = function (
    actual: Event<any>[],
    expected: Event<any>[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.include.events(
      expected,
      untestedProps
    );
  };

  (chai.assert as any).notIncludeArrayOfEvents = function (
    actual: Event<any>[],
    expected: Event<any>[],
    untestedProps: string[],
    message: string
  ): Chai.Assertion {
    return (new chai.Assertion(actual, message) as any).to.not.include.events(
      expected,
      untestedProps
    );
  };
};
