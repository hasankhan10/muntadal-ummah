import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We'd love to hear from you. Reach out with any questions, comments, or inquiries.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Mail className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Email Us</h2>
              <p className="text-muted-foreground">
                For general inquiries, please email us. We aim to respond within 24-48 hours.
              </p>
              <a href="mailto:muntadalummah@gmail.com" className="text-primary font-medium hover:underline">
                muntadalummah@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <MapPin className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Our Location</h2>
              <p className="text-muted-foreground">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        <Card className="p-8 shadow-lg">
          <form className="space-y-6">
            <h2 className="font-headline text-2xl font-bold">Send a Message</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
            </div>
            <Input placeholder="Subject" />
            <Textarea placeholder="Your Message" rows={6} />
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>

      <div className="mt-16">
        <h2 className="text-center font-headline text-3xl font-bold">Find Us on the Map</h2>
        <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-lg shadow-xl">
           <iframe
              src="https://maps.google.com/maps?q=Dhaka,Bangladesh&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Dhaka, Bangladesh"
            ></iframe>
        </div>
      </div>
    </div>
  );
}

// Dummy Card component for structure
const Card = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div className={`bg-card text-card-foreground rounded-lg border ${className}`}>
    {children}
  </div>
);