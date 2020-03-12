import { Service, handle, injectable } from '@eveble/eveble';
import { SendWelcomeEmail } from './customer-commands';
import { WelcomeEmailSent } from './customer-events';

@injectable()
export class EmailSendingService extends Service {
  async SendWelcomeEmail(@handle command: SendWelcomeEmail): Promise<void> {
    // Simulate sub-system sending emails
    await this.publish(
      new WelcomeEmailSent({
        sourceId: 'email-sending-instance-id',
        version: 1,
        customerId: command.customerId,
        email: `Hello ${command.customerName}`,
        metadata: command.metadata,
      })
    );
  }
}
