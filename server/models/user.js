//! server/models/user.js

import db from '../config/database.js';

export const findUserByEmail = async (email) => {
	const result = await db.query(
		`
        SELECT id, email, username, hashed_password
        FROM users
        WHERE email = $1
        LIMIT 1
        `,
		[email],
	);

	return result.rows[0] || null;
};

export const createPendingUser = async (email) => {
	const result = await db.query(
		`
        INSERT INTO users (email)
        VALUES ($1)
        RETURNING id, email
        `,
		[email],
	);

	return result.rows[0];
};
