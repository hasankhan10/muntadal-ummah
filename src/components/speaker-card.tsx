'use client';

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video, FileText } from "lucide-react";

type Speaker = {
  name: string;
  designation: string;
  bio: string;
  country: string;
  avatarImage: string;
  avatarFallback: string;
  avatarHint: string;
  videos: { title: string; href: string }[];
  articles: { title: string; href: string }[];
};

interface SpeakerCardProps {
  speaker: Speaker;
}

export function SpeakerCard({ speaker }: SpeakerCardProps) {
  const { name, designation, country, avatarImage, avatarFallback, avatarHint, bio, videos, articles } = speaker;

  return (
    <Dialog>
      <Card className="flex flex-col text-center shadow-lg transition-shadow hover:shadow-xl h-full">
        <CardContent className="flex flex-col items-center gap-4 p-6 flex-1">
          <Avatar className="h-24 w-24 border-4 border-secondary">
            <AvatarImage src={avatarImage} alt={name} data-ai-hint={avatarHint} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-headline text-xl font-bold">{name}</h3>
            <p className="text-sm font-semibold text-primary">{designation}</p>
            <p className="text-sm text-muted-foreground">{country}</p>
          </div>
        </CardContent>
        <CardFooter className="p-4 bg-muted/50">
          <DialogTrigger asChild>
            <Button className="w-full">View Profile</Button>
          </DialogTrigger>
        </CardFooter>
      </Card>

      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
             <Avatar className="h-28 w-28 border-4 border-secondary flex-shrink-0">
                <AvatarImage src={avatarImage} alt={name} data-ai-hint={avatarHint} />
                <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
            <div>
                 <DialogTitle className="font-headline text-3xl">{name}</DialogTitle>
                <p className="text-lg font-semibold text-primary">{designation}</p>
                <p className="text-muted-foreground">{country}</p>
            </div>
          </div>
        </DialogHeader>
        <div className="py-4">
            <h4 className="font-headline text-lg font-semibold mb-2">Introduction</h4>
            <p className="text-sm text-muted-foreground">{bio}</p>
        </div>
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
          </TabsList>
          <TabsContent value="videos" className="mt-4 max-h-60 overflow-y-auto pr-2">
             {videos.length > 0 ? (
                <ul className="space-y-3">
                  {videos.map((video) => (
                    <li key={video.title}>
                      <Link href={video.href} className="flex items-center gap-3 group">
                        <Video className="h-5 w-5 text-primary/80 flex-shrink-0" />
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">{video.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-8">No videos available.</p>
              )}
          </TabsContent>
          <TabsContent value="articles" className="mt-4 max-h-60 overflow-y-auto pr-2">
            {articles.length > 0 ? (
                <ul className="space-y-3">
                  {articles.map((article) => (
                    <li key={article.title}>
                      <Link href={article.href} className="flex items-center gap-3 group">
                        <FileText className="h-5 w-5 text-primary/80 flex-shrink-0" />
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">{article.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-8">No articles available.</p>
              )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}