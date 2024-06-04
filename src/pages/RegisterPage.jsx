/* eslint-disable eol-last */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  return (
    <section className="register-page flex items-center justify-center min-h-screen bg-gray-100">
      <article className="register-page__main bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create your account
        </h2>
        <RegisterInput register={onRegister} />
        <p className="text-center mt-4">
          Already have an account?
          {' '}
          <Link to="/" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;