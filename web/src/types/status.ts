// statusMessages.ts

export type CustomStatus = 'NETWORK_ERROR' | 'TIMEOUT' | 'UNKNOWN';
export type StatusKey = number | CustomStatus;

export const STATUS_MESSAGES: Record<StatusKey, readonly string[]> = {
  // Success
  200: ["Success!"],
  201: ["Created successfully."],
  202: ["Request accepted and is being processed."],
  204: ["Done."],

  // 4xx
  400: ["Invalid request. Please check your input."],
  401: ["Session expired. Please log in again."],
  403: ["You don't have permission to do that."],
  404: ["We couldn't find what you were looking for."],
  409: ["Conflict with current data. Refresh and try again."],
  413: ["File too large. Please upload a smaller one."],
  415: ["Unsupported file type."],
  422: ["Some fields are invalid. Please correct them."],
  429: ["Too many requests. Please slow down."],

  // 5xx
  500: ["Something went wrong on our end. Try again."],
  502: ["Bad gateway. Please retry."],
  503: ["Service temporarily unavailable. Try again later."],
  504: ["Server timed out. Please retry."],

  // Custom
  NETWORK_ERROR: ["Network error. Check your connection."],
  TIMEOUT: ["Request timed out. Please try again."],
  UNKNOWN: ["Something went wrong. Please try again."],
};

export function getStatusMessage(status: StatusKey): string {
  return (STATUS_MESSAGES[status] ?? STATUS_MESSAGES.UNKNOWN)[0];
}
