import React, { useState } from 'react';

export default function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);

    const onClickBtn = () => {
        setDisabled(true);
    };

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <label>
                    이메일
                    <input
                        type="email"
                        placeholder="user@test.com"
                        value={email}
                        onChange={({ target: { value } }) => setEmail(value)}
                    />
                </label>
                <label>
                    비밀번호
                    <input
                        type="password"
                        value={password}
                        onChange={({ target: { value } }) => setPassword(value)}
                    />
                </label>
                <button onClick={onClickBtn} disabled={disabled}>
                    버튼
                </button>
                <button disabled={!email || !password}>로그인</button>
            </form>
        </>
    );
}
