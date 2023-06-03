import { createGlobalStyle } from 'styled-components'

export const colors = {
  yellow: '#FFEBD9',
  lightYellow: '#F5F5F5',
  red: '#E66767',
  white: '#FFFFFF',
  black: '#000'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: roboto, sans-serif;
    list-styles: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 80px auto 120px;
  }
`
