import { Tag } from './ui/Tag';
export type Skill = {
  id: number;
  label: string;
};

type SkillBadgeProps = {
  skill: Skill;
};

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <li>
      <Tag label={skill.label} />
    </li>
  );
}