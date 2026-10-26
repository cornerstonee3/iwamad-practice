type HeaderProps = {
  name: string;
  tagline: string;
};

export default function Header({ name, tagline }: HeaderProps) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{tagline}</p>
    </header>
  );
}