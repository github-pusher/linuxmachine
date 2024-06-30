export function fetchTranslations(lang) {
  return new Promise((resolve) => {
    fetch(`/lang/${lang}.json`, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((response) => response.json())
      .then((data) => resolve(data));
  });
}
