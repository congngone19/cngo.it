import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import img from "../assets/cn_logo.png"

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: ""
    });
    const navigate = useNavigate();
    var handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    var contactUs = async function (e) {
        e.preventDefault();
        try {
            var config = {
                method: 'post',
                url: 'https://og-19.online/api/learning_v1',
                // headers: {
                //     Authorization: `Bearer your-access-token`,
                //     'Content-Type': 'application/json',
                // },
                data: formData
            };
            var response = await axios.request(config);
            if (response) {
                navigate("/")
            }
        } catch (error) {
            console.error('POST error:', error);
        }
    }
    return (
        <div id="contact-us" className="max-h-screen overflow-hidden bg-white py-16 px-4 dark:bg-slate-900 sm:px-6 lg:px-8 lg:py-24">
            <div className="relative mx-auto max-w-xl">
                <svg className="absolute left-full translate-x-1/2 transform" width="404" height="404" fill="none"
                    viewBox="0 0 404 404" aria-hidden="true">
                    <defs>
                        <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20"
                            patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-gray-200 dark:text-slate-600"
                                fill="currentColor"></rect>
                        </pattern>
                    </defs>
                    <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect>
                </svg>
                <svg className="absolute right-full bottom-0 -translate-x-1/2 transform" width="404" height="404" fill="none"
                    viewBox="0 0 404 404" aria-hidden="true">
                    <defs>
                        <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20"
                            patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-gray-200 dark:text-slate-800"
                                fill="currentColor"></rect>
                        </pattern>
                    </defs>
                    <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect>
                </svg>
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl">
                        <a href="/">
                            <img className="w-20 mx-auto" src={img} alt="" /></a>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-slate-400">Chúng tôi sẽ liên hệ lại bạn sau khi nhận được lời nhắn
                        <br />
                        Xin cảm ơn!
                    </p>
                </div>
                <div className="mt-12" onSubmit={contactUs}>
                    <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div className="sm:col-span-2">
                            <label for="name" className="block text-sm font-medium text-gray-700 dark:text-slate-400">Tên liên hệ</label>
                            <div className="mt-1">
                                <input name="name" type="text" id="name" autoComplete="organization" required="" className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label for="email" className="block text-sm font-medium text-gray-700 dark:text-slate-400">Email</label>
                            <div className="mt-1">
                                <input name="email" id="email" required="" type="email" autoComplete="email" className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label for="phone" className="block text-sm font-medium text-gray-700 dark:text-slate-400">Số điện thoại</label>
                            <div className="mt-1">
                                <input name="phone" id="phone" required="" type="phone" autoComplete="phone" className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block text-sm font-medium text-gray-700 dark:text-slate-400">Lời nhắn</label>
                            <div className="mt-1">
                                <textarea required="" name="message" id="message" rows="4" className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex justify-end sm:col-span-2">
                            <button type="submit" className="inline-flex items-center rounded-md px-4 py-2 font-medium focus:outline-none focus-visible:ring focus-visible:ring-sky-500 shadow-sm sm:text-sm transition-colors duration-75 text-sky-500 border border-sky-500 hover:bg-sky-50 active:bg-sky-100 disabled:bg-sky-100 dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
                                onClick={contactUs}
                            >
                                <span>Gửi lời nhắn</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;