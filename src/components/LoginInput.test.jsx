import React from 'react';
import { 
  render, fireEvent
} from '@testing-library/react';
import { 
  describe, it, expect, vi
} from 'vitest';
import LoginInput from './LoginInput';

describe('LoginInput', () => {
  it('calls login function with email and password when submit button is clicked', () => {
    const loginMock = vi.fn();
    const { getByLabelText, getByRole } = render(<LoginInput login={loginMock} />);

    fireEvent.change(getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText(/password/i), { target: { value: 'password123' } });

    fireEvent.click(getByRole('button', { name: /submit/i }));
    expect(loginMock).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password123' });
  });
});
