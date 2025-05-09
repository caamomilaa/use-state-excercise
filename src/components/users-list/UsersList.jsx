import { USERS } from '../constants/users';
import styles from './users-list.module.css';
import { useState } from 'react';

// const usersCopy = [...USERS];
const UsersList = () => {
  const [onlyActive, setOnlyActive] = useState(false);
  const filteredUsers = filterUserByActive(onlyActive);

  const [search, setSearch] = useState('');
  const filteredSearch = filterUsersByName(filteredUsers, search);

  const [sortBy, setSortBy] = useState('default');
  const sortSearch = sortBySelection(filteredSearch, sortBy);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Listado de usuarios</h1>
        <div className={styles.filters}>
          <input
            onChange={event => setSearch(event.target.value)}
            className={styles.searchbar}
            type='text'
          />
          <div className={styles.active}>
            <p>Solo activos</p>
            <input
              onChange={() => setOnlyActive(!onlyActive)}
              type='checkbox'
            />
          </div>
          <select
            onChange={event => setSortBy(event.target.value)}
            className={styles.dropdown}
          >
            <option value='default'>Por Defecto</option>
            <option value='name'>Por Nombre</option>
          </select>
        </div>
      </div>
      <article className={styles.cardcontainer}>
        {sortSearch.map(user => (
          <div key={user.userId} className={styles.card}>
            <div className={styles.profile}>
              <img className={styles.img} src={user.profileImage} alt='' />
              <div>
                <p className={styles.textbold}>{user.name}</p>
                <span className={styles.text}>@{user.username}</span>
              </div>
            </div>
            <div className={styles.details}>
              <span>{user.active ? 'Activo' : 'Inactivo'}</span>
              {/* hay que cambiar la palabra activo y su color, confomre este activo o no */}
              <button>Ver detalles</button>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
};

const filterUserByActive = onlyActive => {
  const filteredUsers = onlyActive ? USERS.filter(user => user.active) : USERS;
  return filteredUsers;
};

const filterUsersByName = (filterUserByActive, search) => {
  const filteredUsers = search
    ? filterUserByActive.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    : filterUserByActive;
  return filteredUsers;
};

const sortBySelection = (filteredSearch, sortBy) => {
  const filterCopy = [...filteredSearch];

  const sortedUsers =
    sortBy === 'name'
      ? filterCopy.sort((a, b) => a.name.localeCompare(b.name))
      : filteredSearch;

  return sortedUsers;
};
export default UsersList;
