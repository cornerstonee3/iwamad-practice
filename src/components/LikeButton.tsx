import { useLikes } from '../context/LikesContext';
import { Button } from './ui/Button';
export default function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <Button 
      onClick={addLike} 
      variant="primary"
      aria-label={`Like (${likes} likes)`}
    >
      <span style={{ color: likes > 0 ? 'red' : 'inherit' }}>♥</span> {likes}
    </Button>
  );
}