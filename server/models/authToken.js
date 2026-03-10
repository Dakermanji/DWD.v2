//! server/models/auth_token.js

import db from '../config/database.js';

export const createAuthToken = async ({
	userId,
	tokenHash,
	type,
	expiresAt,
}) => {
	const result = await db.query(
		`
        INSERT INTO auth_tokens (
            user_id,
            token_hash,
            type,
            expires_at
        )
        VALUES ($1, $2, $3, $4)
        RETURNING id, user_id, type, expires_at
        `,
		[userId, tokenHash, type, expiresAt],
	);

	return result.rows[0];
};
