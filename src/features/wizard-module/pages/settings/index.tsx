import React, { useState, FormEvent, ChangeEvent, ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Check, Lock, Mail, FileText, CreditCard, LucideIcon } from 'lucide-react';

// Type definitions
type SectionId = 'login' | 'security' | 'incomeTax' | 'invoice';

interface Section {
    id: SectionId;
    label: string;
    icon: LucideIcon;
}

interface FormData {
    username: string;
    password: string;
    email: string;
    subscribe: boolean;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
    itrLoginId: string;
    itrPassword: string;
    invoiceName: string;
    invoiceAddress: string;
    invoiceGst: string;
}

const sections: Section[] = [
    { id: 'login', label: 'Login Details', icon: Mail },
    { id: 'security', label: 'Security +', icon: Lock },
    { id: 'incomeTax', label: 'Income-Tax Login', icon: FileText },
    { id: 'invoice', label: 'Invoice Summary', icon: CreditCard },
];

const initialData: FormData = {
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

export default function Settings(): ReactNode {
    const [activeSection, setActiveSection] = useState<SectionId>('login');
    const [form, setForm] = useState<FormData>(initialData);
    const [message, setMessage] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, type, value } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSwitchChange = (name: keyof FormData, value: boolean): void => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setMessage('Settings updated successfully.');
        setTimeout(() => setMessage(''), 5000);
        // TODO: connect this to your backend / state management
    };

    const getSectionDescription = (): string => {
        switch (activeSection) {
            case 'login':
                return 'Update your login credentials';
            case 'security':
                return 'Change your password to keep your account secure';
            case 'incomeTax':
                return 'Link your Income-Tax filing account';
            case 'invoice':
                return 'Configure your invoice details';
            default:
                return '';
        }
    };

    const renderSection = (): ReactNode => {
        switch (activeSection) {
            case 'login':
                return (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="username" className="font-medium">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                name="username"
                                value={form.username}
                                readOnly
                                className="bg-muted text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="font-medium">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter new password"
                                className="text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="font-medium">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="text-sm"
                            />
                        </div>
                        <div className="flex items-center space-x-3 rounded-lg bg-muted p-3 mt-4">
                            <Switch
                                id="subscribe"
                                name="subscribe"
                                checked={form.subscribe}
                                onCheckedChange={(checked) => handleSwitchChange('subscribe', checked)}
                            />
                            <Label htmlFor="subscribe" className="font-normal cursor-pointer text-sm">
                                I wish to subscribe for tax related SMS alerts and newsletters
                            </Label>
                        </div>
                        <Button type="submit" className="w-full mt-6">Update</Button>
                    </form>
                );
            case 'security':
                return (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="currentPassword" className="font-medium">Current Password</Label>
                            <Input
                                id="currentPassword"
                                type="password"
                                name="currentPassword"
                                value={form.currentPassword}
                                onChange={handleChange}
                                placeholder="Enter current password"
                                className="text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="newPassword" className="font-medium">New Password</Label>
                            <Input
                                id="newPassword"
                                type="password"
                                name="newPassword"
                                value={form.newPassword}
                                onChange={handleChange}
                                placeholder="Enter new password"
                                className="text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword" className="font-medium">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm new password"
                                className="text-sm"
                            />
                        </div>
                        <Button type="submit" className="w-full mt-6">Change Password</Button>
                    </form>
                );
            case 'incomeTax':
                return (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="itrLoginId" className="font-medium">Income-Tax Login ID</Label>
                            <Input
                                id="itrLoginId"
                                type="text"
                                name="itrLoginId"
                                value={form.itrLoginId}
                                onChange={handleChange}
                                placeholder="Enter your ITR login ID"
                                className="text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="itrPassword" className="font-medium">Income-Tax Password</Label>
                            <Input
                                id="itrPassword"
                                type="password"
                                name="itrPassword"
                                value={form.itrPassword}
                                onChange={handleChange}
                                placeholder="Enter your ITR password"
                                className="text-sm"
                            />
                        </div>
                        <Button type="submit" className="w-full mt-6">Save ITR Login</Button>
                    </form>
                );
            case 'invoice':
                return (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="invoiceName" className="font-medium">Invoice Name</Label>
                            <Input
                                id="invoiceName"
                                type="text"
                                name="invoiceName"
                                value={form.invoiceName}
                                onChange={handleChange}
                                placeholder="Enter your business name"
                                className="text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="invoiceAddress" className="font-medium">Invoice Address</Label>
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
                            <Label htmlFor="invoiceGst" className="font-medium">GST Number</Label>
                            <Input
                                id="invoiceGst"
                                type="text"
                                name="invoiceGst"
                                value={form.invoiceGst}
                                onChange={handleChange}
                                placeholder="Enter your GST number"
                                className="text-sm"
                            />
                        </div>
                        <Button type="submit" className="w-full mt-6">Save Invoice Summary</Button>
                    </form>
                );
            default:
                return null;
        }
    };

    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h1 className="text-4xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground mt-2 text-base">Manage your account and preferences</p>
            </div>

            <nav className="flex flex-wrap gap-1 border-b border-border">
                {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                        <Button
                            key={section.id}
                            variant={activeSection === section.id ? 'default' : 'ghost'}
                            onClick={() => setActiveSection(section.id)}
                            className={`rounded-t-lg rounded-b-none gap-2 transition-all ${activeSection === section.id
                                    ? 'border-b-2 border-primary'
                                    : 'hover:bg-muted'
                                }`}
                        >
                            <Icon className="h-4 w-4" />
                            <span className="hidden sm:inline">{section.label}</span>
                            <span className="sm:hidden">{section.label.split(' ')[0]}</span>
                        </Button>
                    );
                })}
            </nav>

            <Card className="border-l-4 border-l-primary shadow-sm">
                <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                        {(() => {
                            const Icon = sections.find(s => s.id === activeSection)?.icon;
                            return Icon ? <Icon className="h-6 w-6 text-primary" /> : null;
                        })()}
                        <div>
                            <CardTitle className="text-2xl">{sections.find(s => s.id === activeSection)?.label}</CardTitle>
                            <CardDescription className="text-sm mt-1">
                                {getSectionDescription()}
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    {renderSection()}
                    {message && (
                        <Alert className="mt-6 border-green-200 bg-green-50 animate-in fade-in slide-in-from-top-2">
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