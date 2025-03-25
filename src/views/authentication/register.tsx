import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from '../../context/AuthContext'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import Lottie from 'react-lottie';
import animationData from '../../lotties/success.json';
import animationData2 from '../../lotties/failed.json';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const {registerUser} = useAuth();
    const [status, setStatus] = useState('');
    const [dialogMessage, setDialogMessage] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleRegister = async () => {
        setIsLoading(true);
        try{
            const response = await registerUser(name, email, password);
            setStatus(response.success);

            if (response.success) {
                setDialogMessage("User registered!");
            } else {
                let errorMessage = response.message || "Failed to register";
    
                if (response.errors) {
                    console.log("Validation Errors:", response.errors); // Debugging
                    errorMessage += "\n" + Object.values(response.errors).flat().join("\n");
                }

                setDialogMessage(errorMessage);
            }

            setDialogOpen(true);

        } catch (error: any) {
            console.error("Registration failed:", error);
            
            const apiError = error?.response?.data;
            let errorMessage = apiError?.message || "An unexpected error occurred.";

            const validationMessages = apiError?.errors
                ? Object.values(apiError.errors).flat().join("\n")
                : "";

            setDialogMessage(errorMessage + (validationMessages ? `\n${validationMessages}` : ""));
            setDialogOpen(true);
        } finally { 
            setDialogOpen(true);
            setIsLoading(false);
        }
        
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        
        if (status) {
            navigate('/auth/login');
        }
    };

    //lottie animation
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="splash-bg flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 m-10 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full mt-4 p-3 border rounded-lg"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mt-4 p-3 border rounded-lg"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mt-4 p-3 border rounded-lg"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className={isLoading ? 'w-full mt-6 bg-blue-300 text-white p-3 rounded-lg' : "w-full mt-6 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700" }
                    onClick={handleRegister}
                    disabled={isLoading}
                >
                    Register
                </button>

                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to="/auth/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>

            <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="xs" fullWidth>
                <DialogTitle 
                    className={`${status ? "text-green-600" : "text-red-600"} text-center text-3xl font-extrabold mt-3`}
                >
                    {status ? "Success!" : "Oh no!"}
                </DialogTitle>
                <DialogContent className="flex flex-col items-center">
                    <Lottie options={status ? defaultOptions : defaultOptions2} height={100} width={100} />
                    <p className="mt-4 text-center md:text-base sm:text-base">{dialogMessage}</p>
                </DialogContent>
                <DialogActions className="flex justify-center w-full">
                    <div className="w-full flex justify-center">
                        <Button onClick={handleCloseDialog} color="primary" variant="outlined">
                            {status ? "Done" : "Try again"}
                        </Button>
                    </div>
                </DialogActions>
            </Dialog>

        </div>
    );
};

export default Register;
