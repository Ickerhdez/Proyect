import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [inputError, setInputError] = useState(null);
  const navigate = useNavigate();

  const handleOnClick = () => {
    console.log("valor de email: " + email);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleOnBlur = () => {
    if (email.includes('@')) {
      setInputError(null);
    } else {
      setInputError('Correo inválido.');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center bg-gray" style={{ height: '100vh' }}>
      <div className="card bg-secondary text-white shadow-lg rounded-4 p-4" style={{ width: '100%', maxWidth: '800px' }}>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">moly electrónico</label>
            <input
              type="email"
              id="emailInput"
              className={`form-control ${inputError ? 'is-invalid' : ''}`}
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleOnBlur}
              required
            />
            {inputError && <div className="invalid-feedback">{inputError}</div>}
          </div>
          <button
            className="btn btn-primary w-100 py-2 fw-semibold"
            type="submit"
            onClick={handleOnClick}
          >
            Ingresar
          </button>
        </form>
        <p className="text-center text-muted mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
          ¿No tienes una cuenta? <a href="/register" className="text-decoration-none">Regístrate</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
