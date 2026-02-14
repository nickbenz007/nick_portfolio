import PageContainer from '../components/layout/PageContainer';
import { ContactForm } from './components/ContactForm';
import { ContactSidebar } from './components/ContactSidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Nick – Full Stack Developer',
  description:
    'Get in touch with Nick, a MERN stack developer specializing in scalable web applications and modern engineering practices.',
};

export const ContactPage = () => {
  return (
    <PageContainer
      title="Get In Touch"
      highlight="Touch"
      description="Let's build something amazing together. I'm currently available for freelance projects or full-time opportunities in modern web development."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Left */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Right */}
        <div className="space-y-6">
          <ContactSidebar />
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactPage;
