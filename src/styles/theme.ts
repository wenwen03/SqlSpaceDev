import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}
 
const theme = createTheme({
  palette: {
    primary: {
      main: '#ECD37E',
      darker: '#053e85',
    }
  },
  typography: {
    fontSize: 12
  }
});

export default responsiveFontSizes(theme)