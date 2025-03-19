import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import {useAuth} from '../../context/AuthContext'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const CLIENT_ID = "your-google-client-id";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { loginUser, googleLogin } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [dialogMessage, setDialogMessage] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const response = await loginUser(email, password);
            setStatus(response.success);

            if (response.success) {
                setDialogMessage("Login successful!");
            } else {
                setDialogMessage(response.message || "Login failed.");
            }
            setDialogOpen(true);
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
        if (credentialResponse.credential) {
            console.log("Google Response:", credentialResponse);
            googleLogin();
        } else {
            console.log("Google login failed, no credential received");
        }
    };

    const handleCloseDialog = () =>
    {
        setDialogOpen(false);
        navigate('/dashboard')
    }

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
                        className={isLoading ? 'w-full mt-6 bg-blue-300 text-white p-3 rounded-lg' : "w-full mt-6 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700" }
                        onClick={handleLogin}
                        disabled={isLoading}
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

            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>{status ? "Success" : "Error"}</DialogTitle>
            <DialogContent>
                {status ? (
                    <img src="public/success.gif" alt="Success" />
                ) : (
                    <img src="public/success.gif" alt="Failure" />
                )}
                <p>{dialogMessage}</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>

        </GoogleOAuthProvider>
    );
};

export default Login;
