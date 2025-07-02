import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          About Muntadal Ummah
        </h1>
        <p className="mt-6 text-center text-lg text-muted-foreground">
          Our journey, our mission, and our commitment to serving the Ummah.
        </p>
        <div className="mt-12">
          <Image
            src="https://placehold.co/1200x600.png"
            alt="Group of diverse people working together"
            width={1200}
            height={600}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="diverse people community"
          />
        </div>
        <div className="mt-16 prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary">
          <h2>Our Mission</h2>
          <p>
            At Muntadal Ummah, our mission is to provide authentic Islamic knowledge, foster a vibrant and supportive community, and create high-quality media that inspires, educates, and uplifts Muslims across the globe. We believe in the power of knowledge to transform lives and the strength of community to support individuals on their spiritual journey.
          </p>
          <h2>Our Vision</h2>
          <p>
            We envision a world where every Muslim has access to reliable Islamic resources and feels connected to a global family of believers. We aim to be a leading platform for Islamic discourse, education, and community engagement, bridging gaps between scholars and the public, and between different cultures within the Ummah.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li><strong>Authenticity:</strong> Grounding all our content in the Quran and the Sunnah.</li>
            <li><strong>Unity:</strong> Promoting brotherhood and sisterhood beyond cultural and geographical boundaries.</li>
            <li><strong>Excellence (Ihsan):</strong> Striving for the highest quality in everything we do.</li>
            <li><strong>Service (Khidmah):</strong> Dedicating our efforts to the betterment of the Ummah.</li>
            <li><strong>Respect:</strong> Engaging in respectful dialogue and honoring diverse perspectives within the framework of Islam.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
