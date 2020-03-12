import { App, EvebleTypes, BINDINGS } from '@eveble/eveble';
import { Collection } from 'mongodb';
import { Customer } from './customer';
import { CustomerRegistration } from './customer-registration';
import { EmailSendingService } from './email-sending-service';

export class CustomerApp extends App {
  public injector: EvebleTypes.Injector;

  /**
   * Before initialization hook.
   */
  protected beforeInitialize(): void {
    this.initializeRouters();
    this.initializeServices();
  }

  /**
   * Initializes Routers.
   */
  protected initializeRouters(): void {
    this.injector.bind<EvebleTypes.Router>('CustomerRouter').toRoute(Customer);
    this.injector
      .bind<EvebleTypes.Router>('CustomerRegistrationRouter')
      .toRoute(CustomerRegistration);
  }

  /**
   * Initializes Services.
   */
  protected initializeServices(): void {
    const service = new EmailSendingService();
    this.injector.injectInto(service);
    this.injector
      .bind<EvebleTypes.Service>('EmailSendingService')
      .toConstantValue(service);
  }

  /**
   * On reset hook.
   * @async
   * Since in testing environment in which anything can fail on any stage,
   * is always best to create a clean state of storages.
   *
   * For example: in scenario where:
   * + MyError happens AFTER command is scheduled
   * + but BEFORE processing it
   * scheduled command will persist in queue and will be processed on next test.
   *
   * This results in unexpected application state that is hard to debug.
   * RESETTING code must be implemented on app itself since application is stopped on
   * 'expect', 'throws', 'expectToFail' BDD assertions.
   */
  protected async onReset(): Promise<void> {
    const commitStore = this.injector.get<Collection<any>>(
      BINDINGS.MongoDB.collections.Commits
    );
    const snapshotter = this.injector.get<Collection<any>>(
      BINDINGS.MongoDB.collections.Snapshots
    );
    const commandScheduler = this.injector.get<Collection<any>>(
      BINDINGS.MongoDB.collections.ScheduledCommands
    );

    await commitStore.deleteMany({});
    await snapshotter.deleteMany({});
    await commandScheduler.deleteMany({});
  }
}
