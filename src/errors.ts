import { ExtendableError } from '@eveble/eveble';

export class TestError extends ExtendableError {}

export class InvalidScenarioError extends TestError {
  constructor() {
    super('Please define testing scenario in valid, behavior driven form');
  }
}

export class InvalidAppError extends TestError {
  constructor() {
    super('Application was not provided for the test');
  }
}

export class InvalidEventSourceableError extends TestError {
  constructor(got: string) {
    super(
      `System Under Test(SUT) must be a valid subclass(constructor type) of EventSourceable like Aggregate or Process, got ${got}`
    );
  }
}

export class EventSourceableFeatureMappingsNotFoundError extends TestError {
  constructor(eventSourceableName: string) {
    super(`Mapping for event sourceable '${eventSourceableName}' not found`);
  }
}

export class InvalidExpectationError extends TestError {
  constructor() {
    super(
      `Provided scenario must have defined expectation with 'expect', 'expectToInclude'  or 'expectToFail' methods(only one!)`
    );
  }
}

export class InvalidMessageError extends TestError {
  constructor(got: string) {
    super(
      `Provided item must be a valid domain message: Command or Event, got ${got}`
    );
  }
}
