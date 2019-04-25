export function setToken (token) {
  localStorage.setItem('__token__', token);
}

export function getToken () {
  return localStorage.getItem('__token__') || '';
}

export function removeToken() {
  localStorage.removeItem('__token__');
}