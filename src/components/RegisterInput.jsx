import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

function RegisterInput({ register: registerUser }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    registerUser(data);
  };

  return (
    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <input
            id="name"
            name="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
            placeholder="Your Name"
          />
          <label
            htmlFor="name"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Your Name
          </label>
          {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
        </div>
        <div className="relative my-5">
          <input
            id="email"
            name="email"
            type="text"
            {...register('email', { required: 'Email is required' })}
            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
            placeholder="Email address"
          />
          <label
            htmlFor="email"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Email Address
          </label>
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>
        <div className="relative my-5">
          <input
            id="password"
            name="password"
            type="password"
            {...register('password', { required: 'Password is required' })}
            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
            placeholder="Password"
          />
          <label
            htmlFor="password"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Password
          </label>
          {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
        </div>
        <div className="relative">
          <button
            className="bg-cyan-500 text-white rounded-md px-2 py-1"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
