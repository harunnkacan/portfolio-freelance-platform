import React from 'react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { profile } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <SiteLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12">Let's talk</h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm currently open to new freelance opportunities.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Email</h3>
                <a href={`mailto:${profile.email}`} className="text-2xl font-semibold hover:text-primary transition-colors">
                  {profile.email}
                </a>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Socials</h3>
                <div className="flex gap-6">
                  {profile.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="text-lg font-medium hover:text-primary transition-colors underline underline-offset-8"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted/30 p-8 md:p-12 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Name</label>
                <Input required className="rounded-none border-t-0 border-x-0 border-b-2 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Email</label>
                <Input required type="email" className="rounded-none border-t-0 border-x-0 border-b-2 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Message</label>
                <Textarea required className="rounded-none border-t-0 border-x-0 border-b-2 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-all min-h-[150px]" placeholder="How can I help you?" />
              </div>
              <Button type="submit" className="w-full rounded-none h-14 text-lg font-bold uppercase tracking-widest">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}