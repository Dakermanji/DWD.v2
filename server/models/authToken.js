//! server/models/authToken.js

import db from '../config/db.js';

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
