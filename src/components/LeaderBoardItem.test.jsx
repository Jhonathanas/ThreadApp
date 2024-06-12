import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import LeaderBoardItem from './LeaderBoardItem';

describe('LeaderBoardItem', () => {
  it('renders user name and score correctly', () => {
    const user = { avatar: 'avatar-url', name: 'John Doe' };
    const score = 100;
    
    const { getByText, getByAltText } = render(<LeaderBoardItem user={user} score={score} />);

    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('100')).toBeInTheDocument();
    expect(getByAltText('John Doe')).toBeInTheDocument();
  });
});
