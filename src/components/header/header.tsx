import Image from 'next/image';
import HeaderItem from './header--item';

// ✔ create header component
const Header = () => {
  return (
    <div className="sticky top-0 z-50 h-28 bg-white/70 backdrop-blur-3xl">
      <header className="container mx-auto">
        <nav className="flex h-28 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-orange-500 ring-offset-2">
              <Image
                src="/logo.png"
                alt="Mg Wunna's logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <h1 className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-lg font-bold text-transparent">
                Mg Wunna
              </h1>
              <p className="text-xs text-gray-500/70">Fullstack Developer</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <HeaderItem title="Home" />
            <HeaderItem title="Projects" />
            <HeaderItem title="Blogs" />
            <HeaderItem title="About" />
            <HeaderItem title="Contact" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
