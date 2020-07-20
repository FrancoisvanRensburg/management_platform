import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const Alert2 = () => {
  const alerts = useSelector((store) => store.alert);
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => <Notification key={alert.id} alert={alert} />)
  );
};

const Notification = ({ alert }) => {
  toast.error(alert.msg, { position: toast.BOTTOM_CENTER });

  return <ToastContainer />;
};

export default Alert2;
