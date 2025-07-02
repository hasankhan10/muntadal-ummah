import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SpeakerCardProps {
  name: string;
  bio: string;
  country: string;
  avatarImage: string;
  avatarFallback: string;
  avatarHint: string;
}

export function SpeakerCard({ name, bio, country, avatarImage, avatarFallback, avatarHint }: SpeakerCardProps) {
  return (
    <Card className="p-6 text-center shadow-lg transition-shadow hover:shadow-xl">
      <CardContent className="flex flex-col items-center gap-4">
        <Avatar className="h-24 w-24 border-4 border-secondary">
          <AvatarImage src={avatarImage} alt={name} data-ai-hint={avatarHint} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-headline text-xl font-bold">{name}</h3>
          <p className="text-sm text-muted-foreground">{country}</p>
          <p className="mt-2 text-sm">{bio}</p>
        </div>
      </CardContent>
    </Card>
  );
}
