import { VideoCard } from "@/components/video-card";

const videos = [
  {
    title: "Understanding the Seerah: Lessons from the Prophet's Life",
    speaker: "Imam Zaid Shakir",
    image: "https://placehold.co/600x400.png",
    imageHint: "mosque interior",
    href: "#",
  },
  {
    title: "The Miracles of the Quran: A Scientific Approach",
    speaker: "Dr. Jamal Badawi",
    image: "https://placehold.co/600x400.png",
    imageHint: "quran book",
    href: "#",
  },
  {
    title: "Islamic Art & Architecture: A Journey Through History",
    speaker: "Dr. Ingrid Mattson",
    image: "https://placehold.co/600x400.png",
    imageHint: "islamic architecture",
    href: "#",
  },
  {
    title: "Fiqh of Food: Halal and Haram in the Modern Age",
    speaker: "Sheikh Abdullah Bin Bayyah",
    image: "https://placehold.co/600x400.png",
    imageHint: "food market",
    href: "#",
  },
  {
    title: "Mental Health and Spirituality in Islam",
    speaker: "Dr. Rania Awaad",
    image: "https://placehold.co/600x400.png",
    imageHint: "serene landscape",
    href: "#",
  },
  {
    title: "Stories of the Prophets: Lessons for Today",
    speaker: "Nouman Ali Khan",
    image: "https://placehold.co/600x400.png",
    imageHint: "desert landscape",
    href: "#",
  },
];


export default function VideosPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Videos</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Browse our library of long-form lectures, discussions, and series from trusted speakers.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
}
