/* eslint-disable @typescript-eslint/no-explicit-any */
export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'prod url'
    : 'http://192.168.113.95:8000/api';

export const BASE_SOCKET =
  process.env.NODE_ENV === 'production'
    ? 'prod-socket'
    : 'ws://192.168.113.95:8000/ws';
// : 'https://a12f048d-0318-42c5-a3aa-5e5fdd60e362.mock.pstmn.io';

export enum ENDPOINTS {
  LOGIN = '/users/login',
  LOGOUT = '/users/logout',
  AUTH = '/users/auth',
  DOMESTIC_ANIMAL = '/domestic-animal',
  ANIMAL = '/animal',
}

const config: Partial<RequestInit> = {
  headers: {
    Authorization: `${localStorage.getItem('token')}`,
  },
};

export const METHODS = {
  GET: (url: string) => fetch(url, { ...config, method: 'GET' }),
  POST: (url: string, body?: any) =>
    fetch(url, { ...config, method: 'POST', body: JSON.stringify(body) }),
};
