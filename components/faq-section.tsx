import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How can I book a bus?",
    answer:
      "Booking is simple! Just click the 'Chat on WhatsApp' button on our website and send us your travel details — travel date, from & to city, and number of passengers. Our team will get back to you promptly with the best available options and pricing. You can also call us directly at +91-91199 00394 for immediate assistance.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We primarily operate from Varanasi and serve all of Uttar Pradesh. We also offer long-distance services to nearby states including Kolkata, Madhya Pradesh, Bihar, Gaya, Ayodhya. For interstate travel, additional permits may be required which we handle on your behalf.",
  },
  {
    question: "What routes are covered by Singh Bus Service?",
    answer:
      "Singh Bus Service provides reliable bus services from Varanasi to Kolkata, Dhanbad, Ayodhya, Gaya, and various cities across Bihar. We offer comfortable and affordable travel options for individuals, families, groups, and tour bookings. If your destination is not listed, feel free to contact us via WhatsApp or call us directly to check route availability.",
  },
  {
    question: "Are your drivers experienced?",
    answer:
      "All our drivers have a minimum of 5 years of commercial driving experience and valid commercial licenses. They undergo regular training on safety protocols and are familiar with routes across North India. We also conduct background verification for all drivers.",
  },
  {
    question: "Can I see the bus before booking?",
    answer:
      "Absolutely! We encourage customers to inspect the bus before finalizing the booking. You can visit our Bus at Bhullanpur Varanasi or we can arrange a visit to show you the exact bus that will be assigned for your trip.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Got questions? We&apos;ve got answers. If you don&apos;t find what you&apos;re looking for, feel free to contact us.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* FAQ Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
