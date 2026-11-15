// папка (смотри путь '../assets/job')
// формат файлов ( /\.jpg$/)

const requireImages = require.context('../assets/catalog/tovar_1', false, /\.png$/);

export const jobImages = requireImages
  .keys()
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]))
  .map((key) => requireImages(key));
