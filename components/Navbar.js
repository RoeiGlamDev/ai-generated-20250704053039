import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/trending">
            <a>Trending</a>
          </Link>
        </li>
        <li>
          <Link href="/subscriptions">
            <a>Subscriptions</a>
          </Link>
        </li>
        <li>
          <Link href="/library">
            <a>Library</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;