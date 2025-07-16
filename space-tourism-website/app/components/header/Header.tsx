import Nav from '../nav/Nav';
import logo from '../../assets/shared/logo.svg';

export default function Header() {
  return (
    <div className="flex items-center pt-[var(--spacing-500)] gap-[-32px] self-stretch">
      <div className="logo-box pl-[var(--spacing-800)] flex items-center gap-[var(--spacing-800)] self-stretch flex-[1_0_0]">
        <img src={logo} alt="logo" className="w-12 h-12" />
        <div className="line h-[1px] flex-[1_0_0] opacity-25 bg-[var(--color-white)] z-2"></div>
      </div>
      <Nav />
    </div>
  );
}
