import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: AxiosResponse) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
  
    const error = new Error(response.statusText);
    throw error;
}

export default async function request(url: string, options?: AxiosRequestConfig): Promise<any> {
    const response = await axios(url, options);
    const response_1 = checkStatus(response);
    return response_1.data;
}