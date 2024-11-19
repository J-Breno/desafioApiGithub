import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-blue-600 h-16 px-10 py-4">
        <Link to={"/"}>
          <h1 className="text-white text-2xl">Github API</h1>
        </Link>
      </header>
      <Outlet />
    </>
  );
}
