import { Card } from "@/components/ui/card";
import businessPhoto1 from "@/assets/business-photo-1.png";
import businessPhoto2 from "@/assets/business-photo-2.png";
import businessPhoto3 from "@/assets/business-photo-3.png";
import businessPhoto4 from "@/assets/business-photo-4.png";
import businessPhoto5 from "@/assets/business-photo-5.png";
import businessPhoto6 from "@/assets/business-photo-6.png";
import businessPhoto7 from "@/assets/business-photo-7.png";

const galleryImages = [
  { src: businessPhoto1, alt: "Power washing project by Full Draw Power Washing" },
  { src: businessPhoto2, alt: "Clean driveway after power washing service" },
  { src: businessPhoto3, alt: "Professional power washing results" },
  { src: businessPhoto4, alt: "Before and after power washing comparison" },
  { src: businessPhoto5, alt: "Residential power washing service" },
  { src: businessPhoto6, alt: "Commercial power washing project" },
  { src: businessPhoto7, alt: "Power washing equipment and results" },
];

export const Gallery = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Recent Work
          </h2>
          <p className="text-xl text-muted-foreground">
            See the precision and quality that Full Draw Power Washing delivers on every project
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold text-sm">View Project</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to see these results at your property?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Get Your Free Quote Today
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
