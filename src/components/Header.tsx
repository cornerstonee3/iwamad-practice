import { NavLink } from 'react-router';

type HeaderProps = {
  name: string;
  tagline: string;
};

export default function Header({ name, tagline }: HeaderProps) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{tagline}</p>
      
      <nav style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>Skills</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contacts</NavLink>
      </nav>
    </header>
  );
}