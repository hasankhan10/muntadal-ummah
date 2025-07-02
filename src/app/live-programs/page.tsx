import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SpeakerCard } from "@/components/speaker-card";
import Image from "next/image";

const speakers = [
    {
        name: "Imam Zaid Shakir",
        designation: "Co-founder, Zaytuna College",
        bio: "Imam Zaid Shakir is a prominent Islamic scholar in the West and a co-founder of Zaytuna College, the first accredited Muslim liberal arts college in the United States. He is a powerful voice for social justice and spiritual renewal.",
        country: "USA",
        avatarImage: "https://placehold.co/128x128.png",
        avatarFallback: "ZS",
        avatarHint: "scholar portrait",
        videos: [
          { title: "The Role of Muslims in the West", href: "#" },
          { title: "Prophetic Guidance in Turbulent Times", href: "#" },
        ],
        articles: [
          { title: "On the Path to Spiritual Excellence", href: "#" },
        ]
    },
    {
        name: "Sheikh Hamza Yusuf",
        designation: "President, Zaytuna College",
        bio: "Sheikh Hamza Yusuf is a leading proponent of classical Islamic learning and the President of Zaytuna College. His work focuses on reviving traditional Islamic sciences and promoting a more nuanced understanding of Islam.",
        country: "USA",
        avatarImage: "https://placehold.co/128x128.png",
        avatarFallback: "HY",
        avatarHint: "man beard",
        videos: [
          { title: "The Heart of the Believer: A Commentary", href: "#" },
          { title: "Rethinking Modernity from an Islamic Perspective", href: "#" },
          { title: "The Alchemy of Happiness", href: "#" },
        ],
        articles: []
    },
    {
        name: "Dr. Yasir Qadhi",
        designation: "Dean, The Islamic Seminary of America",
        bio: "Dr. Yasir Qadhi is the Dean of The Islamic Seminary of America and a popular lecturer on Islam. He is known for his detailed theological and historical lectures, making complex topics accessible to a wide audience.",
        country: "USA",
        avatarImage: "https://placehold.co/128x128.png",
        avatarFallback: "YQ",
        avatarHint: "man glasses",
        videos: [
          { title: "A Thematic Study of the Quran", href: "#" },
        ],
        articles: [
          { title: "Fiqh of Modern Financial Transactions", href: "#" },
          { title: "The Life of the Prophet Muhammad: A Detailed Analysis", href: "#" },
        ]
    },
     {
        name: "Dr. Ingrid Mattson",
        designation: "Professor of Islamic Studies",
        bio: "Dr. Ingrid Mattson is a Professor of Islamic Studies and an influential female Muslim academic. Her work focuses on Quranic studies, Islamic law, and interfaith relations. She is a former president of the Islamic Society of North America.",
        country: "Canada",
        avatarImage: "https://placehold.co/128x128.png",
        avatarFallback: "IM",
        avatarHint: "woman smiling",
        videos: [
          { title: "Women in the Quranic Narrative", href: "#" },
          { title: "Building Bridges: Interfaith Dialogue in Practice", href: "#" },
        ],
        articles: [
          { title: "The Story of the Quran: Its History and Place in Muslim Life", href: "#" },
        ]
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {speakers.map((speaker) => (
                    <SpeakerCard key={speaker.name} speaker={speaker} />
                ))}
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
