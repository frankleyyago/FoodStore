import { createGlobalStyle } from 'styled-components'

export const colors = {
  yellow: '#FFEBD9',
  lightYellow: '#F5F5F5',
  red: '#E66767',
  white: '#FFFFFF'
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
    margin: 0 auto;
    background-color: ${colors.yellow};
  }
`
