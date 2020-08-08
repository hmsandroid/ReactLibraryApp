/**
  libraryApp by Onur
 */

import React, { useEffect, useState } from 'react';
import { NativeModules } from 'react-native';
import { AppContext } from './src/AppContext';
import Account from './src/account';

const App = () => {
  const [isHmsAvailable, setIsHmsAvailable] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function checkHmsAvailability() {
      const isHmsAvailable = await NativeModules.HmsUtils.isHmsAvailable();
      setIsHmsAvailable(isHmsAvailable);
      setIsReady(true);
    }

    checkHmsAvailability();
  }, []);

  return (
    <>
      {isReady && (
        <AppContext isHmsAvailable={isHmsAvailable}>
          <Account />
        </AppContext>
      )}
    </>
  );
};

export default App;
