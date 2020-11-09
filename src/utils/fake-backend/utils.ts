export function getQueryParams(url: string): any {
  const params: any = {};
  const queryString = url.split('?')[1];
  if (!url || typeof url !== 'string') {
    throw new Error('Doesn’t contain a valid URL');
  }
  if (!queryString) {
    throw new Error('URL doesn’t contain a query string');
  }

  queryString.split('&').forEach((value) => {
    const param = value.split('=');
    params[param[0]] = param[1];
  });
  return params;
}

export function getPathParams(url: string, prefix: string): string[] {
  const paramsStr = url.replace('http://fake-backend' + prefix, '');
  if (paramsStr) {
    return paramsStr.split('/');
  }
  return [];
}
