import React, { useState, useEffect } from 'react';
import { useStateValue } from 'State/AppProvider';
import { graphql } from 'react-apollo';
import query from 'Queries/CurrentUser';

const AuthForm = (props) => {
  const [{ modal }, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const clearModal = () => {
      if (props.data.currentUser !== null) {
        dispatch({
          type: 'CLEAR_MODAL',
          showModal: false,
          form: ''
        });
      }
    }
    clearModal()
  }, [props.data.currentUser]);

  const { onSubmit } = props;

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit({email, password});
  }

  return (
    <div className="row">
      <form className="col s12" onSubmit={submitForm}>
        <div className="input-field">
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="errors">
          {props.errors.map(error => <div key={error} style={{ color: 'red' }}>{error}</div>)}
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
    
  );
};

export default graphql(query)(AuthForm);