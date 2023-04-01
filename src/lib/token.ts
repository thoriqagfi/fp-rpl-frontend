export const getToken = () => {
  return localStorage.getItem('token');
}

export const setToken = (token: string, value: string) => {
  return localStorage.setItem(token, value);
}

export const removeToken = (token: string) => {
  return localStorage.removeItem(token);
}