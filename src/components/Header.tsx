import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';
import logo from '../assets/logo.svg';

type HeaderProps = {
  name: string;
  tagline: string;
};

export default function Header({ name, tagline }: HeaderProps) {
  const { likes } = useLikes();
  
  return (
    <header>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src={logo} alt="" width={32} height={32} />
        <h1>{name}</h1>
      </div>
      
      <p>{tagline}</p>
      
      <div style={{ fontWeight: 'bold', margin: '10px 0' }}>
        ♥ {likes}
      </div>
      
      <nav style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>Skills</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contacts</NavLink>
        <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>Register</NavLink>
        <NavLink to="/events" className={({ isActive })=>isActive ? "active" : ""}>Events</NavLink>
      </nav>
    </header>
  );
}