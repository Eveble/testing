import { Struct, EvebleTypes } from '@eveble/eveble';
export declare class ProcessedAssertion {
    actual: Record<string, any>[];
    expected: Record<string, any>[];
    actualReadable: string[];
    expectedReadable: string[];
    constructor(actual: Record<string, any>[], expected: Record<string, any>[], actualReadable: string[], expectedReadable: string[]);
}
declare global {
    export namespace Chai {
        interface Assertion {
            events(expected: EvebleTypes.Event[], untestedProps?: string[]): Promise<void>;
            messages(expected: (EvebleTypes.Event | EvebleTypes.Command)[], untestedProps?: string[]): Promise<void>;
            commands(expected: EvebleTypes.Command[], untestedProps?: string[]): Promise<void>;
            state(expected: Struct, untestedProps?: string[]): Promise<void>;
        }
        interface Include {
            events(expected: EvebleTypes.Event[], untestedProps?: string[]): Promise<void>;
            messages(expected: (EvebleTypes.Event | EvebleTypes.Command)[], untestedProps?: string[]): Promise<void>;
            commands(expected: EvebleTypes.Command[], untestedProps?: string[]): Promise<void>;
        }
    }
}
export declare const evebleChai: (chaiInstance: Chai.ChaiStatic, utils: Chai.ChaiUtils) => void;
