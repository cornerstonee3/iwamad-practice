import './style.css'; 
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import { type Skill } from './components/SkillBadge'; 

function App() {
  const mySkills: Skill[] = [
    { id: 1, label: 'Python' },
    { id: 2, label: 'HTML' },
    { id: 3, label: 'Git' },
    { id: 4, label: 'Excel' },
  ]; 

  return (
    <>
      <Header 
        name="Amanbol Moldash" 
        tagline="IWAMAD Student" 
      />
      
      <ProfileCard 
        name="Amanbol Moldash"
        role="IWAMAD Student"
        avatarUrl="https://cdn.pixabay.com/photo/2017/05/11/16/40/emoji-2304720_1280.png"
        bio="Hello, everyone! I'm a 3rd year student at KBTU. I like gaming and hiking. This is my personal card."
        skills={mySkills} 
      />
      
      <Footer 
        year={2026} 
        name="Amanbol" 
      />
    </>
  );
}

export default App;