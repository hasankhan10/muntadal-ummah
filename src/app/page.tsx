import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle, Calendar, User, MessageSquare } from "lucide-react";

const articles = [
  {
    title: "The Wisdom of Patience in Islam",
    category: "Faith",
    author: "Sheikh Yusuf Al-Qaradawi",
    date: "2 days ago",
    image: "https://placehold.co/600x400.png",
    imageHint: "islamic scholar",
    authorImage: "https://placehold.co/40x40.png",
    authorImageHint: "portrait man",
    excerpt: "Exploring the Quranic and Prophetic teachings on the virtue of Sabr (patience) and its rewards.",
  },
  {
    title: "Fiqh of Transactions: A Modern Perspective",
    category: "Fiqh",
    author: "Dr. Asma Barlas",
    date: "5 days ago",
    image: "https://placehold.co/600x400.png",
    imageHint: "islamic calligraphy",
    authorImage: "https://placehold.co/40x40.png",
    authorImageHint: "portrait woman",
    excerpt: "Navigating Islamic finance and business ethics in the contemporary world with clarity and confidence.",
  },
  {
    title: "Raising Righteous Children in the West",
    category: "Family",
    author: "Aisha Abdul-Sattar",
    date: "1 week ago",
    image: "https://placehold.co/600x400.png",
    imageHint: "family park",
    authorImage: "https://placehold.co/40x40.png",
    authorImageHint: "woman smiling",
    excerpt: "Practical tips and spiritual guidance for Muslim parents nurturing faith in the next generation.",
  },
];

const videos = [
  {
    title: "Understanding the Seerah: Lessons from the Prophet's Life",
    speaker: "Imam Zaid Shakir",
    image: "https://placehold.co/600x400.png",
    imageHint: "mosque interior",
  },
  {
    title: "The Miracles of the Quran: A Scientific Approach",
    speaker: "Dr. Jamal Badawi",
    image: "https://placehold.co/600x400.png",
    imageHint: "quran book",
  },
  {
    title: "Islamic Art & Architecture: A Journey Through History",
    speaker: "Dr. Ingrid Mattson",
    image: "https://placehold.co/600x400.png",
    imageHint: "islamic architecture",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
          data-ai-hint="mosque courtyard"
        />
        <div className="relative container mx-auto flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight tracking-tight text-primary-foreground bg-primary/70 rounded-lg p-4 shadow-lg">
            Muntadal Ummah
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground bg-background/80 rounded-lg p-2">
            Nurturing Faith, Fostering Community, and Spreading Knowledge in the light of Islam.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="font-bold">
              <Link href="/articles">
                Explore Articles <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/community-forum">
                Join the Forum <MessageSquare className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">
            Featured Articles
          </h2>
          <p className="mt-2 text-center text-lg text-muted-foreground max-w-xl mx-auto">
            Insights and guidance from trusted scholars and community members.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Card key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader className="p-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover"
                    data-ai-hint={article.imageHint}
                  />
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <Badge variant="secondary" className="font-semibold">{article.category}</Badge>
                  <CardTitle className="mt-2 font-headline text-xl">
                    <Link href="/articles" className="hover:text-primary transition-colors">{article.title}</Link>
                  </CardTitle>
                  <p className="mt-2 text-muted-foreground">{article.excerpt}</p>
                </CardContent>
                <CardFooter className="flex items-center gap-4 bg-muted/50 p-4">
                  <Image
                    src={article.authorImage}
                    alt={article.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                    data-ai-hint={article.authorImageHint}
                  />
                  <div className="text-sm">
                    <p className="font-semibold">{article.author}</p>
                    <p className="text-muted-foreground">{article.date}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">
            Latest Videos
          </h2>
           <p className="mt-2 text-center text-lg text-muted-foreground max-w-xl mx-auto">
            Enlightening talks and series from our official YouTube channel.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <Card key={index} className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative">
                  <Image
                    src={video.image}
                    alt={video.title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover"
                    data-ai-hint={video.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white/80 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <CardContent className="flex-1 p-6">
                  <CardTitle className="font-headline text-xl">{video.title}</CardTitle>
                  <p className="mt-2 flex items-center gap-2 text-muted-foreground">
                    <User className="h-4 w-4" />
                    {video.speaker}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="font-bold border-2">
              <Link href="/videos">View All Videos <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto text-center">
           <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Join Our Community
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-xl mx-auto">
            Engage in meaningful discussions, ask questions, and grow with your brothers and sisters in faith.
          </p>
          <div className="mt-8">
             <Button asChild size="lg" className="font-bold">
              <Link href="/community-forum">
                Visit The Forum <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
