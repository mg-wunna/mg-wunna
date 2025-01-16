'use server';

import Link from 'next/link';

// ✔ create contact page info section
const ContactPageInfoSection = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      <div className="lg:w-1/2">
        <h1 className="mb-4 bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Let&apos;s Create Something Amazing Together
        </h1>
        <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
          Have a project in mind? I&apos;d love to help bring your ideas to
          life. Drop me a message, and let&apos;s start building something
          extraordinary.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
        <Link
          href="mailto:mgwunna.mw@icloud.com"
          className="group flex flex-1 items-center gap-4 rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex size-12 items-center justify-center rounded-lg bg-orange-100 text-xl text-orange-500 transition-transform duration-300 group-hover:rotate-12">
            📧
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Email</h3>
            <p className="text-sm text-gray-600 sm:text-base">
              mgwunna.mw@icloud.com
            </p>
          </div>
        </Link>

        <Link
          href="tel:+959777177317"
          className="group flex flex-1 items-center gap-4 rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100 text-xl text-blue-500 transition-transform duration-300 group-hover:rotate-12">
            📱
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Phone</h3>
            <p className="text-sm text-gray-600 sm:text-base">
              +95 9 777 177 317
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactPageInfoSection;
