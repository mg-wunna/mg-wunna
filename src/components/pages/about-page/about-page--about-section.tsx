import Image from 'next/image';
import { useMemo } from 'react';
import AboutPageWorkHistorySection from './about-page--work-history-section';

const AboutPageAboutSection = () => {
  const yearsOfExperience = useMemo(() => {
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 pb-0 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-16 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <Image
          src="/logo.png"
          alt="Mg Wunna Profile"
          width={120}
          height={120}
          className="rounded-full bg-orange-600 shadow-lg ring-4 ring-orange-100"
          priority
        />
        <div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Hey, I&apos;m Mg Wunna
          </h1>
          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
              Available for hire
            </span>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Full Stack Developer
            </span>
            <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              UI/UX Designer
            </span>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="flex flex-col gap-8">
        {/* Who I am */}
        <section className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="absolute -right-16 -top-16 h-32 w-32 rotate-12 rounded-full bg-orange-100 transition-transform duration-300 group-hover:rotate-45" />
          <div className="absolute -bottom-16 -left-16 h-32 w-32 rotate-12 rounded-full bg-orange-50 transition-transform duration-300 group-hover:rotate-45" />
          <div className="relative">
            <h2 className="mb-6 flex items-center gap-3 text-lg font-semibold text-orange-600">
              <span className="flex size-9 items-center justify-center rounded-lg bg-orange-100">
                👋
              </span>
              Who I am
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              I&apos;m a passionate Full Stack Developer with expertise in
              modern web technologies. My focus lies in creating elegant,
              user-centric solutions that combine beautiful design with robust
              functionality. I thrive on turning complex problems into simple,
              intuitive interfaces.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="absolute -right-16 -top-16 h-32 w-32 rotate-12 rounded-full bg-blue-100 transition-transform duration-300 group-hover:rotate-45" />
          <div className="absolute -bottom-16 -left-16 h-32 w-32 rotate-12 rounded-full bg-blue-50 transition-transform duration-300 group-hover:rotate-45" />
          <div className="relative">
            <h2 className="mb-6 flex items-center gap-3 text-lg font-semibold text-blue-600">
              <span className="flex size-9 items-center justify-center rounded-lg bg-blue-100">
                🎓
              </span>
              Education
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              I am a self-taught developer who has built a strong foundation in
              software development through hands-on experience and continuous
              learning. I am passionate about staying current with modern
              programming paradigms and technologies through online courses,
              professional certifications, and practical project work. My
              journey proves that dedication and real-world experience can be
              just as valuable as traditional education.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="absolute -right-16 -top-16 h-32 w-32 rotate-12 rounded-full bg-green-100 transition-transform duration-300 group-hover:rotate-45" />
          <div className="absolute -bottom-16 -left-16 h-32 w-32 rotate-12 rounded-full bg-green-50 transition-transform duration-300 group-hover:rotate-45" />
          <div className="relative">
            <h2 className="mb-6 flex items-center gap-3 text-lg font-semibold text-green-600">
              <span className="flex size-9 items-center justify-center rounded-lg bg-green-100">
                💼
              </span>
              Experience
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              With over {yearsOfExperience} years of experience in web
              development, I&apos;ve mastered technologies like React, Next.js,
              Node.js, and various cloud platforms. I specialize in building
              scalable web applications with a focus on performance,
              accessibility, and user experience. My approach combines technical
              expertise with creative problem-solving to deliver exceptional
              digital solutions.
            </p>
          </div>
        </section>

        <AboutPageWorkHistorySection />
      </div>
    </div>
  );
};

export default AboutPageAboutSection;
