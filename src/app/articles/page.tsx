import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArticleCard } from "@/components/article-card";

const scholarArticles = [
  {
    title: "The Wisdom of Patience in Islam",
    category: "Faith",
    author: "Sheikh Yusuf Al-Qaradawi",
    date: "2 days ago",
    image: "https://placehold.co/600x400.png",
    imageHint: "islamic scholar",
    authorImage: "https://placehold.co/40x40.png",
    authorImageHint: "portrait man",
    excerpt: "Exploring the Quranic and Prophetic teachings on the virtue of Sabr.",
    href: "#",
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
    excerpt: "Navigating Islamic finance and business ethics in the contemporary world.",
    href: "#",
  },
  {
    title: "The Spiritual Dimensions of Salah",
    category: "Worship",
    author: "Imam Hamza Yusuf",
    date: "1 week ago",
    image: "https://placehold.co/600x400.png",
    imageHint: "praying hands",
    authorImage: "https://placehold.co/40x40.png",
    authorImageHint: "scholar portrait",
    excerpt: "Unlocking the deeper meanings and spiritual benefits of the daily prayers.",
    href: "#",
  },
];

const laymanArticles = [
  {
    title: "My Journey to Finding Peace in Prayer",
    category: "Personal Story",
    author: "Fatima Ahmed",
    date: "3 days ago",
    image: "https://placehold.co/600x400.png",
    imageHint: "sunrise mosque",
    authorImage: "https://placehold.co/40x40.png",
    authorImageHint: "woman hijab",
    excerpt: "A personal reflection on how prayer transformed from a daily ritual to a source of deep connection.",
    href: "#",
  },
  {
    title: "Balancing Deen and Duniya as a Student",
    category: "Lifestyle",
    author: "Omar Khan",
    date: "1 week ago",
    image: "https://placehold.co/600x400.png",
    imageHint: "student library",
    authorImage: "https://placehold.co/40x40.png",
    authorImageHint: "man student",
    excerpt: "Practical tips and strategies for students trying to excel in both their studies and their faith.",
    href: "#",
  },
];


export default function ArticlesPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Articles</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore a wealth of knowledge from esteemed scholars and community members on various aspects of Islam.
        </p>
      </div>

      <Tabs defaultValue="scholars" className="mt-12">
        <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto">
          <TabsTrigger value="scholars">From Scholars</TabsTrigger>
          <TabsTrigger value="laymen">From Laymen</TabsTrigger>
        </TabsList>
        <TabsContent value="scholars" className="mt-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {scholarArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="laymen" className="mt-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {laymanArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
