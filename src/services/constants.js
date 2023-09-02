const STORAGE_KEY = 'LINUXMACHINE'

const appRecord = (() => {
  let data = localStorage.getItem(STORAGE_KEY);
  
  if (!data) {
    return false;
  }
  
  try {
    data = decodeURIComponent(data);
    data = JSON.parse(data);
  } catch (error) {
    if (window.console) {
      window.console.error('JSON read error', error);
    }
    return false;
  }
  
  return data;
})();

export {
  STORAGE_KEY,
  appRecord,
}
