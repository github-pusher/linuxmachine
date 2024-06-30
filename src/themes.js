import data from './themes/schema.json';

const DEFAULT_THEME_NAME = 'dark';

const themes = {
  dark: data[0],
  light: data[1],
};

export {
  DEFAULT_THEME_NAME,
  themes,
}
