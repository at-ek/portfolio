import Nav from './Nav';

const Header = ({setCurrent}) => {
  return (
    <header>
      <div className="header-inner">
        <h1 className='logo'>Portfolio</h1>
        <Nav setCurrent={setCurrent}/>
      </div>
    </header>
  );
}

export default Header;