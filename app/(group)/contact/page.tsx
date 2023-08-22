import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Contact SEO Title',
    description: 'Esta es la página de contacto',
    keywords: ['Contact', 'Next13', 'Fullstack', 'Developer', 'learning']
}

export default function ContactPage() {
    return(
        <>
            <span className='text-7xl'>Contact Page</span>
        </>
    )
};