
import React, { useContext } from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
// setupTests.js
import 'jest-localstorage-mock';

import { AuthContext, AuthContextProvider } from './AuthContext';

// Helper function to render a component wrapped in AuthContextProvider
const renderWithAuthContext = (ui) => {
  return render(<AuthContextProvider>{ui}</AuthContextProvider>);
};

// Test cases
describe('AuthContext', () => {
  it('provides initial state', () => {
    const { result } = renderWithAuthContext(<TestComponent />);
    
    expect(result.current.user).toBe(null);
    expect(result.current.token).toBe('');
    expect(result.current.role).toBe('');
  });

  it('updates state on login success', () => {
    const { result } = renderWithAuthContext(<TestComponent />);
    
    act(() => {
      result.current.dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: { id: 1, name: 'John' }, token: 'xyz', role: 'admin' },
      });
    });

    expect(result.current.user).toEqual({ id: 1, name: 'John' });
    expect(result.current.token).toBe('xyz');
    expect(result.current.role).toBe('admin');
  });

  it('updates state on login start', () => {
    const { result } = renderWithAuthContext(<TestComponent />);
    
    act(() => {
      result.current.dispatch({ type: 'LOGIN_START' });
    });

    expect(result.current.user).toBe(null);
    expect(result.current.token).toBe('');
    expect(result.current.role).toBe('');
  });

  it('updates state on login failure', () => {
    const { result } = renderWithAuthContext(<TestComponent />);
    
    act(() => {
      result.current.dispatch({ type: 'LOGIN_FAILURE' });
    });

    expect(result.current.user).toBe(null);
    expect(result.current.token).toBe('');
    expect(result.current.role).toBe('');
  });

  it('clears state on logout', () => {
    const { result } = renderWithAuthContext(<TestComponent />);
    
    act(() => {
      result.current.dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: { id: 1, name: 'John' }, token: 'xyz', role: 'admin' },
      });
    });

    expect(result.current.user).toEqual({ id: 1, name: 'John' });
    expect(result.current.token).toBe('xyz');
    expect(result.current.role).toBe('admin');

    act(() => {
      result.current.dispatch({ type: 'LOGOUT' });
    });

    expect(result.current.user).toBe(null);
    expect(result.current.token).toBe('');
    expect(result.current.role).toBe('');
  });

  // Add more test cases as needed
});

// Test component using AuthContext
const TestComponent = () => {
  const { user, token, role, dispatch } = useContext(AuthContext);
  
  // Render component content based on auth state
  return (
    <div>
      <p>User: {user ? user.name : 'Not logged in'}</p>
      <p>Token: {token}</p>
      <p>Role: {role}</p>
      <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
    </div>
  );
};
