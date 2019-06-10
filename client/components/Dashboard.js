import React, { useState } from 'react';
import Modal from 'Components/Modal';
import LoginForm from 'Components/LoginForm';
import SignUpForm from 'Components/SignUpForm';
import { useStateValue } from 'State/AppProvider';

const Dashboard = () => {
  const [state, dispatch] = useStateValue();

  const modal = state.modal.showModal ? (
    <Modal>
      <div className="modal-box">
          {state.modal.form === 'signup' && <SignUpForm />}
          {state.modal.form === 'login' && <LoginForm />}
      </div>
    </Modal>
  ) : null;

  return (
    <div style={{ minHeight: '1000px'}}>
      <h1>DASH!!!</h1>
      {modal}
    </div>
  );
};

export default Dashboard;