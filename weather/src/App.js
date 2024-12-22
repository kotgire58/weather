import Header from "./components/Header";
import Main from "./components/Main";
import './styles/components/App.scss'
function App() {
  const dark=false;
  return (
    <div className={`App-${dark ? 'dark' : 'light'}`}>
    <Header/>
    <Main/>
    </div>
  );
}

export default App;
