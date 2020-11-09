import {BackendError, NetworkError} from "./backend.types";

async function getDefaultHeaders() {
  const defaultHeaders = new Headers();
  const accessToken = localStorage.getItem('access_token')
  if (accessToken) {
    defaultHeaders.append('Authorization', `Bearer ${accessToken}`);
  }
  defaultHeaders.append('Accept', 'application/json');
  defaultHeaders.append('Content-Type', 'application/json');
  defaultHeaders.append('X-Requested-With', 'XMLHttpRequest');
  return defaultHeaders;
}

async function fetchJson<T = unknown>(
  path: string,
  {method = 'get', headers = {}, ...options}: RequestInit
): Promise<T> {

  let res: Response;
  const defaultHeaders = await getDefaultHeaders();

  Object.entries(headers)
    .forEach(([name, value]) => defaultHeaders.set(name, value));

  try {
    res = await fetch(path, {
      method,
      headers: defaultHeaders,
      credentials: 'include',
      ...options,
    });
  } catch (error) {
    console.log('error: ', error);
    throw new NetworkError();
  }
  if (res.status === 502 || res.status === 503 || res.status === 504) throw new NetworkError();

  const json = await res.json();
  if (json.status) {
    const {errorCode, state, values, messages} = json.status;

    if (!res.ok || state !== 'OK') {
      throw new BackendError(state, errorCode, values, res.status, messages);
    }
  }
  if (json.data) {
    return await json.data;
  }
  return json;
}

export async function get<T = unknown>(path: string, options?: RequestInit): Promise<T> {
  return fetchJson<T>(path, {...options, method: 'GET'});
}

export async function post<T = unknown>(path: string, options?: RequestInit): Promise<T> {
  return fetchJson<T>(path, {...options, method: 'POST'});
}

export async function put<T = unknown>(path: string, options?: RequestInit): Promise<T> {
  return fetchJson<T>(path, {...options, method: 'PUT'});
}

export async function del<T = unknown>(path: string, options?: RequestInit): Promise<T> {
  return fetchJson<T>(path, {...options, method: 'DELETE'});
}

export async function patch<T = unknown>(path: string, options?: RequestInit): Promise<T> {
  return fetchJson<T>(path, {...options, method: 'PATCH'});
}

export async function options<T = unknown>(path: string, options?: RequestInit): Promise<T> {
  return fetchJson<T>(path, {...options, method: 'OPTIONS'});
}
