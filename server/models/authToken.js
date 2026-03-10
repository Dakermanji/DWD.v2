//! server/models/authToken.js

import db from '../config/database.js';

export const createAuthToken = async ({
	userId,
	tokenHash,
	type,
	expiresAt,
}) => {
	const query = `
        INSERT INTO auth_tokens (user_id, token_hash, type, expires_at)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (user_id, type)
        DO UPDATE SET
            token_hash = EXCLUDED.token_hash,
            expires_at = EXCLUDED.expires_at
    `;

	await db.query(query, [userId, tokenHash, type, expiresAt]);
};

export const findAuthTokenByHashAndType = async (tokenHash, type) => {
	const query = `
        SELECT user_id, expires_at
        FROM auth_tokens
        WHERE token_hash = $1
        AND type = $2
        LIMIT 1
    `;

	const result = await db.query(query, [tokenHash, type]);

	return result.rows[0];
};

export const deleteAuthToken = async (userId, type) => {
	const query = `
        DELETE FROM auth_tokens
        WHERE user_id = $1
        AND type = $2
    `;

	await db.query(query, [userId, type]);
};
