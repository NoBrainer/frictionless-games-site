import { find } from 'lodash';
import { useEffect, useState } from 'react';

/**
 * @param {string} key
 */
export function deleteCookie(key) {
  document.cookie = `${key}=; expires=${toExpirationString(-1)}`;
}

/**
 * @param {string} key
 * @param {string} value
 * @param {CookieOptions} options
 */
export function setCookie(key, value, { expires = 7, path = '/' } = {}) {
  document.cookie = `${key}=${encodeURIComponent(value)}; expires=${toExpirationString(expires)}; path=${path}`;
}

/**
 * @param {string} key
 * @return {string}
 */
export function getCookie(key) {
  const cookies = document.cookie.split('; ');
  const cookie = find(cookies, (c) => {
    const parts = c.split('=');
    return parts[0] === key;
  });
  if (!cookie) return '';
  const parts = cookie.split('=');
  return decodeURIComponent(parts[1]);
}

/**
 * @param {string} key
 * @param {string} defaultValue
 * @param {CookieOptions} cookieOpts
 * @return {[string, function, function]} [value, setValue, pollingEffect]
 */
export function useCookie(key, defaultValue = '', cookieOpts = {}) {
  const [value, setValue] = useState(() => getCookie(key) || defaultValue);

  /**
   * @param {string} val
   * @param {CookieOptions} cookieOpts
   */
  const updateValue = (val, cookieOpts) => {
    setValue(val);
  };

  // Update the cookie when the value changes
  useEffect(() => setCookie(key, value, cookieOpts), [value]);

  // React effect to use to poll for cookie changes
  const pollingEffect = () => {
    const id = setInterval(() => {
      const polledValue = getCookie(key);
      if (polledValue !== value) {
        setValue(polledValue);
      }
    }, 100);
    return () => {
      clearInterval(id);
    };
  };

  return [value, updateValue, pollingEffect];
}

/**
 * @param {number} days
 * @return {string}
 */
function toExpirationString(days) {
  return new Date(Date.now() + days * 86400000).toUTCString();
}

/**
 * @typedef {object} CookieOptions
 * @property {number} expires
 * @property {string} path
 */
