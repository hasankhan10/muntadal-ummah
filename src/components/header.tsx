'use client';

import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu, Globe, User, LogOut, UserPlus, LogIn } from 'lucide-react';
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
  // TODO: Replace with actual authentication state
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoUrl =
    'https://scontent.fccu9-4.fna.fbcdn.net/v/t39.30808-6/462008505_122094397670564925_9061815109199907439_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pP52EraV5gMQ7kNvwG2zqFb&_nc_oc=AdmhIPwXzjTa4GOJqB6b5XtxOJdSg1krr8LNemLQa6F2dzDZrHSL6hcsD01ZfyKQY-o&_nc_zt=23&_nc_ht=scontent.fccu9-4.fna&_nc_gid=Nk9bRGy5d0AFRfsCkpAWtw&oh=00_AfNgzMO_jXomdgEHdjhl-LT4FaKvM6uKOrnOsdcahtBBVg&oe=686ADD51';

  const UserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            'relative h-10 w-10 rounded-full',
            !isScrolled && 'hover:bg-white/10 hover:text-primary-foreground'
          )}
        >
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={isLoggedIn ? 'https://placehold.co/40x40.png' : '/'}
              alt="User profile"
              data-ai-hint="user portrait"
            />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {isLoggedIn ? (
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">
                  john.doe@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link href="/login">
                <LogIn className="mr-2 h-4 w-4" />
                <span>Sign In</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/signup">
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Sign Up</span>
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          'text-sm font-medium transition-colors',
          isScrolled
            ? isActive
              ? 'text-primary font-bold'
              : 'hover:text-primary'
            : isActive
            ? 'text-white font-bold'
            : 'hover:text-white'
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
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b text-foreground'
          : 'bg-primary text-primary-foreground border-b border-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center">
        <div className="flex flex-1 justify-start">
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src={logoUrl}
                    alt="Muntadal Ummah Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                />
                <span className="font-headline text-lg font-bold">Muntadal Ummah</span>
            </Link>
        </div>
        
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        
        <div className="flex flex-1 items-center justify-end gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  !isScrolled && 'hover:bg-white/10 hover:text-primary-foreground'
                )}
              >
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

          <UserMenu />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  'md:hidden',
                  !isScrolled && 'hover:bg-white/10 hover:text-primary-foreground'
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex h-full flex-col">
                <Link href="/" className="mb-8 flex items-center gap-2">
                  <Image
                    src={logoUrl}
                    alt="Muntadal Ummah Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <span className="font-headline text-lg font-bold">
                    Muntadal Ummah
                  </span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <MobileNavLink key={link.href} {...link} />
                  ))}
                </nav>
                <div className="mt-auto border-t pt-6">
                  {isLoggedIn ? (
                    <Button
                      onClick={() => setIsLoggedIn(false)}
                      className="w-full"
                    >
                      Log Out
                    </Button>
                  ) : (
                    <div className="space-y-2">
                      <Button asChild className="w-full">
                        <Link href="/login">Sign In</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/signup">Sign Up</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
