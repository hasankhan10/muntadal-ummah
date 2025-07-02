import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Download } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Resources</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A collection of valuable assets for your Islamic learning journey. This page is currently under development.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => (
          <Card key={index} className="opacity-50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Book className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline">eBook Title {index + 1}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">A brief description of the resource will appear here.</p>
              <div className="mt-4 flex justify-end">
                <button disabled className="inline-flex items-center gap-2 text-primary">
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
