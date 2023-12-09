import { Aggregate, DomainError, Process, Type } from '@eveble/eveble';

@Type('on.MyDomainError')
export class MyDomainError extends DomainError { }

@Type('on.MyAggregate')
export class MyAggregate extends Aggregate { }

@Type('on.MyProcess')
export class MyProcess extends Process { }
