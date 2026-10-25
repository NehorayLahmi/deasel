export type ContactChannel = "call" | "whatsapp";

export interface ContactClickPayload {
  channel: ContactChannel;
  source: string;
}

export interface ContactClickApiResponse {
  success: boolean;
  message: string;
}
