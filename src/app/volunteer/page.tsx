'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  residence: z.string().min(2, 'Please enter your city and country.'),
  email: z.string().email('Please enter a valid email address.'),
  whatsapp: z.string().min(10, 'Please enter a valid WhatsApp number.'),
  expertise: z.string({
    required_error: 'Please select your area of expertise.',
  }),
  about: z.string().min(10, 'Please tell us a bit about yourself.').max(500),
});

export default function VolunteerPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      residence: '',
      email: '',
      whatsapp: '',
      about: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the data to a Supabase table.
    toast({
      title: 'Application Received!',
      description: 'JazakAllah Khair for your interest. We will be in touch soon, inshaAllah.',
    });
    form.reset();
  }

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Volunteer With Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The Prophet ﷺ said, "The best of people are those that bring most benefit to the rest of mankind." Join our team of dedicated volunteers and use your skills to serve the Ummah.
          </p>
          <div className="mt-8">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Volunteers working together"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              data-ai-hint="volunteers community"
            />
          </div>
        </div>
        <div className="bg-card p-8 rounded-lg border shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Abdur-Rahman" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="residence"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Residence</FormLabel>
                    <FormControl>
                      <Input placeholder="City, Country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Include country code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expertise"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Area of Expertise</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select one..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="videographer">Videographer/Vlogger</SelectItem>
                        <SelectItem value="video-editor">Video Editor</SelectItem>
                        <SelectItem value="web-designer">Web Designer</SelectItem>
                        <SelectItem value="social-media">Social Media Strategist</SelectItem>
                        <SelectItem value="ulama-coordinator">Ulama Coordinator</SelectItem>
                        <SelectItem value="qari">Qari (Reciter)</SelectItem>
                        <SelectItem value="other">Something Else</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell us about yourself</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Briefly mention your skills, experience, and why you want to volunteer."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Max 500 characters.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" size="lg">Submit Application</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
