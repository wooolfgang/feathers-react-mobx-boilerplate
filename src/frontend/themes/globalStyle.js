import { injectGlobal } from 'styled-components';

const globalStyle = injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  
  body {
    margin: 0px;
    padding: 0px;
    font-family: 'Source Sans Pro', 'sans-serif';
  }
`