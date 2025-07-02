import Link from "next/link";
import Image from "next/image";
import { Youtube, Facebook, Instagram, Twitch, Linkedin, MessageSquare } from "lucide-react";

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
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
  </svg>
);

export default function Footer() {
  const logoUrl = "https://scontent.fccu9-4.fna.fbcdn.net/v/t39.30808-6/462008505_122094397670564925_9061815109199907439_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pP52EraV5gMQ7kNvwG2zqFb&_nc_oc=AdmhIPwXzjTa4GOJqB6b5XtxOJdSg1krr8LNemLQa6F2dzDZrHSL6hcsD01ZfyKQY-o&_nc_zt=23&_nc_ht=scontent.fccu9-4.fna&_nc_gid=Nk9bRGy5d0AFRfsCkpAWtw&oh=00_AfNgzMO_jXomdgEHdjhl-LT4FaKvM6uKOrnOsdcahtBBVg&oe=686ADD51";
  
  const socialLinks: ({
    href: string;
    label: string;
    icon?: React.ElementType;
    iconUrl?: string;
  })[] = [
    { href: 'https://www.facebook.com/MuntadalUmmah/', label: 'Facebook', icon: Facebook },
    { href: 'https://www.messenger.com/channel/MuntadalUmmah', label: 'Messenger', icon: MessageSquare },
    { href: 'https://www.youtube.com/@MuntadalUmmah', label: 'Youtube', icon: Youtube },
    { href: 'https://www.tiktok.com/@muntadalummah', label: 'TikTok', icon: TiktokIcon },
    { href: 'https://x.com/MuntadalUmmah', label: 'X', iconUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968958.png' },
    { href: 'https://www.instagram.com/muntadalummah/', label: 'Instagram', icon: Instagram },
    { href: 'https://www.twitch.tv/muntadalummah', label: 'Twitch', icon: Twitch },
    { href: 'https://www.linkedin.com/company/muntadalummah/', label: 'Linkedin', icon: Linkedin },
    { href: 'https://www.threads.net/@muntadalummah', label: 'Threads', iconUrl: 'https://cdn-icons-png.flaticon.com/512/12105/12105336.png' },
    { href: 'https://bsky.app/profile/muntadalummah.bsky.social', label: 'Bluesky', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Bluesky_Logo.svg/900px-Bluesky_Logo.svg.png' },
    { href: 'https://www.snapchat.com/add/muntadalummah', label: 'Snapchat', iconUrl: 'https://cdn-icons-png.flaticon.com/512/174/174870.png' },
  ];

  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logoUrl} alt="Muntadal Ummah Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
              <span className="font-headline text-2xl font-bold">Muntadal Ummah</span>
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
                    {link.icon && <link.icon className="h-6 w-6" />}
                    {link.iconUrl && <Image src={link.iconUrl} alt={`${link.label} logo`} width={24} height={24} className="h-6 w-6 object-contain" />}
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
