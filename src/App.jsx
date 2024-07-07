import './App.css'
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <ul>
        <li><Link to="watch">StopWatch</Link></li>
        <li><Link to="tik">Tick Tak Tao</Link></li>
        <li><Link to="search">Search Bar</Link></li>
        <li><Link to="image">Image</Link></li>
        <li><Link to="signup">SignUpWithValidation</Link></li>
      </ul>
    </div>
  );
}

export default App