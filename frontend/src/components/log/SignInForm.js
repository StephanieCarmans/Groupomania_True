import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
    // Ecoute des champs du formulaire
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // Ecoute du bouton de soumission du formulaire
    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');
        //Appel de la route login
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/auth/login',
            withCredentials: false,
            data: {
                email,
                password,
            },
        })
            .then((res) => {
                console.log(res);
                // On stock le JWT token et l'ID utilisateur dans le local storage
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('Id', res.data.userId);
                if (res.data.errors) {
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.password;
                } else {
                    navigate('/News');
                }
            })
            .catch((err) => {
                alert(`Nom d'utilisateur ou mot de passe incorect`);
                console.log(err);
            });
    };

    return (
        <div className="card-log __signin">
            <form
                className="form form-signin"
                action=""
                onSubmit={handleLogin}
                id="sign-up-form"
            >
                <label htmlFor="email">Email</label>
                <br />
                <input
                    className="inp-email"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <div className="email error"></div>
                <br />
                <label htmlFor="password">Mot de passe</label>
                <br />
                <input
                    className="inp-password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <div className="password error"></div>
                <br />
                <input className="btn-log" type="submit" value="Se connecter" />
            </form>
        </div>
    );
};

export default SignInForm;
