import { ExtendableError } from '@eveble/eveble';
export declare class TestError extends ExtendableError {
}
export declare class InvalidAppError extends TestError {
    constructor();
}
export declare class InvalidSUTError extends TestError {
    constructor(got: string);
}
export declare class InvalidExpectationError extends TestError {
    constructor();
}
export declare class InvalidMessageError extends TestError {
    constructor(got: string);
}
