import React from 'react';

import { AuthProvider } from './src/assets/components/context/AuthContext';
import AppNav from './src/assets/navigation/AppNav';


 const App = () => {

  return (
    <AuthProvider>
    <AppNav/>
    </AuthProvider>
   

  

  );
  
};
  {/*  <AppStack /> 
     
*/} 


/*const Home = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Hom screen</Text>
    </View>
  );
};
*/
export default App;
