import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';
import sinon from 'sinon';
import { mount } from 'enzyme';

describe('<LoginForm />', () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(
        <LoginForm onSubmit={() => null} />,
    );
    it('renders email input', () => {
        const email = getByPlaceholderText(/@test.com$/);
        expect(email).toBeInTheDocument();
    });
    it('password input has not value', () => {
        const password = getByLabelText('비밀번호');
        expect(password).toHaveValue('');
    });
    it('enables button when both email and password are entered', () => {
        const button = getByText('로그인');
        const email = getByLabelText('이메일');
        const password = getByLabelText('비밀번호');
        expect(button).toBeDisabled();
        fireEvent.change(email, { target: { value: 'user@test.com' } });
        fireEvent.change(password, { target: { value: 'Test1234' } });
        expect(button).toBeEnabled();
    });
    it('버튼 on click', () => {
        const btn = getByText('버튼');
        fireEvent.click(btn);
        expect(btn).toBe(true);
    });
});
