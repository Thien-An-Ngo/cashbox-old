import cashboxWg71 from './cashboxWg71.json';
import cashboxWg72 from './cashboxWg72.json';
import cashboxWg73 from './cashboxWg73.json';
import {getPathParams} from "./utils";

export function configureFakeBackend() {
  if (process.env.PROFILE !== 'dev' && process.env.PROFILE !== 'test') {
    return;
  }
  const realFetch = window.fetch;
  window.fetch = (url: string | Request, opts?: RequestInit) => {
    const realUrl = typeof url === 'string' ? url : url.url;
    const method = opts === undefined ? 'GET' : opts.method;
    console.info('realUrl:', realUrl);
    return new Promise((resolve, reject) => {

      if (
        realUrl.match('/api/cashbox') && 'GET' === method
      ) {
        const wgId = getPathParams(
          url.toString(),
          `/api/cashbox/`
        )[0];
        getCashbox(resolve, wgId);
        return;
      }

      console.log('***** realUrl: ', url, ' *****')
      realFetch(url, opts).then((response) => resolve(response));
    });
  };

  function getCashbox(resolve: any, wgId: string) {
    console.log('wgId: ', wgId);
    let cashbox: any = undefined;
    if (wgId === '71') {
      cashbox = cashboxWg71;
    } else if (wgId === '72') {
      cashbox = cashboxWg72;
    } else if (wgId === '73') {
      cashbox = cashboxWg73;
    }
    console.log('cashbox: ', cashbox);
    resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(cashbox),
    });
  }

}
