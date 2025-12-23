"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
// import emailjs from "@emailjs/browser";
// import { emailJsConfig } from "@/config";
import CopyButton from "@/components/ui/copy-button";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (!formRef.current) return;
    // setIsSubmitting(true);
    // const serviceId = emailJsConfig.serviceId;
    // const templateId = emailJsConfig.templateId;
    // const publicKey = emailJsConfig.publicKey;
    // try {
    //   if (!emailjs) {
    //     throw new Error("EmailJS library not loaded");
    //   }
    //   if (!serviceId || !templateId || !publicKey) {
    //     throw new Error("EmailJS credentials are missing");
    //   }
    //   const result = await emailjs.sendForm(
    //     serviceId,
    //     templateId,
    //     formRef.current,
    //     publicKey,
    //   );
    //   toast({
    //     title: "Message sent!",
    //     description: "Thank you for your message. I'll get back to you soon.",
    //   });
    //   if (formRef.current) {
    //     formRef.current.reset();
    //   }
    // } catch (error) {
    //   let errorMessage = "Unknown error";
    //   if (error instanceof Error) {
    //     errorMessage = error.message;
    //   } else if (typeof error === "object" && error !== null) {
    //     errorMessage = JSON.stringify(error);
    //   }
    //   toast({
    //     title: "Failed to send message",
    //     description: `Please try again or contact me directly via email. Error: ${errorMessage}`,
    //     variant: "destructive",
    //   });
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <section id="contact" className="section-pattern py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get In Touch 🤙
            </h2>
            <div className="gradient-bg mx-auto mt-4 h-1 w-20 rounded-full"></div>
            <p className="mt-4 max-w-[700px] text-xl text-muted-foreground">
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you!
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="gradient-text text-2xl font-bold">
              Contact Information
            </h3>
            <p className="text-muted-foreground">
              Feel free to reach out through any of the following methods. I'm
              always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="mt-8 space-y-4">
              <Card className="gradient-border-hover flex items-center justify-between pr-4 transition-shadow duration-300 hover:shadow-md">
                <a
                  href="mailto:calvin.delanop7@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="rounded-full bg-yellow/10 p-3">
                      <Mail className="h-6 w-6 text-yellow" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">calvin.delanop7@gmail.com</p>
                    </div>
                  </CardContent>
                </a>
                <CopyButton value="calvin.delanop7@gmail.com" type="Email" />
              </Card>

              <Card className="gradient-border-hover flex items-center justify-between pr-4 transition-shadow duration-300 hover:shadow-md">
                <a
                  href="tel:+6281380093183"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="rounded-full bg-orange/10 p-3">
                      <Phone className="h-6 w-6 text-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+62 813 8009 3183</p>
                    </div>
                  </CardContent>
                </a>
                <CopyButton value="+6281380093183" type="Phone" />
              </Card>

              <Card className="gradient-border-hover flex items-center justify-between pr-4 transition-shadow duration-300 hover:shadow-md">
                <a
                  href="https://maps.app.goo.gl/GSf8MdepcTLjFnqPA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="rounded-full bg-green/10 p-3">
                      <MapPin className="h-6 w-6 text-green" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">
                        East Kutai, East Kalimantan, Indonesia
                      </p>
                    </div>
                  </CardContent>
                </a>
                <CopyButton
                  value="East Kutai, East Kalimantan, Indonesia"
                  type="Location"
                />
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="gradient-border transition-shadow duration-300 hover:shadow-md">
              <CardContent className="p-6">
                <h3 className="gradient-text mb-6 text-2xl font-bold">
                  Send Me a Message
                </h3>
                <form
                  // ref={formRef}
                  // onSubmit={handleSubmit}
                  className="space-y-4"
                  method="post"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="user_name"
                        className="text-sm font-medium"
                      >
                        Name
                      </label>
                      <Input
                        id="user_name"
                        name="user_name"
                        placeholder="Your name"
                        required
                        className="border-yellow/20 focus:border-yellow focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="user_email"
                        className="text-sm font-medium"
                      >
                        Email
                      </label>
                      <Input
                        id="user_email"
                        name="user_email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="border-orange/20 focus:border-orange"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                      className="border-green/20 focus:border-green"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      required
                      className="border-blue/20 focus:border-blue"
                    />
                  </div>

                  <Button
                    type="button"
                    // type="submit"
                    className="gradient-bg w-full transition-opacity hover:text-white hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Sending...</span>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
