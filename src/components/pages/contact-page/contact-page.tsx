'use server';

import Breadcrumb from '../../commons/breadcrumb';
import FooterSection from '../../sections/footer-section/footer-section';
import HeaderSection from '../../sections/header-section/header-section';
import ContactPageFormSection from './contact-page--form-section';
import ContactPageInfoSection from './contact-page--info-section';

// ✔ create contact page
const ContactPage = () => {
  return (
    <>
      <HeaderSection />
      <div className="relative min-h-screen w-full overflow-x-hidden md:min-h-min">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Decorative elements */}
          <div className="fixed -left-4 top-0 h-64 w-64 rounded-full bg-orange-100/50 blur-3xl" />
          <div className="fixed -right-4 bottom-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

          {/* Content */}
          <div className="relative">
            <Breadcrumb
              links={[
                { label: 'Home', href: '/' },
                { label: 'Contact', href: '/contact' },
              ]}
            />

            <div className="grid gap-12">
              <ContactPageInfoSection />
              <ContactPageFormSection />
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default ContactPage;
