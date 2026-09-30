import SkillBadge, { type Skill } from '../components/SkillBadge';

export default function SkillsPage() {
  const mySkills: Skill[] = [
    { id: 1, label: 'Python' },
    { id: 2, label: 'HTML' },
    { id: 3, label: 'Git' },
    { id: 4, label: 'Excel' },
  ];

  return (
    <div className="page-content">
      <h2>My Skills:</h2>
      {mySkills.length === 0 ? (
        <p>No skills added yet.</p>
      ) : (
        <ul>
          {mySkills.map(skill => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </ul>
      )}
    </div>
  );
}