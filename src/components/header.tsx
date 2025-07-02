'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, Globe } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/videos', label: 'Videos' },
  { href: '/live-programs', label: 'Live Programs' },
  { href: '/community-forum', label: 'Community Forum' },
  { href: '/volunteer', label: 'Volunteer' },
];

export default function Header() {
  const pathname = usePathname();
  const logoUrl = "https://scontent.fccu9-4.fna.fbcdn.net/v/t39.30808-6/462008505_122094397670564925_9061815109199907439_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pP52EraV5gMQ7kNvwG2zqFb&_nc_oc=AdmhIPwXzjTa4GOJqB6b5XtxOJdSg1krr8LNemLQa6F2dzDZrHSL6hcsD01ZfyKQY-o&_nc_zt=23&_nc_ht=scontent.fccu9-4.fna&_nc_gid=Nk9bRGy5d0AFRfsCkpAWtw&oh=00_AfNgzMO_jXomdgEHdjhl-LT4FaKvM6uKOrnOsdcahtBBVg&oe=686ADD51";


  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          isActive ? 'text-primary' : 'text-muted-foreground'
        )}
      >
        {label}
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          'block py-2 text-lg font-medium transition-colors hover:text-primary',
          isActive ? 'text-primary' : 'text-foreground'
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Image src={logoUrl} alt="Muntadal Ummah Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
          <span className="font-headline text-lg font-bold">Muntadal Ummah</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>العربية</DropdownMenuItem>
              <DropdownMenuItem>বাংলা</DropdownMenuItem>
              <DropdownMenuItem>اردو</DropdownMenuItem>
              <DropdownMenuItem>हिन्दी</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" className="hidden md:flex">Login</Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col p-6">
                <Link href="/" className="mb-8 flex items-center gap-2">
                   <Image src={logoUrl} alt="Muntadal Ummah Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
                  <span className="font-headline text-lg font-bold">Muntadal Ummah</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <MobileNavLink key={link.href} {...link} />
                  ))}
                </nav>
                <Button variant="outline" className="mt-8">Login</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
