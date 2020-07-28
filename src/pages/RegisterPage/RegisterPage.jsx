import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const handleName = ({ target }) => setName(target.value);

  const [email, setEmail] = useState("");
  const handleChange = ({ target }) => setEmail(target.value);

  const [password, setPassword] = useState("");
  const handlePassword = ({ target }) => setPassword(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      authOperations.registerOperation({
        name: name,
        email: email,
        password: password,
      })
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleName}
        placeholder="Enter your name..."
        className={styles.formInput}
      />
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your e-mail..."
        className={styles.formInput}
      />
      <input
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="Enter your password"
        className={styles.formInput}
      />
      <button type="submit" className={styles.btn}>
        Register
      </button>
    </form>
  );
};

export default RegisterPage;
