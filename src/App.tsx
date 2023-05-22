import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import AppRoutes from './routes/Routes';



const App = () => {
  return (
    <div>
      {/* Your app's header, navigation, or other common components */}
      <AppRoutes />
      {/* Your app's footer or other common components */}
    </div>
  );
};

export default App;
