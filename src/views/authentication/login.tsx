import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import {useAuth} from '../../context/AuthContext'

const CLIENT_ID = "your-google-client-id";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { loginUser, googleLogin } = useAuth();

    const handleLogin = async () => {
        const response = await loginUser(email, password);
        console.log("Login Success:", response.data);
        navigate("/dashboard");
    };

    const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
        if (credentialResponse.credential) {
            console.log("Google Response:", credentialResponse);
            googleLogin();
        } else {
            console.log("Google login failed, no credential received");
        }
    };

    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <div className="splash-bg flex min-h-screen items-center justify-center bg-gray-100">
                <div className="w-ful max-w-md bg-white p-8 m-10 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full mt-4 p-3 border rounded-lg"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full mt-4 p-3 border rounded-lg"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        className="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    
                    <p className="mt-4 mb-4 text-center text-gray-600">or</p>

                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={() => console.log("Google Login Failed")}
                    />

                    <p className="mt-4 text-center text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/auth/register" className="text-blue-600 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
