type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="flex flex-col p-6 text-center gap-1">
      <h1 className="font-primary text-5xl md:text-7xl">{title}</h1>
      <h3 className="font-secondary text-tertiary text-lg">{subtitle}</h3>
    </header>
  );
};

export default Header;
