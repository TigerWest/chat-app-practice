// themed-styled-component.ts
// tslint:disable:no-duplicate-imports
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { theme } from './theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  ThemeProvider,
  ThemeConsumer,
  keyframes,
  ServerStyleSheet,
} = (styledComponents as any) as ThemedStyledComponentsModule<typeof theme>;

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeConsumer,
  ServerStyleSheet,
};
export default styled;
