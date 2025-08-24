import "./App.css"
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
;






function App() {
  return(
    <Router>
    <div className='App'>  
      <Nav />
      <Routes> 
      <Route path="/" exact Component={Home}/>
      <Route path="/books" Component={Books}/>
     {/* <Route path="/books" render={() => <Books books={books} />} /> */}
     </Routes>
      <Footer />
    </div> 
    </Router>

  );
}

export default App;
