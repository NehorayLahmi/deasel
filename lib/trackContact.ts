import axios from "axios";
import type { ContactChannel } from "@/types/contactClick";

export function notifyContactClick(channel: ContactChannel, source: string): void {
  axios
    .post(
      "/api/notify",
      { channel, source },
      { timeout: 5_000 }
    )
    .catch((error) => {
      console.warn("Failed to send contact-click notification:", error);
    });
}
