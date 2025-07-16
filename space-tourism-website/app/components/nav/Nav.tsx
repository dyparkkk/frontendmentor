export default function Nav() {
  return (
    <nav className="flex justify-end items-center p-[0 var(--spacing-800)] gap-[var(--spacing-600)] flex-[1_0_0] bg-[var(--color-white-5)] backdrop-blur-[40px] -ml-8 z-1">
      <NavItem index="00" title="HOME" />
      <NavItem index="01" title="DESTINATION" />
      <NavItem index="02" title="CREW" />
      <NavItem index="03" title="TECHNOLOGY" />
    </nav>
  );
}

function NavItem({ index, title }: { index: string; title: string }) {
  return (
    <div className="nav-box flex items-center justify-center gap-[var(--spacing-100)] border-y-[3px] border-y-transparent hover:border-b-[var(--color-white)] h-24">
      <span className="text-preset-8-bold">{index}</span>
      <span className="text-preset-8 ">{title}</span>
    </div>
  );
}
