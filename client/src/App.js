
import './App.css';
import Dashboard from './components/dashboard';
import {Router, Link} from '@reach/router';
import CreateOne from './components/createone';
import DisplayOne from './components/displayone';
import UpdateOne from './components/editone';

function App() {
  return (
      <div>
        <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container">
                <Link className="navbar-brand" to ="/" >Pet Shelter</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse"style={{marginLeft:"500px;"}}>
                    <ul className="navbar-nav flex-grow-1" >
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to ="/"> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to ="/api/pets/create">New Pet</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

        <Router>
          <Dashboard path="/"></Dashboard>
          <CreateOne path="/api/pets/create"></CreateOne>
          <DisplayOne path="/api/pets/display/:id"></DisplayOne> 
          <UpdateOne path="/api/pets/update/:id"></UpdateOne>
        </Router>
      </div>
  
  );
}

export default App;
