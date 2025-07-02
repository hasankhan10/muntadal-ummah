import Link from "next/link";
import { Landmark, Youtube, Twitter, Facebook } from "lucide-react";

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/videos', label: 'Videos' },
  { href: '/live-programs', label: 'Live Programs' },
];

const secondaryLinks = [
  { href: '/community-forum', label: 'Community Forum' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Landmark className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">Ummah Central</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Nurturing Faith, Fostering Community.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            <div>
              <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Navigate</h3>
              <ul className="mt-4 space-y-2">
                {mainLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Engage</h3>
              <ul className="mt-4 space-y-2">
                {secondaryLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Follow Us</h3>
              <div className="mt-4 flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Youtube className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Muntadal Ummah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
