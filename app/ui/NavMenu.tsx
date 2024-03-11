import NavButtonsList from './NavButtonsList';

const NavMenu = () => {
  return (
    <nav className="w-80 pl-6 pr-6 bg-white flex">
      <ul className="w-full">
        <NavButtonsList />
      </ul>
    </nav>
  );
};

export default NavMenu;
