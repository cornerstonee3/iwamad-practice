import { useState, type ChangeEvent, type FocusEvent, type SubmitEvent } from 'react';
import { Button } from '../components/ui/Button';
import { TextField } from '../components/ui/TextField';
import { 
  validateRegistration, 
  type RegistrationValues 
} from '../lib/validateRegistration';

export default function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  
  const [touched, setTouched] = useState<Partial<Record<keyof RegistrationValues, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const errors = validateRegistration(values);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({
      ...current,
      [name]: true
    }));
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);
    
    if (Object.keys(errors).length === 0) {
      setIsSuccess(true);
    }
  }

  if (isSuccess) {
    return <p role="status">Thanks, {values.fullName}. You are registered.</p>;
  }

  return (
    <main style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} noValidate className="form">
        <h2>Register</h2>

        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.fullName || submitAttempted) ? errors.fullName : undefined}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.email || submitAttempted) ? errors.email : undefined}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.password || submitAttempted) ? errors.password : undefined}
        />

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.confirmPassword || submitAttempted) ? errors.confirmPassword : undefined}
        />

        <div className="check">
          <input 
            id="acceptTerms" 
            name="acceptTerms" 
            type="checkbox" 
            checked={values.acceptTerms} 
            onChange={handleChange} 
            onBlur={handleBlur}
          />
          <label htmlFor="acceptTerms">I accept the terms and conditions</label>
        </div>
        {(touched.acceptTerms || submitAttempted) && errors.acceptTerms && (
          <p className="field-error" style={{ margin: 0 }}>{errors.acceptTerms}</p>
        )}

        <Button type="submit">Create account</Button>
      </form>
    </main>
  );
}