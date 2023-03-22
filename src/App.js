import GlobalStyle from './Style/GlobalStyle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './Components/LogIn';
import SignIn from './Components/SignIn';
import Subscriptions from './Components/Subscriptions';

function App() {
  return (
    <BrowserRouter>
      {/* <UserProvider> */}
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<LogIn />}/>
          <Route path='/cadastro' element={<SignIn />}/>
          <Route path='/Subscriptions' element={<Subscriptions/>}/>
        </Routes>
      {/* </UserProvider> */}
    </BrowserRouter>
  );
}

export default App;
