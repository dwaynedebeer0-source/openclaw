export type FetchMock = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

type FetchPreconnectOptions = {
  dns?: boolean;
  tcp?: boolean;
  http?: boolean;
  https?: boolean;
};

type FetchPreconnect = (url: unknown, options?: FetchPreconnectOptions) => void;

type FetchWithPreconnect<T extends FetchMock> = T & { preconnect: FetchPreconnect };

export const withFetchPreconnect = <T extends FetchMock>(fn: T): FetchWithPreconnect<T> =>
  Object.assign(fn, {
    preconnect: (_url: unknown, _options?: FetchPreconnectOptions) => {},
  });
