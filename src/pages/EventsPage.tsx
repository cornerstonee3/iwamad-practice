import EventCard from '../components/EventCard';
import { events } from '../data/events';

export default function EventsPage() {
  return (
    <main style={{ display: 'block', width: '100%', maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Events</h1>
      
      <div className="card-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}