import React, { useState } from 'react';
import axios from 'axios';
import SignInForm from './SignInForm';

const SignUpForm = () => {
    // Ecoute des champs du formulaire
    const [formSubmit, setFormSubmit] = useState(false);
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Ecoute du bouton de soumission du formulaire
    const handleRegister = async (e) => {
        e.preventDefault();
        const pseudoError = document.querySelector('.pseudo.error');
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');

        //Appel de la route signup
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/auth/signup',
            data: {
                pseudo,
                email,
                password,
            },
        })
            .then((res) => {
                console.log(res);
                if (res.data.errors) {
                    pseudoError.innerHTML = res.data.errors.pseudo;
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.password;
                } else {
                    setFormSubmit(true);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            {formSubmit ? (
                <>
                    <SignInForm />
                    <span></span>
                    <h4 className="success">
                        Enregistrement réussi, veuillez-vous connecter
                    </h4>
                </>
            ) : (
                <div className="card-log __signup">
                    <form action="" onSubmit={handleRegister} id="sign-up-form">
                        <label htmlFor="pseudo">Pseudo</label>
                        <br />
                        <input
                            className="inp-pseudo"
                            type="text"
                            name="pseudo"
                            id="pseudo"
                            placeholder="Pseudo"
                            onChange={(e) => setPseudo(e.target.value)}
                            value={pseudo}
                        />
                        <div className="pseudo error"></div>
                        <br />
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

                        <input
                            className="btn-log"
                            type="submit"
                            value="Valider inscription"
                        />
                    </form>
                </div>
            )}
        </>
    );
};

export default SignUpForm;
