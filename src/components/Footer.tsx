type FooterProps = {
  year: number;
  name: string;
};

export default function Footer({ year, name }: FooterProps) {
  return (
    <footer>
      <p>&copy; {year} {name}. All rights reserved.</p>
    </footer>
  );
}