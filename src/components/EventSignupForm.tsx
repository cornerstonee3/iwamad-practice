import { useState, type ChangeEvent, type FormEvent } from 'react';
import { type CampusEvent } from '../data/events';
import { validateSignup, type SignupValues } from '../lib/validateSignup';
import { TextField } from './ui/TextField'; 
import { Button } from './ui/Button';       

type EventSignupFormProps = {
  event: CampusEvent;
};

export default function EventSignupForm({ event }: EventSignupFormProps) {
  // Исходное состояние формы
  const [values, setValues] = useState<SignupValues>({
    fullName: '',
    email: '',
    tickets: '1'
  });
  
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  
  // Состояние оставшихся мест и сообщения об успехе
  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [statusMessage, setStatusMessage] = useState('');

  // Ошибки вычисляются на каждый рендер
  const errors = validateSignup(values, seatsLeft);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);

    // Если объект errors пустой (ошибок нет)
    if (Object.keys(errors).length === 0) {
      const ticketsBought = Number(values.tickets);
      
      // Отнимаем билеты и выводим статус
      setSeatsLeft((prev) => prev - ticketsBought);
      setStatusMessage(`Booked: ${values.tickets} for ${values.fullName}.`);
      
      // Очищаем форму
      setValues({ fullName: '', email: '', tickets: '1' });
      setTouched({});
      setSubmitAttempted(false);
    } else {
      setStatusMessage('');
    }
  };

  return (
    <div style={{ marginTop: '40px', padding: '20px', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
      <h3>Book a seat</h3>
      
      {/* Отображение оставшихся мест строго по заданию */}
      <p>Seats left: {seatsLeft}</p>
      
      {/* Сообщение об успешном бронировании */}
      {statusMessage && (
        <p role="status" style={{ color: 'green', fontWeight: 'bold', marginBottom: '15px' }}>
          {statusMessage}
        </p>
      )}

      {/* Форма с отключенной встроенной валидацией браузера (noValidate) */}
      <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          error={(submitAttempted || touched.fullName) ? errors.fullName : undefined}
        />
        
        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={(submitAttempted || touched.email) ? errors.email : undefined}
        />
        
        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          error={(submitAttempted || touched.tickets) ? errors.tickets : undefined}
        />
        
        <div style={{ marginTop: '10px' }}>
          <Button type="submit">Book</Button>
        </div>
      </form>
    </div>
  );
}