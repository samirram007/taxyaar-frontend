import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Check } from 'lucide-react';

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

    const handleSwitchChange = (name, value) => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Settings updated successfully.');
        setTimeout(() => setMessage(''), 5000);
        // TODO: connect this to your backend / state management
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'login':
                return (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                name="username"
                                value={form.username}
                                readOnly
                                className="bg-muted"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter new password"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex items-center space-x-3">
                            <Switch
                                id="subscribe"
                                name="subscribe"
                                checked={form.subscribe}
                                onCheckedChange={(checked) => handleSwitchChange('subscribe', checked)}
                            />
                            <Label htmlFor="subscribe" className="font-normal cursor-pointer">
                                I wish to subscribe for tax related SMS alerts and newsletters
                            </Label>
                        </div>
                        <Button type="submit" className="w-full">Update</Button>
                    </form>
                );
            case 'security':
                return (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <Input
                                id="currentPassword"
                                type="password"
                                name="currentPassword"
                                value={form.currentPassword}
                                onChange={handleChange}
                                placeholder="Enter current password"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input
                                id="newPassword"
                                type="password"
                                name="newPassword"
                                value={form.newPassword}
                                onChange={handleChange}
                                placeholder="Enter new password"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm new password"
                            />
                        </div>
                        <Button type="submit" className="w-full">Change Password</Button>
                    </form>
                );
            case 'incomeTax':
                return (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="itrLoginId">Income-Tax Login ID</Label>
                            <Input
                                id="itrLoginId"
                                type="text"
                                name="itrLoginId"
                                value={form.itrLoginId}
                                onChange={handleChange}
                                placeholder="Enter your ITR login ID"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="itrPassword">Income-Tax Password</Label>
                            <Input
                                id="itrPassword"
                                type="password"
                                name="itrPassword"
                                value={form.itrPassword}
                                onChange={handleChange}
                                placeholder="Enter your ITR password"
                            />
                        </div>
                        <Button type="submit" className="w-full">Save ITR Login</Button>
                    </form>
                );
            case 'invoice':
                return (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="invoiceName">Invoice Name</Label>
                            <Input
                                id="invoiceName"
                                type="text"
                                name="invoiceName"
                                value={form.invoiceName}
                                onChange={handleChange}
                                placeholder="Enter your business name"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="invoiceAddress">Invoice Address</Label>
                            <textarea
                                id="invoiceAddress"
                                name="invoiceAddress"
                                value={form.invoiceAddress}
                                onChange={handleChange}
                                placeholder="Enter your business address"
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="invoiceGst">GST Number</Label>
                            <Input
                                id="invoiceGst"
                                type="text"
                                name="invoiceGst"
                                value={form.invoiceGst}
                                onChange={handleChange}
                                placeholder="Enter your GST number"
                            />
                        </div>
                        <Button type="submit" className="w-full">Save Invoice Summary</Button>
                    </form>
                );
            default:
                return null;
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground mt-2">Manage your account and preferences</p>
            </div>

            <div className="flex flex-wrap gap-2 border-b">
                {sections.map((section) => (
                    <Button
                        key={section.id}
                        variant={activeSection === section.id ? 'default' : 'ghost'}
                        onClick={() => setActiveSection(section.id)}
                        className="rounded-b-none"
                    >
                        {section.label}
                    </Button>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>{sections.find(s => s.id === activeSection)?.label}</CardTitle>
                    <CardDescription>
                        {activeSection === 'login' && 'Update your login credentials'}
                        {activeSection === 'security' && 'Change your password to keep your account secure'}
                        {activeSection === 'incomeTax' && 'Link your Income-Tax filing account'}
                        {activeSection === 'invoice' && 'Configure your invoice details'}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {renderSection()}
                    {message && (
                        <Alert className="mt-6 border-green-200 bg-green-50">
                            <Check className="h-4 w-4 text-green-600" />
                            <AlertDescription className="text-green-800">
                                {message}
                            </AlertDescription>
                        </Alert>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}