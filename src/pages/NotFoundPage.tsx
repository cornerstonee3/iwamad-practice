import { Link } from 'react-router';
export default function NotFoundPage() {
  return (
    <div className="page-content">
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go back home</Link>
    </div>
  );
}