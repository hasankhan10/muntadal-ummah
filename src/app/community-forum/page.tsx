import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PlusCircle } from "lucide-react";

const threads = [
  {
    topic: "Question about Zakat calculation on investments",
    author: "Ali Raza",
    authorAvatar: "https://placehold.co/40x40.png",
    authorAvatarHint: "man glasses",
    category: "Fiqh Q&A",
    replies: 5,
    lastPost: "2 hours ago by Sheikh Faraz",
  },
  {
    topic: "Tips for waking up for Fajr consistently?",
    author: "Aisha Yusuf",
    authorAvatar: "https://placehold.co/40x40.png",
    authorAvatarHint: "woman smiling",
    category: "Lifestyle",
    replies: 12,
    lastPost: "5 hours ago by Omar F.",
  },
  {
    topic: "Discussion on 'The Wisdom of Patience in Islam' article",
    author: "Maryam S.",
    authorAvatar: "https://placehold.co/40x40.png",
    authorAvatarHint: "woman hijab",
    category: "Article Discussion",
    replies: 8,
    lastPost: "1 day ago by David W.",
  },
  {
    topic: "Best Islamic books for new Muslims",
    author: "Johnathan Smith",
    authorAvatar: "https://placehold.co/40x40.png",
    authorAvatarHint: "man beard",
    category: "Resources",
    replies: 25,
    lastPost: "2 days ago by Admin",
  },
];

export default function CommunityForumPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Community Forum</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Ask questions, share knowledge, and engage in respectful discussions.
          </p>
        </div>
        <div className="mt-6 md:mt-0 text-center md:text-right">
          <Button size="lg">
            <PlusCircle className="mr-2 h-5 w-5" />
            Start New Discussion
          </Button>
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-lg border shadow-md">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-[60%] font-headline text-base">Topic</TableHead>
              <TableHead className="text-center font-headline text-base">Replies</TableHead>
              <TableHead className="hidden md:table-cell font-headline text-base">Last Post</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {threads.map((thread, index) => (
              <TableRow key={index} className="hover:bg-muted/30">
                <TableCell>
                  <div className="flex items-start gap-4">
                    <Avatar className="hidden sm:block">
                      <AvatarImage src={thread.authorAvatar} alt={thread.author} data-ai-hint={thread.authorAvatarHint}/>
                      <AvatarFallback>{thread.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <a href="#" className="font-bold text-base hover:text-primary transition-colors">{thread.topic}</a>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Badge variant="outline">{thread.category}</Badge>
                        <span>by {thread.author}</span>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center font-medium">{thread.replies}</TableCell>
                <TableCell className="hidden md:table-cell text-sm text-muted-foreground">{thread.lastPost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
