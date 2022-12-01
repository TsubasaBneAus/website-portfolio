import Link from "next/link";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <h1>Portfolio</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Dropdown id="dropdown">
              <Dropdown.Toggle id="dropdown-basic">
                Change Languages
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item id="dropdown-button-item" href="#/action-1">
                  English
                </Dropdown.Item>
                <Dropdown.Item id="dropdown-button-item" href="#/action-2">
                  Japanese
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
