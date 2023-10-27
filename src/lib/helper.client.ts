export const getFromSessionStorage = (key: string) => {
  if (typeof sessionStorage !== "undefined") {
    return sessionStorage.getItem(key);
  }
  return null;
};
