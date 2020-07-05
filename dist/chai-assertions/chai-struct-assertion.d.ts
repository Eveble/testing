export declare class ProcessedAssertion {
    actual: Record<string, any>[];
    expected: Record<string, any>[];
    actualReadable: string[];
    expectedReadable: string[];
    constructor(actual: Record<string, any>[], expected: Record<string, any>[], actualReadable: string[], expectedReadable: string[]);
}
export declare const chaiStructAssertion: (chai: Chai.ChaiStatic, utils: Chai.ChaiUtils) => void;
