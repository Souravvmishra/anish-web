import { Breadcrumbs } from '@/components/breadcrumbs'
import { ContactForm } from '@/components/main/contact-form'
import React from 'react'

const page = () => {
    return (
        <div className="bg-background min-h-screen">
            <main className="container max-w-7xl mx-auto px-4 py-8">
                <Breadcrumbs
                    items={[
                        { title: 'Home', href: '/' },
                        { title: 'Contact', href: '/contact-anish-enterprises' }
                    ]}
                />
                <ContactForm />
            </main>
        </div>
    )
}

export default page
