import { useLikes } from '../context/LikesContext';

export default function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <button onClick={addLike}>
      <span style={{ color: likes > 0 ? 'red' : 'inherit' }}>♥</span> {likes}
    </button>
  );
}