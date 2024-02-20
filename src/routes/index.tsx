import { Link } from "react-router-dom";
 
export default function index() {
  return (
    <div>
      <h1>This is the index page</h1>
      <div>
        <ul>
          <li><Link to="/sign-up">Sign Up</Link></li>
          <li><Link to="/sign-in">Sign In</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>
      </div>
    </div>
  )
}