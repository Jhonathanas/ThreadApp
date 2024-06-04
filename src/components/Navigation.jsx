import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ authUser, signOut }) {
  const {
    id, avatar, name, email
  } = authUser;

  return (
    <div className="bg-gray-800 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6">
        <div className="flex items-center">
          <img
            src={avatar}
            alt={id}
            title={name}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="text-sm font-bold uppercase">{name}</p>
            <p className="text-xs text-gray-400">{email}</p>
          </div>
        </div>
        <nav className="flex space-x-6">
          <Link
            to="/leaderboard"
            className="text-blue-300 hover:bg-blue-100 py-2 px-4 rounded hover:text-gray-900 transition"
          >
            Leaderboard
          </Link>
          <Link
            to="/"
            className="text-blue-300 hover:bg-blue-100 py-2 px-4 rounded hover:text-gray-900 transition"
          >
            Home
          </Link>
        </nav>
        <button
          type="button"
          onClick={signOut}
          className="bg-red-400 hover:bg-blue-100 text-stone-700 py-2 px-4 rounded transition"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
