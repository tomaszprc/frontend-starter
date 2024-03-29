import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      Menu
      <ul>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
}
