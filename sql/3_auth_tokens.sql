-- sql/3_auth_tokens.sql
CREATE TABLE
    auth_tokens (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        user_id UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        token_hash TEXT NOT NULL,
        type TEXT NOT NULL,
        expires_at TIMESTAMPTZ NOT NULL,
        used_at TIMESTAMPTZ NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW ()
    );

CREATE INDEX idx_auth_tokens_hash ON auth_tokens (token_hash);

CREATE INDEX idx_auth_tokens_user ON auth_tokens (user_id);
