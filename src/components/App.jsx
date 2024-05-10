import React from 'react';
import AppContent from 'components/AppContent';
import AppFooter from 'components/AppFooter';
import AppHeader from 'components/AppHeader';
import AppNav from 'components/AppNav';

function App() {
  return (
    <>
      <AppNav />
      <AppHeader />
      <AppContent />
      <AppFooter />
    </>
  );
}

export default App;
