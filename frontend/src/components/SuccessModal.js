import React from 'react';
// Removed framer-motion
import { FiCheckCircle, FiX } from 'react-icons/fi';

const SuccessModal = ({ isOpen, onClose, title, message }) => {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4 anim-fade-in"
                    onClick={onClose}
                >
                    <div
                        className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl anim-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        >
                            <FiX className="w-5 h-5" />
                        </button>

                        {/* Success Icon */}
                        <div className="text-center mb-6">
                            <div
                                className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 anim-scale-in"
                            >
                                <FiCheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                            </div>

                            <h2
                                className="text-2xl font-bold text-gray-900 dark:text-white mb-2 anim-fade-in-up animation-delay-200"
                            >
                                {title || 'Success!'}
                            </h2>

                            <p
                                className="text-gray-600 dark:text-gray-400 leading-relaxed anim-fade-in-up animation-delay-400"
                            >
                                {message || 'Your request has been processed successfully.'}
                            </p>
                        </div>

                        {/* Action Button */}
                        <button
                            onClick={onClose}
                            className="w-full bg-gradient-to-r from-[#37b7c3] to-[#071952] text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 anim-fade-in-up animation-delay-600"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SuccessModal;
