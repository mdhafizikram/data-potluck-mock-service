import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface ApiResponse<T> {
  data: T;
  status: number;
}

interface ApiRequest {
  body: string;
  httpMethod: string;
  resource: string;
  queryStringParameters: Record<string, any>;
}

export async function makeApiRequest<T>({
  body,
  httpMethod,
  resource,
  queryStringParameters,
}: ApiRequest): Promise<ApiResponse<T>> {
  const config: AxiosRequestConfig = {
    method: httpMethod,
    baseURL: process.env.DPL_PROD_URL,
    url: resource,
    params: queryStringParameters,
    data: body,
  };

  try {
    const response: AxiosResponse<T> = await axios(config);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        // Request was made and server responded with a non-2xx status code
        return {
          data: axiosError.response.data as T,
          status: axiosError.response.status,
        };
      } else if (axiosError.request) {
        throw new Error('No response received from the server');
      } else {
        throw new Error('Error setting up the request');
      }
    } else {
      throw new Error('An error occurred while making the request');
    }
  }
}
