import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';
type HeaderProps = {
  name: string;
  tagline: string;
};

export default function Header({ name, tagline }: HeaderProps) {
  const { likes } = useLikes();
  return (
    <header>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <div style={{ fontWeight: 'bold', margin: '10px 0' }}>
        ♥ {likes}
      </div>
      
      <nav style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>Skills</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contacts</NavLink>
      </nav>
    </header>
  );
}