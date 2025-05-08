import { v4 } from 'uuid';
import { USERS } from '../constants/users';
import styles from './users-list.module.css';

const UsersList = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>Listado de usuarios</h1>
				<div className={styles.filters}>
					<input className={styles.searchbar} type='text' />
					<div className={styles.active}>
						<p>Solo activos</p>
						<input type='checkbox' />
					</div>
					<select className={styles.dropdown}>
						<option value='default'>Por Defecto</option>
						<option value='name'>Por Nombre</option>
					</select>
				</div>
			</div>
			<article className={styles.cardcontainer}>
				{USERS.map(user => (
					<div key={v4()} className={styles.card}>
						<div className={styles.profile}>
							<img className={styles.img} src={user.profileImage} alt='' />
							<div>
								<p className={styles.textbold}>{user.name}</p>
								<span className={styles.text}>@{user.username}</span>
							</div>
						</div>
						<div className={styles.details}>
							<span>Activo</span>
							{/* hay que cambiar la palabra activo y su color, confomre este activo o no */}
							<button>Ver detalles</button>
						</div>
					</div>
				))}
			</article>
		</div>
	);
};

export default UsersList;
