import Link from "next/link";
import { Landmark, Youtube, Twitter, Facebook, Instagram, Twitch, Linkedin, Ghost, MessageSquare } from "lucide-react";

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

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.88-1.59-1.92-2.31-4.42-2.1-6.84.17-2.09 1.02-4.03 2.3-5.67 1.22-1.56 2.85-2.7 4.7-3.29.01-2.7.01-5.4-.01-8.1.01-1.51.12-3.02.12-4.53Z" />
  </svg>
);

const ThreadsIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C21.992 14.508 21.054 16.857 19.462 18.625" />
        <path d="M16 12.5C16 10.015 14.209 8 12 8C9.791 8 8 10.015 8 12.5C8 14.985 9.791 17 12 17C12.831 17 13.593 16.793 14.25 16.425" />
    </svg>
)

const BlueskyIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M12 1.481c-2.336 4.34-5.26 8.163-7.585 11.232C2.701 15.225 1.48 18.308 1.48 22.519h21.04C22.52 18.308 21.299 15.225 19.585 12.713 17.26 9.644 14.336 5.82 12 1.481z" />
    </svg>
)

export default function Footer() {
  const socialLinks = [
    { href: 'https://www.facebook.com/MuntadalUmmah/', label: 'Facebook', icon: Facebook },
    { href: 'https://www.messenger.com/channel/MuntadalUmmah', label: 'Messenger', icon: MessageSquare },
    { href: 'https://www.youtube.com/@MuntadalUmmah', label: 'Youtube', icon: Youtube },
    { href: 'https://www.tiktok.com/@muntadalummah', label: 'TikTok', icon: TiktokIcon },
    { href: 'https://x.com/MuntadalUmmah', label: 'X', icon: Twitter },
    { href: 'https://www.instagram.com/muntadalummah/', label: 'Instagram', icon: Instagram },
    { href: 'https://www.twitch.tv/muntadalummah', label: 'Twitch', icon: Twitch },
    { href: 'https://www.linkedin.com/company/muntadalummah/', label: 'Linkedin', icon: Linkedin },
    { href: 'https://www.threads.net/@muntadalummah', label: 'Threads', icon: ThreadsIcon },
    { href: 'https://bsky.app/profile/muntadalummah.bsky.social', label: 'Bluesky', icon: BlueskyIcon },
    { href: 'https://www.snapchat.com/add/muntadalummah', label: 'Snapchat', icon: Ghost },
  ];

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
              <div className="mt-4 flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <link.icon className="h-6 w-6" />
                    <span className="sr-only">{link.label}</span>
                  </Link>
                ))}
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
