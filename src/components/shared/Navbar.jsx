import MyLink from './MyLinks.jsx';

export default function Navbar() {
  const navItems = [
    { name: 'Home', path: '/', iconName: 'home' },
    { name: 'Timeline', path: '/timeline', iconName: 'clock' },
    { name: 'Stats', path: '/stats', iconName: 'chart' },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-[#1a2e2a]">KeenKeeper</div>
        <div className="flex items-center gap-1 sm:gap-4">
          {navItems.map((item) => (
            <MyLink key={item.name} href={item.path} iconName={item.iconName}>
              {item.name}
            </MyLink>
          ))}
        </div>
      </div>
    </nav>
  );
}