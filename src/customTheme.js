import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import colors from 'material-ui/lib/styles/colors';

/*
 default theme: https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/lightBaseTheme.js
 predefined colors: http://www.material-ui.com/#/customization/colors
*/

const customTheme = getMuiTheme({
  palette: {
      accent1Color: colors.deepOrange500,
  },
});

export default customTheme
