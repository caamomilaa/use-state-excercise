import { v4 } from 'uuid';
import { USERS } from '../constants/users';
import styles from './users-list.module.css';

const usersCopy = [...USERS];
const UsersList = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>Listado de usuarios</h1>
				<div className={styles.filters}>
					<input className={styles.searchbar} type='text' />
					<div className={styles.active}>
						<p>Solo activos</p>
						<input onClick={filterStatus} type='checkbox' />
					</div>
					<select className={styles.dropdown}>
						<option value='default'>Por Defecto</option>
						<option value='name'>Por Nombre</option>
					</select>
				</div>
			</div>
			<article className={styles.cardcontainer}>
				{usersCopy.map(user => (
					<div key={v4()} className={styles.card}>
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

const filterStatus = () => {
	let usersToRender = usersCopy;

	usersToRender.filter(user => {
		if (user.active) {
			usersToRender = user.active;
			console.log('ta bien');
		}
	});

	// if (usersToRender.active) {
	// 	usersToRender.filter(user => user.active);
	// 	console.log('activo');
	// } else {
	// 	usersToRender.filter(user => !user.active);
	// }
};

export default UsersList;
