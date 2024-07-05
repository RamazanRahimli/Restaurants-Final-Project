import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/slices/usersApiSlice';
import { toast } from 'react-toastify';
import styles from './LoginPage.module.scss'; // SCSS dosyasını içe aktarıyoruz
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      if (response.error) {
        throw new Error(response.error.message);
      }
      console.log('Giriş başarılı:', response.data);
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      toast.success('Giriş başarılı!', { position: 'top-right' });
      alert('Giriş başarılı!');
      navigate('/');
    } catch (error) {
      console.error('Giriş hatası:', error.message);
      toast.error('Giriş sırasında bir hata oluştu.', { position: 'top-right' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Header />
      <div className={styles.login}>
        <div className={styles.container}>
          <h2>Giriş Yap</h2>
          <form onSubmit={handleSubmit}>
            <label>
              E-posta:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Şifre:
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <br />
            <button type="submit" disabled={isLoading}>
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
