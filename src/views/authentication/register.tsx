import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useAuth} from '../../context/AuthContext'
import Modal from 'react-modal';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {registerUser} = useAuth();

    const handleRegister = async () => {
        setIsLoading(true);
        try{
            const response = await registerUser(name, email, password);
            console.log("Register Success:", response.data);
            setIsModalOpen(true); 
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setIsLoading(false);
        }
        
    };

    const closeModal = () => {
        setIsModalOpen(false);
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

            <Modal isOpen={isModalOpen} onRequestClose={closeModal} ariaHideApp={false}>
                <div className="modal-content">
                    <h2>User Successfuly Registered!</h2>
                    <video width="400" controls>
                        <source src="public\success.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                    <button onClick={closeModal}>Close</button>
                </div>
            </Modal>

        </div>
    );
};

export default Register;
