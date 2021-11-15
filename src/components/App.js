import * as React from 'react';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import Header  from './ui/Header';

// const arcBlue= '#0B72B9'
// const arcOrange = '#FFBA60'

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
 fontWeight:200,
};
const App=()=> {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello
   
    </ThemeProvider>
  );
}

export default App;
