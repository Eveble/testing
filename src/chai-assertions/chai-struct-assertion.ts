import { isFunction, isEqual, omit, some } from 'lodash';
import { inspect } from 'util';
import { Struct, validate } from '@eveble/eveble';
import { getTypeName } from '@eveble/helpers';

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

export const chaiStructAssertion = (
  chai: Chai.ChaiStatic,
  utils: Chai.ChaiUtils
): void => {
  const Assertion = chai.Assertion;

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
    untestedProps: string[] = []
  ): ProcessedAssertion {
    const processedActual: Record<string, any>[] = [];
    const processedExpected: Record<string, any>[] = [];
    const processedActualString: string[] = [];
    const processedExpectedString: string[] = [];

    for (const [index, actualStruct] of Object.entries(actual)) {
      processedActual[index] = omit(
        JSON.parse(JSON.stringify(actualStruct)),
        untestedProps
      );
      processedActualString[index] = stringifyStruct(
        actualStruct,
        processedActual[index]
      );

      const expectedStruct = expected[index];
      if (expectedStruct === undefined) {
        continue;
      }
      for (const key of Object.keys(actualStruct.getPropTypes())) {
        // Expected array does not include specific struct
        if (isFunction(expectedStruct[key])) {
          // Check that the actual value is of the expected type
          validate(actualStruct[key], expectedStruct[key]);
        }
      }
    }

    for (const [index, expectedStruct] of Object.entries(expected)) {
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
  method('structs', function (
    expected: Struct[],
    untestedProps: string[]
  ): void {
    const have = utils.flag(this, 'have') || false;
    const include = utils.flag(this, 'include') || false;
    const negate = utils.flag(this, 'negate') || false;

    const actual: any = this._obj;
    const processed = processAssertion(actual, expected, untestedProps);
    const actualStringified = inspect(actual, {
      colors: true,
      depth: 10,
    });
    const expectedStringified = inspect(expected, {
      colors: true,
      depth: 10,
    });

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
          some(processed.actual, (actualStruct: Struct) => {
            return isEqual(actualStruct, struct);
          }),
          `Expected struct \n ${structName} ${structStringified} to be includeed in ${actualStringified}`,
          `Expected struct \n ${structName} ${structStringified} to not be includeed in ${actualStringified}`,
          struct,
          processed.actualReadable.join('')
        );
      }
    }
  });

  property('have', function () {
    utils.flag(this, 'have', true);
    return this as any;
  });

  property('include', function () {
    utils.flag(this, 'include', true);
    return this as any;
  });

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
};
