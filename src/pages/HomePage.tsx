import ProfileCard from '../components/ProfileCard';
export default function HomePage() {
  return (
    <ProfileCard 
      name="Amanbol Moldash"
      role="IWAMAD Student"
      avatarUrl="https://cdn.pixabay.com/photo/2017/05/11/16/40/emoji-2304720_1280.png"
      bio="Hello, everyone! I'm a 3rd year student at KBTU. I like gaming and hiking. This is my personal card."
      skills={[]} 
    />
  );
}