import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, setEmail] = useInput('');
  const [password, setPasword] = useInput('');
  return (
    <form className="login-input">
      <input type="text" value={email} onChange={setEmail} placeholder="Email" />
      <input type="password" value={password} onChange={setPasword} placeholder="Password" />
      <button type="button" onClick={() => login({ email, password })}>Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
