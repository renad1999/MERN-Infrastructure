import SignUpForm  from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

export default function AuthPage({ setUser }) {
    return(
    <main>
        <h1>AuthPage</h1>
            <SignUpForm setUser={setUser} />
            <LoginForm />
    </main>
    );
}