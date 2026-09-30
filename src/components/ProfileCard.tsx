import LikeButton from './LikeButton';

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
      <section className="profile-card">
        {avatarUrl && (
          <img src={avatarUrl} alt={`Profile picture of ${name}`} width="300" />
        )}
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{bio}</p>

        <LikeButton />
      </section>
    </main>
  );
}