import React, { useState } from 'react';

const sections = [
    { id: 'login', label: 'Login Details' },
    { id: 'security', label: 'Security +' },
    { id: 'incomeTax', label: 'Income-Tax Login' },
    { id: 'invoice', label: 'Invoice Summary' },
];

const initialData = {
    username: 'Google:pchourasia620@gmail.com',
    password: '',
    email: 'pchourasia620@gmail.com',
    subscribe: true,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    itrLoginId: '',
    itrPassword: '',
    invoiceName: '',
    invoiceAddress: '',
    invoiceGst: '',
};

export default function Settings() {
    const [activeSection, setActiveSection] = useState('login');
    const [form, setForm] = useState(initialData);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Settings updated successfully.');
        // TODO: connect this to your backend / state management
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'login':
                return (
                    <form onSubmit={handleSubmit} className="settings-form">
                        <div className="row">
                            <label>Username</label>
                            <input type="text" name="username" value={form.username} readOnly />
                        </div>
                        <div className="row">
                            <label>Password</label>
                            <input type="password" name="password" value={form.password} onChange={handleChange} />
                        </div>
                        <div className="row">
                            <label>Email</label>
                            <input type="email" name="email" value={form.email} onChange={handleChange} />
                        </div>
                        <div className="row checkbox-row">
                            <label>
                                <input
                                    type="checkbox"
                                    name="subscribe"
                                    checked={form.subscribe}
                                    onChange={handleChange}
                                />
                                I wish to subscribe for tax related sms alerts and newsletters
                            </label>
                        </div>
                        <button type="submit">Update</button>
                    </form>
                );
            case 'security':
                return (
                    <form onSubmit={handleSubmit} className="settings-form">
                        <div className="row">
                            <label>Current Password</label>
                            <input
                                type="password"
                                name="currentPassword"
                                value={form.currentPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row">
                            <label>New Password</label>
                            <input
                                type="password"
                                name="newPassword"
                                value={form.newPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Change Password</button>
                    </form>
                );
            case 'incomeTax':
                return (
                    <form onSubmit={handleSubmit} className="settings-form">
                        <div className="row">
                            <label>Income-Tax Login ID</label>
                            <input
                                type="text"
                                name="itrLoginId"
                                value={form.itrLoginId}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row">
                            <label>Income-Tax Password</label>
                            <input
                                type="password"
                                name="itrPassword"
                                value={form.itrPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Save ITR Login</button>
                    </form>
                );
            case 'invoice':
                return (
                    <form onSubmit={handleSubmit} className="settings-form">
                        <div className="row">
                            <label>Invoice Name</label>
                            <input
                                type="text"
                                name="invoiceName"
                                value={form.invoiceName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row">
                            <label>Invoice Address</label>
                            <textarea
                                name="invoiceAddress"
                                value={form.invoiceAddress}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row">
                            <label>GST Number</label>
                            <input
                                type="text"
                                name="invoiceGst"
                                value={form.invoiceGst}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Save Invoice Summary</button>
                    </form>
                );
            default:
                return null;
        }
    };

    return (
        <div className="settings-page">
            <h1>Settings</h1>
            <div className="settings-tabs">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        type="button"
                        className={activeSection === section.id ? 'active' : ''}
                        onClick={() => setActiveSection(section.id)}
                    >
                        {section.label}
                    </button>
                ))}
            </div>

            <div className="settings-panel">
                {renderSection()}
                {message && <div className="settings-message">{message}</div>}
            </div>
        </div>
    );
}