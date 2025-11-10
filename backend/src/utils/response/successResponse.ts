/**
 * @interface SuccessResponse
 * @description Standard success response structure
 *
 * @property {boolean} success - Always true for successful responses
 * @property {T} data - Response data of generic type
 * @property {object} [metadata] - Optional metadata for pagination and timestamps
 */
export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

/**
 * @summary Creates a standardized success response
 * @description Formats successful API responses with consistent structure
 *
 * @param {T} data - Response data
 * @param {object} [metadata] - Optional metadata
 * @returns {SuccessResponse<T>} Formatted success response
 */
export function successResponse<T>(
  data: T,
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
  }
): SuccessResponse<T> {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
}
