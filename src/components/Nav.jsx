const Nav = () => {
  const scrollTarget = (val) => {
    document.getElementById(`${val}`)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <nav>
      <button onClick={() => scrollTarget('home')}>Home</button>
      <button onClick={() => scrollTarget('skills')}>Skills</button>
      <button onClick={() => scrollTarget('works')}>Works</button>
      <button onClick={() => scrollTarget('hobby')}>Hobby</button>
      <button onClick={() => scrollTarget('contact')}>Contact</button>
    </nav>
  )
}

export default Nav;