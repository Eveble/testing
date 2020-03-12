import { Struct } from '@eveble/eveble';

/*
https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines

Any type or interface exported in 'root' level of declaration is considered
'first-class' building block.

Types or interfaces enclosed in new dedicated namespace are considered
contracts building blocks for replaceable parts of the system.

This unclutters the availability of names for any other prioritized contracts that would made naming rea
*/
declare global {
  export namespace Chai {
    export interface Assertion {
      structs(expected: Struct[], untestedProps?: string[]): Assertion;
    }
  }
}
