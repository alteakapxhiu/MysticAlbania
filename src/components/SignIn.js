import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrow } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
   
    if (email && password) {
      // Simulate successful login
      navigate('/some-route'); // Me von zevendeso '/some-route' me route qe do shkoj
    }
  };

  return (
    
    <div className="fade-in">
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: '23rem',marginTop:'25%' }} onSubmit={handleLogin} action="connect.php" method="post">
                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>

                <div className="form-outline mb-4">
                  <input 
                    type="email" 
                    id="form2Example18" 
                    className="form-control form-control-lg" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                  />
                  <label className="form-label" htmlFor="form2Example18">Email address</label>
                </div>

                <div className="form-outline mb-4">
                  <input 
                    type="password" 
                    id="form2Example28" 
                    name="password"
                    className="form-control form-control-lg" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form2Example28">Password</label>
                </div>

                <div className="pt-1 mb-4">
                  <button 
                    className="btn btn-info btn-lg btn-block" 
                    type="submit"

                  >
                    Login
                  </button>
                </div>

                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">Forgot password?</a>
                </p>
                <p>
                  Don't have an account? <a href="#!" className="link-info">Register here</a>
                </p>
              </form>
            </div>
          </div>

          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img 
              src="https://littletravelsbiglove.com/wp-content/uploads/2023/08/vacanze-in-albania-ksamil-mare.jpeg"
              alt="Login" 
              className="w-100 vh-100" 
              style={{ objectFit: 'cover', objectPosition: 'left' }}
            />
          </div>
        </div>
      </div>
    </section></div>
  );
};

export default LoginPage;
