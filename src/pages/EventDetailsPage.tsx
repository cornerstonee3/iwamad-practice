import { useParams, Link } from 'react-router';
import { events } from '../data/events';

export default function EventDetailsPage() {
  const { eventId } = useParams<{ eventId: string }>();

  const event = events.find((item) => item.id === Number(eventId));

  if (!event) {
    return (
      <div>
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events">&larr; Back to events</Link>
      </div>
    );
  }

  return (
    <article>
      <Link to="/events" style={{ display: 'inline-block', marginBottom: '20px' }}>
        &larr; Back to events
      </Link>
      
      <h1>{event.title}</h1>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Place:</strong> {event.place}</p>
      <p><strong>Seats total:</strong> {event.seats}</p>
    </article>
  );
}