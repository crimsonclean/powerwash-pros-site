import { Button } from "@/components/ui/button";
import { Phone, Droplets } from "lucide-react";
import heroImage from "@/assets/hero-powerwash.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional power washing service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <Droplets className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Power Washing</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Transform Your Property with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Draw Power Washing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            Professional exterior cleaning services that restore your home's beauty and protect your investment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Button 
              size="lg" 
              className="text-lg px-8 h-14 bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all"
              onClick={scrollToContact}
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 h-14 border-2 hover:bg-primary/5"
              onClick={() => window.location.href = "tel:+1234567890"}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-12 border-t border-border/40 animate-in fade-in duration-700 delay-500">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
