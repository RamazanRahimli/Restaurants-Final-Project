import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../redux/slices/usersApiSlice';
import { toast } from 'react-toastify';
import styles from './RegisterPage.module.scss'; // SCSS dosyasını içe aktarıyoruz
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(formData);
      if (response.error) {
        throw new Error(response.error.message);
      }
      console.log('Kayıt başarılı:', response.data);
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      toast.success('Kayıt başarılı!', { position: 'top-right' });
      alert('Kayıt başarılı!');
      navigate('/');
    } catch (error) {
      console.error('Kayıt hatası:', error.message);
      toast.error('Kayıt sırasında bir hata oluştu.', { position: 'top-right' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
        <Header/>
    <div className={styles.reggister}>
      <div className={styles.container}> {/* SCSS'de tanımlanan class'ı ekliyoruz */}
        <h2>Kayıt Ol</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Kullanıcı Adı:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <br />
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
            Kayıt Ol
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default RegisterPage;
