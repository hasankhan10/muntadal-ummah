import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  imageHint: string;
  authorImage: string;
  authorImageHint: string;
  excerpt: string;
  href: string;
}

export function ArticleCard({ title, category, author, date, image, imageHint, authorImage, authorImageHint, excerpt, href }: ArticleCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader className="p-0">
        <Link href={href}>
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="h-48 w-full object-cover"
            data-ai-hint={imageHint}
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <Badge variant="secondary" className="font-semibold">{category}</Badge>
        <CardTitle className="mt-2 font-headline text-xl">
          <Link href={href} className="hover:text-primary transition-colors">{title}</Link>
        </CardTitle>
        <p className="mt-2 text-sm text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4 bg-muted/50 p-4">
        <Image
          src={authorImage}
          alt={author}
          width={40}
          height={40}
          className="rounded-full"
          data-ai-hint={authorImageHint}
        />
        <div className="text-sm">
          <p className="font-semibold">{author}</p>
          <p className="text-muted-foreground">{date}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
