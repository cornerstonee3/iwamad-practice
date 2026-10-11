import LikeButton from './LikeButton';
import { Card } from './ui/Card';
type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;
  bio: string;
  skills?: string[];
};

export default function ProfileCard({ name, role, avatarUrl, bio }: ProfileCardProps) {
  return (
    <main>
      <Card>
        {avatarUrl && (
          <img src={avatarUrl} alt={`Profile picture of ${name}`} width="300" />
        )}
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{bio}</p>

        <LikeButton />
      </Card>
    </main>
  );
}