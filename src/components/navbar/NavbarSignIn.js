export default function NavbarSignIn() {
  return (
    <>
      <nav className="max-w-full sticky top-0 bg-white">
        <li className="list-none flex flex-row justify-around items-center p-3">
          <ul className="p-3 text-purple-800 hover:text-purple-600 font-bold uppercase">
            <a href="/" className="text-3xl font-['Courier']">
              MovieMuncher
            </a>
          </ul>
          <ul className="p-3 font-medium rounded-md bg-purple-800 hover:bg-purple-600 text-white">
            <a href="/signin">Get started</a>
          </ul>
        </li>
      </nav>
    </>
  );
}
