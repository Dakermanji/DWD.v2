-- sql/1_users.sql
CREATE TABLE
    users (
        id UUID PRIMARY KEY,
        email TEXT NOT NULL,
        username TEXT NULL,
        username_normalized TEXT NULL,
        hashed_password TEXT NULL,
        google_id TEXT NULL,
        github_id TEXT NULL,
        is_verified BOOLEAN NOT NULL DEFAULT FALSE,
        signup_token_hash TEXT NULL,
        signup_token_expires_at TIMESTAMPTZ NULL,
        reset_token_hash TEXT NULL,
        reset_token_expires_at TIMESTAMPTZ NULL,
        token_request_count INTEGER NOT NULL DEFAULT 0,
        last_login_at TIMESTAMPTZ NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW (),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW ()
    );

CREATE UNIQUE INDEX uniq_users_email ON users (email);

CREATE UNIQUE INDEX uniq_users_username_normalized ON users (username_normalized)
WHERE
    username_normalized IS NOT NULL;

CREATE UNIQUE INDEX uniq_users_google_id ON users (google_id)
WHERE
    google_id IS NOT NULL;

CREATE UNIQUE INDEX uniq_users_github_id ON users (github_id)
WHERE
    github_id IS NOT NULL;

CREATE INDEX idx_users_last_login ON users (last_login_at);

CREATE INDEX idx_users_signup_token_expires_at ON users (signup_token_expires_at);

CREATE INDEX idx_users_reset_token_expires_at ON users (reset_token_expires_at);
