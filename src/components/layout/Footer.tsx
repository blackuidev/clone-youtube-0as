const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/95 py-6 w-full">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-12 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} CarRental. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
          <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
