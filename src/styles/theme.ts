import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}
 
export default createTheme({
  palette: {
    primary: {
      main: '#ECD37E',
      darker: '#053e85',
    }
  }
});