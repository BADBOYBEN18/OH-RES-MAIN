// src/hooks/useAuthForm.ts
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

interface UseAuthFormProps {
  route: string;
  method: 'login' | 'register';
}

export const useAuthForm = ({ route, method }: UseAuthFormProps) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // New
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload =
        method === 'login'
          ? { username, password }
          : { username, email, password }; // Include email for register

      const res = await api.post(route, payload);

      if (method === 'login') {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate('/');
      } else {
        navigate('/login');
      }
    } catch (error) {
      alert('An error occurred: ' + error);
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleSubmit,
  };
};
