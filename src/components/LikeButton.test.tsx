import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import LikeButton from './LikeButton';
import { LikesProvider } from '../context/LikesContext';

describe('LikeButton', () => {
  it('changes visible text when clicked', async () => {
    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>
    );

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('♥ 0');

    await userEvent.click(button);
    
    expect(button).toHaveTextContent('♥ 1');
  });
});