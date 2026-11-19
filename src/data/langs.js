export const getLang = (pathname) =>
  pathname.startsWith('/en') ? 'en'
  : pathname.startsWith('/vn') ? 'vn'
  : 'ru';
