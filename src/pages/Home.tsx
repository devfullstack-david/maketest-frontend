/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/home.css';
import React, { useState } from 'react';
import { login } from '../api/userApi';
import { LoginUser } from '../types/login';

export const Home = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleLogin(e: React.MouseEvent<HTMLButtonElement>, user: LoginUser) {
      e.preventDefault();
      setIsLoading(true);
      try {
        await login(user);
        alert('Logado com sucesso');
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    return (
        <div className="container">
        <div className="row">
          <div className="login-card col-12 col-md-6 mt-5">
            <p className="login-card-title">Login</p>

            <form className="login-card-form">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="E-mail" />
                <span className="input-group-text" id="basic-addon2">@</span>
              </div>

              <div className="input-group mt-2">
                <input type="password" className="form-control" placeholder="Password" />
                <span className="input-group-text" id="basic-addon2">
                  <i className="bi bi-lock-fill"></i>
                </span>
              </div>

              <div className="mt-3">
                <button 
                  className="btn btn-primary login-card-button" 
                  onClick={(e) => handleLogin(e, { email: '', password: '' })}
                  disabled={isLoading}
                >Login
                </button>
              </div>
            </form>

            <br />
            <br />

            <p className="login-card-text-2">Don't have login?</p>
            <button className="btn btn-primary login-card-button-register">Register</button>

            <div className="row">
              <div className="col-6"></div>
              <div className="col-6">
                <img src="/img/person.png" width="70%" className="login-card-img" alt="person" />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 mt-5">
            <div className="login-card-2 container">
              <div className="row">
                <div className="login-card-2-text">
                  Make your 
                  <span className="login-card-2-text-alternative"> login </span> 
                  and 
                  <span className="login-card-2-text-alternative"> start a test </span> 
                  or<br /> 
                  <span className="login-card-2-text-alternative"> create your test </span> 
                  for your team or class.
                </div>
              </div>

              <div className="login-card-2-questions">
                <center>
                  <i className="bi bi-question-circle-fill login-card-2-questions-icon">
                  </i>
                  
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
