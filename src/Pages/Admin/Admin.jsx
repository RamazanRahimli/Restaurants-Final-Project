import React, { useState, useEffect } from 'react';
import { useGetAllUsersQuery } from '../../redux/slices/usersApiSlice';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Admin.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Admin = () => {
  const { data: users, isLoading, isError } = useGetAllUsersQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeUsersCount, setActiveUsersCount] = useState(0);
  const [newUsersTodayCount, setNewUsersTodayCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [sortBy, setSortBy] = useState('name'); // 'name', 'surname', 'email', 'createdAt', 'updatedAt'

  useEffect(() => {
    if (users) {
      const activeUsers = users.filter(user => user.isActive);
      setActiveUsersCount(activeUsers.length);

      const today = new Date();
      const newUsersToday = users.filter(user => {
        const userCreatedAt = new Date(user.createdAt);
        return userCreatedAt.getDate() === today.getDate() &&
          userCreatedAt.getMonth() === today.getMonth() &&
          userCreatedAt.getFullYear() === today.getFullYear();
      });
      setNewUsersTodayCount(newUsersToday.length);

      // Apply search and filters
      let filtered = users.filter(user => {
        const fullName = `${user.name} ${user.surname}`.toLowerCase();
        const email = user.email.toLowerCase();
        const searchTermLower = searchTerm.toLowerCase();
        return (
          fullName.includes(searchTermLower) ||
          email.includes(searchTermLower)
        );
      });

      // Sort filtered users based on sortBy and sortOrder
      filtered.sort((a, b) => {
        const fieldA = sortBy === 'createdAt' || sortBy === 'updatedAt' ? new Date(a[sortBy]) : a[sortBy];
        const fieldB = sortBy === 'createdAt' || sortBy === 'updatedAt' ? new Date(b[sortBy]) : b[sortBy];
        if (sortOrder === 'asc') {
          return fieldA > fieldB ? 1 : -1;
        } else {
          return fieldA < fieldB ? 1 : -1;
        }
      });

      setFilteredUsers(filtered);
    }
  }, [users, searchTerm, sortBy, sortOrder]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching users.</div>;
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <ToastContainer />
        <div className={styles.main}>
          <div className={styles.proContainer}>
            <div className={styles.headBox}>
              <button className={styles.btnhead} onClick={() => navigate('/')}>
                Back<FontAwesomeIcon icon={faArrowLeft} style={{ marginLeft: "7px" }} />
              </button>
              <button className={styles.Btn} onClick={handleLogout}>
                Logout
              </button>
            </div>
            <h1>Admin Panel </h1>
            <div className={styles.summary}>
              {users && <p>Total Users: {users.length}</p>}
              <p>New Users Today: {newUsersTodayCount}</p>
              <p>Active Users: {activeUsersCount}</p>
            </div>
            <div className={styles.filterContainer}>
              <input
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="surname">Surname</option>
                <option value="email">Email</option>
                <option value="createdAt">Created At</option>
                <option value="updatedAt">Updated At</option>
              </select>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
            </div>
            <div className={styles.userList}>
              {filteredUsers.map((user) => (
                <div key={user._id} className={styles.user}>
                  <h3>Name: {user.name}</h3>
                  <h3>Surname: {user.surname}</h3>
                  <p>User id: {user._id}</p>
                  <p>Email: {user.email}</p>
                  <p>isAdmin: {user.isAdmin ? 'Yes' : 'No'}</p>
                  <p>Created At: {new Date(user.createdAt).toLocaleString()}</p>
                  <p>Updated At: {new Date(user.updatedAt).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
