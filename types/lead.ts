export interface LeadPayload {
  name: string;
  phone: string;
  carModel: string;
}

export interface LeadApiSuccessResponse {
  success: true;
  message: string;
}

export interface LeadApiErrorResponse {
  success: false;
  message: string;
  errors?: Partial<Record<keyof LeadPayload, string>>;
}

export type LeadApiResponse = LeadApiSuccessResponse | LeadApiErrorResponse;
