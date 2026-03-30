import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Basic Math Test', () => {
  it('should verify that math works correctly', () => {
    expect(1 + 1).toBe(2);
  });
});

const Greeting = ({ name }: { name: string }) => <h1>Hello, {name}!</h1>;

describe('Greeting Component', () => {
  it('should render the correct greeting message', () => {

    render(<Greeting name="Roman" />);
    
    // 2. Шукаємо заголовок (h1) на екрані
    const headingElement = screen.getByRole('heading', { level: 1 });
    
    // 3. Перевіряємо, чи правильний там текст і чи він взагалі існує
    expect(headingElement).toHaveTextContent('Hello, Roman!');
    expect(headingElement).toBeInTheDocument();
  });
});