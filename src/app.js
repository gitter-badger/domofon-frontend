import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './Root.js';

import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import customTheme from './customTheme.js';


// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider muiTheme={customTheme}>
      <Root />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));


