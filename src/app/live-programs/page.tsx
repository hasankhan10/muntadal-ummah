import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SpeakerCard } from "@/components/speaker-card";
import Image from "next/image";

const speakers = [
    {
        name: "Imam Zaid Shakir",
        bio: "Co-founder of Zaytuna College, a prominent Islamic scholar in the West.",
        country: "USA",
        avatarImage: "https://placehold.co/128x128.png",
        avatarFallback: "ZS",
        avatarHint: "scholar portrait"
    },
    {
        name: "Sheikh Hamza Yusuf",
        bio: "President of Zaytuna College and a leading proponent of classical Islamic learning.",
        country: "USA",
        avatarImage: "https://placehold.co/128x128.png",
        avatarFallback: "HY",
        avatarHint: "man beard"
    },
    {
        name: "Dr. Yasir Qadhi",
        bio: "Dean of The Islamic Seminary of America and a popular lecturer on Islam.",
        country: "USA",
        avatarImage: "https://placehold.co/128x128.png",
        avatarFallback: "YQ",
        avatarHint: "man glasses"
    },
     {
        name: "Dr. Ingrid Mattson",
        bio: "Professor of Islamic Studies and an influential female Muslim academic.",
        country: "Canada",
        avatarImage: "https://placehold.co/128x128.png",
        avatarFallback: "IM",
        avatarHint: "woman smiling"
    }
];

export default function LiveProgramsPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Live Programs</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Join our live sessions with renowned speakers and catch up on past recordings.
        </p>
      </div>

       <Tabs defaultValue="livestreams" className="mt-12">
        <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto">
          <TabsTrigger value="livestreams">Livestreams</TabsTrigger>
          <TabsTrigger value="speakers">Speakers</TabsTrigger>
        </TabsList>
        <TabsContent value="livestreams" className="mt-8">
            <div className="text-center mb-8">
                <h2 className="font-headline text-3xl font-bold">Currently Live</h2>
                <p className="text-muted-foreground">"The Heart of the Believer" with Sheikh Hamza Yusuf</p>
            </div>
            <div className="aspect-video w-full max-w-4xl mx-auto bg-muted rounded-lg shadow-lg overflow-hidden">
                 <Image
                    src="https://placehold.co/1280x720.png"
                    alt="Live stream placeholder"
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover"
                    data-ai-hint="video lecture"
                />
            </div>
             <div className="text-center mt-16">
                <h2 className="font-headline text-3xl font-bold">Past Livestreams</h2>
                <p className="text-muted-foreground mt-2">Catch up on our previous sessions.</p>
            </div>
             <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Placeholder for past live videos */}
                {[1, 2, 3].map(i => (
                    <div key={i} className="aspect-video bg-muted rounded-lg shadow-md">
                         <Image
                            src={`https://placehold.co/600x400.png?id=${i}`}
                            alt={`Past live stream ${i}`}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                            data-ai-hint="youtube thumbnail"
                        />
                    </div>
                ))}
            </div>
        </TabsContent>
        <TabsContent value="speakers" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {speakers.map((speaker, index) => (
                    <SpeakerCard key={index} {...speaker} />
                ))}
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
