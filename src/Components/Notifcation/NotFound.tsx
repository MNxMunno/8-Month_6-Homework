import React, { useEffect } from "react";
import "./NotFound.scss";

interface NotificationProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const NotFound: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className={`NotFound ${type}`}>{message}</div>;
};

export default NotFound;
