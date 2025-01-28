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
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3662.359723397855!2d85.3140692!3d23.3752004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e11d83a19821%3A0x2d8e195c1e53d78d!2sAnish%20Enterprises!5e0!3m2!1sen!2sin!4v1738092839655!5m2!1sen!2sin"
                    className='w-full aspect-video'
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </main>
        </div>
    )
}

export default page
