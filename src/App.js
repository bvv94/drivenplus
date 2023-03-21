import GlobalStyle from './Style/GlobalStyle';
import LogIn from './Components/LogIn';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<LogIn />}></Route>
          <Route path='/cadastro' element={<SignIn />}></Route>
          <Route path='/hoje' element={<Today />}></Route>
          <Route path="/habitos" element={<HabitScreen />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
