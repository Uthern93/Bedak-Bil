import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {useAuth} from '../../context/AuthContext'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerUser] = useAuth();

    const handleRegister = async () => {
        const response = await registerUser(name, email, password);
        console.log("Register Success:", response.data);
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
                    className="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                    onClick={handleRegister}
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
        </div>
    );
};

export default Register;
