import GlobalStyle from './Style/GlobalStyle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './Components/LogIn';
import SignIn from './Components/SignIn';
import Subscriptions from './Components/Subscriptions';
import Plus from './Components/Plans/Plus';
import Gold from "./Components/Plans/Gold";
import Platinum from "./Components/Plans/Platinum"
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
          <Route path='subscriptions/1' element={<Plus/>}></Route>
          <Route path='subscriptions/2' element={<Gold/>}></Route>
          <Route path='subscriptions/3' element={<Platinum/>}></Route>
          <Route path='/homeplus' element={<HomePlus/>}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
