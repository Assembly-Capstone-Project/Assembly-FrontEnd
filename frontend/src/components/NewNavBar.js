import "./NewNavBar.css"


function NewNavBar() {
  return (
    <nav className="nav">
      <a href="/homePage" className="assembly-title">
        Assembly
      </a>
      <ul>
        <li>
          <a href="/gamesPage">games</a>
        </li>
        <li>
          <a href="/friendsList">friends</a>
        </li>
        <li>
          <a href="/favorites">favorites</a>
        </li>
        <li>
          <a href="/">logout</a>
        </li>
      </ul>
    </nav>
  );
}

export default NewNavBar;
