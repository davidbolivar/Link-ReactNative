import * as SQlite from "expo-sqlite";

const db = SQlite.openDatabase("messages.db");

export const db_init = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, method TEXT NOT NULL, target TEXT NOT NULL, message TEXT NOT NULL, location TEXT, created_at DATETIME NOT NULL)",
				[],
				() => {
					resolve();
				},
				(_, error) => {
					reject(error);
				}
			);
		});
	});
	return promise;
};

export const insertMessageToDB = ({ method, target, message, location }) => {
	console.log("Antes de insertar");

	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"INSERT INTO messages (method, target, message, location, created_at) VALUES (?, ?, ?, ?, datetime('now'))",
				[method, target, message, JSON.stringify(location)],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});

	return promise;
};

export const deleteMessageFromDB = (id) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			// console.log("Borrada una lista con id: ", id);
			tx.executeSql(
				"DELETE FROM messages WHERE id = ?",
				[id],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});
	return promise;
};

export const selectAllMessagesFromDB = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM messages",
				[],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});
	return promise;
};
