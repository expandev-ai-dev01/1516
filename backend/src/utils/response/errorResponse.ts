/**
 * @interface ErrorResponse
 * @description Standard error response structure
 *
 * @property {boolean} success - Always false for error responses
 * @property {object} error - Error details object
 * @property {string} timestamp - ISO timestamp of error occurrence
 */
export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @summary Creates a standardized error response
 * @description Formats error responses with consistent structure
 *
 * @param {string} message - Error message
 * @param {string} [code] - Error code (default: 'ERROR')
 * @param {any} [details] - Additional error details
 * @returns {ErrorResponse} Formatted error response
 */
export function errorResponse(
  message: string,
  code: string = 'ERROR',
  details?: any
): ErrorResponse {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
    timestamp: new Date().toISOString(),
  };
}
