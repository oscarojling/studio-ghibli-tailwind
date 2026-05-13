type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="flex flex-col pt-4 text-center gap-1">
      <h1 className="font-primary text-5xl md:text-7xl">{title}</h1>
      <h2 className="font-secondary text-tertiary text-2xl">{subtitle}</h2>
    </header>
  );
};

export default Header;
