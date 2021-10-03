import './App.css';
import NavBar from "./NavBar";
import "./navBar.css";
import SocialMedia from './SocialTab';

export default function App() {
  return (
   <div className="App">

<NavBar />
<SocialMedia />

    <footer>
   <p>
<a href="https://github.com/brialaws98/portfolio-react-app">
 Open Source</a> by <em>Briana Laws</em>
</p>
</footer>
</div>
  ); 
}

