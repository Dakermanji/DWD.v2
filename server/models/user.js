//! server/models/user.js

import db from '../config/database.js';

export const findUserByEmail = async (email) => {
	const query = `
        SELECT id, email, username, hashed_password
        FROM users
        WHERE email = $1
        LIMIT 1
        `;
	const result = await db.query(query[email]);

	return result.rows[0] || null;
};

export const createPendingUser = async (email) => {
	const query = `
        INSERT INTO users (email)
        VALUES ($1)
        RETURNING id, email
        `;
	const result = await db.query(query, [email]);

	return result.rows[0];
};

export const verifyUser = async (userId) => {
	const query = `
        UPDATE users
        SET is_verified = TRUE
        WHERE id = $1
        `;

	await db.query(query, [userId]);
};
