-- sql/3_auth_tokens.sql
CREATE TABLE
    auth_tokens (
        user_id UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        token_hash TEXT NOT NULL,
        type TEXT NOT NULL,
        expires_at TIMESTAMPTZ NOT NULL,
        PRIMARY KEY (user_id, type),
        UNIQUE (token_hash)
    );

CREATE INDEX idx_auth_tokens_user_id ON auth_tokens (user_id);
