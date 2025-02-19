"use client"

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PackageCheck, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useFormStatus } from "react-dom";
import sendEmail from "@/actions/send-email";

interface QuoteFormData {
    name: string;
    email: string;
    company: string;
    phone: string;
    requirements: string;
    budget: string;
    timeline: string;
}

const QuoteForm = () => {
    const [formData, setFormData] = useState<QuoteFormData>({
        name: "",
        email: "",
        company: "",
        phone: "",
        requirements: "",
        budget: "",
        timeline: ""
    });

    const { toast } = useToast();

    const SubmitButton = () => {
        const { pending } = useFormStatus();
        return (
            <Button
                type="submit"
                className="w-full gap-2"
                disabled={pending}
            >
                {pending ? (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting Request...
                    </>
                ) : (
                    <>
                        <PackageCheck className="w-4 h-4 mr-2" />
                        Submit Quote Request
                    </>
                )}
            </Button>
        );
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                    <PackageCheck className="w-5 h-5" />
                    Request Custom Quote
                </DialogTitle>
                <DialogDescription>
                    Fill out the form below and our team will prepare a detailed quote tailored to your needs.
                </DialogDescription>
            </DialogHeader>

            <form
                action={async (formData: FormData) => {
                    const emailContent = `
                        New Quote Request Details:
                        
                        Name: ${formData.get('name')}
                        Email: ${formData.get('email')}
                        Company: ${formData.get('company')}
                        Phone: ${formData.get('phone')}
                        Budget: ${formData.get('budget')}
                        Timeline: ${formData.get('timeline')}
                        
                        Requirements:
                        ${formData.get('requirements')}
                    `;

                    const htmlContent = `
                        <h2>New Quote Request Details</h2>
                        
                        <p><strong>Name:</strong> ${formData.get('name')}</p>
                        <p><strong>Email:</strong> ${formData.get('email')}</p>
                        <p><strong>Company:</strong> ${formData.get('company')}</p>
                        <p><strong>Phone:</strong> ${formData.get('phone')}</p>
                        <p><strong>Budget:</strong> ${formData.get('budget')}</p>
                        <p><strong>Timeline:</strong> ${formData.get('timeline')}</p>
                        
                        <h3>Requirements:</h3>
                        <p>${formData.get('requirements')}</p>
                    `;

                    const res = await sendEmail(
                        [formData.get('email') as string, 'souravvmishra@gmail.com'],
                        'Custom Quote Request',
                        emailContent,
                        htmlContent
                    );

                    if (res.error) {
                        toast({
                            title: "Submission Failed",
                            description: "There was an error submitting your request. Please try again.",
                            variant: "destructive",
                        });
                    } else {
                        toast({
                            title: "Quote Request Sent!",
                            description: "We'll get back to you within 24 hours with a detailed quote.",
                        });
                        setFormData({
                            name: "", email: "", company: "", phone: "",
                            requirements: "", budget: "", timeline: ""
                        });
                    }
                }}
                className="space-y-4"
            >
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            name="name"
                            required
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Work Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                            id="company"
                            name="company"
                            required
                            placeholder="Enter your company name"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="requirements">Project Requirements</Label>
                    <Textarea
                        id="requirements"
                        name="requirements"
                        required
                        placeholder="Describe your project requirements, specifications, and any special considerations"
                        value={formData.requirements}
                        onChange={handleChange}
                        className="h-32"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="budget">Estimated Budget</Label>
                        <Input
                            id="budget"
                            name="budget"
                            placeholder="Enter your budget range"
                            value={formData.budget}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="timeline">Expected Timeline</Label>
                        <Input
                            id="timeline"
                            name="timeline"
                            placeholder="When do you need this by?"
                            value={formData.timeline}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <SubmitButton />
            </form>
        </DialogContent>
    );
};

const CustomQuoteDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'outline'} size="lg" className="rounded-full px-8 gap-2">
                    <PackageCheck className="w-5 h-5" />
                    Request Custom Quote
                </Button>
            </DialogTrigger>
            <QuoteForm />
        </Dialog>
    );
};

export default CustomQuoteDialog;
