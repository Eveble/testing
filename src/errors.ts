import { ExtendableError } from '@eveble/eveble';

export class TestError extends ExtendableError {}

export class InvalidAppError extends TestError {
  constructor() {
    super('Application was not provided for the test');
  }
}

export class InvalidSUTError extends TestError {
  constructor(got: string) {
    super(
      `System Under Test(SUT) must be a valid subclass(constructor type) of EventSourceable like Aggregate or Process, got ${got}`
    );
  }
}

export class InvalidExpectationError extends TestError {
  constructor() {
    super(
      `Provided scenario must have defined expectation with 'expect', 'expectToInclude'  or 'expectToFail' methods(only one!)`
    );
  }
}
