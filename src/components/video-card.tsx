import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { PlayCircle, User } from "lucide-react";

interface VideoCardProps {
  title: string;
  speaker: string;
  image: string;
  imageHint: string;
  href: string;
}

export function VideoCard({ title, speaker, image, imageHint, href }: VideoCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Link href={href} className="relative block">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="h-48 w-full object-cover"
          data-ai-hint={imageHint}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <PlayCircle className="h-16 w-16 text-white/80 transition-transform duration-300 group-hover:scale-110" />
        </div>
      </Link>
      <CardContent className="flex-1 p-6">
        <CardTitle className="font-headline text-xl">
          <Link href={href} className="hover:text-primary transition-colors">{title}</Link>
        </CardTitle>
        <p className="mt-2 flex items-center gap-2 text-muted-foreground">
          <User className="h-4 w-4" />
          {speaker}
        </p>
      </CardContent>
    </Card>
  );
}
