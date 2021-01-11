// message event channel
import channel, {MessageAddEventName} from "./message-event-channel";

export default class Message {
  static info(message: string) {
    channel.dispatchEvent(
      new CustomEvent(MessageAddEventName, { detail: message })
    );
  }
}
