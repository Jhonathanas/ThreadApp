/* eslint-disable eol-last */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  const onLogin = ({ email, password }) => {
    // @TODO: dispatch async action to login
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page flex items-center justify-center min-h-screen bg-gray-100">
      <article className="login-page__main bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login Page
        </h2>

        <LoginInput login={onLogin} />
        <p className="text-center mt-4">
          Don&apos;t have an account?
          {' '}
          <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;