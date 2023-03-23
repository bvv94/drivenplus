import GlobalStyle from './Style/GlobalStyle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './Components/LogIn';
import SignIn from './Components/SignIn';
import Subscriptions from './Components/Subscriptions';
import Plus from './Components/Plans/Plus';
import HomePlus from './Components/HomePlus';
import UserProvider from './Contexts/UserContext';


function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<LogIn />}/>
          <Route path='/cadastro' element={<SignIn />}/>
          <Route path='/subscriptions' element={<Subscriptions/>}/>
          <Route path='/plus' element={<Plus/>}></Route>
          <Route path='/homeplus' element={<HomePlus/>}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
