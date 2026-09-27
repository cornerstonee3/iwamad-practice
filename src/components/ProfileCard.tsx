import { useState } from 'react';
import SkillBadge, { type Skill } from './SkillBadge';

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;
  bio: string;
  skills: Skill[];
};

export default function ProfileCard({ name, role, avatarUrl, bio, skills }: ProfileCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <main>
      <section className="profile-card">
        {avatarUrl && (
          <img src={avatarUrl} alt={`Profile picture of ${name}`} width="300" />
        )}
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{bio}</p>

        <button onClick={() => setIsLiked(!isLiked)}>
          {isLiked ? '❤️ Liked' : '🤍 Like'}
        </button>


        <div style={{ marginTop: '20px' }}>
          <h4>My Skills</h4>

          {skills.length === 0 ? (
            <p>No skills added yet.</p>
          ) : (
            <ul>
              {skills.map(skill => (
                <SkillBadge key={skill.id} skill={skill} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}