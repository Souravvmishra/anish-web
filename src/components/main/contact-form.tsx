// ContactForm.tsx
'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Mail,
    User,
    Factory,
    Phone,
    ClipboardList,
    ChevronRight,
    AlertCircle
} from "lucide-react"
import { sendEmail } from "@/actions/send-email"
import { toast } from "sonner"

export const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
    company: z.string().min(2, {
        message: "Company name must be at least 2 characters.",
    }),
    requirements: z.string().min(20, {
        message: "Technical requirements must be at least 20 characters.",
    }),
    newsletter: z.boolean().default(false),
})

export const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            company: "",
            requirements: "",
            newsletter: false,
        },
    })

    // ContactForm.tsx (updated onSubmit handler)
    function onSubmit(values: z.infer<typeof formSchema>) {
        const emailContent = {
            subject: "Industrial Solutions Inquiry",
            text: `Technical Inquiry\n
      Name: ${values.fullName}
      Email: ${values.email}
      Phone: ${values.phone}
      Company: ${values.company}
      
      Technical Requirements:
      ${values.requirements}
      
      Newsletter Opt-in: ${values.newsletter ? 'Yes' : 'No'}`,
            to: values.email
        };

        sendEmail([emailContent.to, 'souravvmishra@gmail.com'], emailContent.subject, emailContent.text)
            .then((response) => {
                if (response.success) {
                    toast.success(response.success);
                    form.reset();
                } else {
                    toast.error(response.error || 'Failed to send message');
                }
            })
            .catch((error) => {
                toast.error('An unexpected error occurred');
                console.error('Submission error:', error);
            });
    }

    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <Card className="inline-flex items-center gap-2 px-6 py-2 border rounded-full text-muted-foreground bg-muted">
                        <CardContent className="p-0 flex items-center gap-2">
                            <ClipboardList className="w-4 h-4 text-primary" />
                            Industrial Solutions Inquiry
                        </CardContent>
                    </Card>

                    <h2 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Submit Your {" "}
                        <span className="relative inline-block">
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-xl opacity-50" />
                            <span className="relative">Technical Query</span>
                        </span>
                    </h2>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-16 max-w-2xl mx-auto space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-primary" />
                                            Full Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="John D. Smith"
                                                className="px-4 py-3"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-primary" />
                                            Email Address
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="john@company.com"
                                                className="px-4 py-3"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-primary" />
                                            Contact Number
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="tel"
                                                placeholder="+1 (555) 000-0000"
                                                className="px-4 py-3"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-2">
                                            <Factory className="w-4 h-4 text-primary" />
                                            Company Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Acme Manufacturing Co."
                                                className="px-4 py-3"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="requirements"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center gap-2">
                                        <ClipboardList className="w-4 h-4 text-primary" />
                                        Technical Requirements
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Specify equipment type, capacity, material specifications, and any special requirements..."
                                            rows={5}
                                            className="px-4 py-3"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="newsletter"
                            render={({ field }) => (
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormLabel className="text-muted-foreground">
                                        Receive technical updates and industry insights
                                    </FormLabel>
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full rounded-full gap-2"
                        >
                            Submit Inquiry
                            <ChevronRight className="w-5 h-5" />
                        </Button>

                        <Card className="mt-8 border-destructive/20 bg-destructive/5">
                            <CardContent className="p-4 flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-destructive" />
                                <div className="text-sm text-destructive">
                                    <p>For urgent technical support, call our 24/7 helpline:</p>
                                    <p className="font-medium mt-1">+91 70335 598001</p>
                                </div>
                            </CardContent>
                        </Card>
                    </form>
                </Form>
            </div>
        </section>
    );
};
