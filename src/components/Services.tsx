import { Card, CardContent } from "@/components/ui/card";
import { Home, Square, Trees, Fence } from "lucide-react";
import deckService from "@/assets/deck-service.jpg";
import drivewayService from "@/assets/driveway-service.jpg";
import houseService from "@/assets/house-service.jpg";

const services = [
  {
    icon: Home,
    title: "House Washing",
    description: "Gentle yet effective cleaning for all siding types, removing dirt, mold, and mildew.",
    image: houseService,
  },
  {
    icon: Square,
    title: "Driveway & Concrete",
    description: "Heavy-duty cleaning that removes oil stains, grime, and years of buildup.",
    image: drivewayService,
  },
  {
    icon: Trees,
    title: "Deck & Patio",
    description: "Restore wooden decks and stone patios to their original beauty safely.",
    image: deckService,
  },
  {
    icon: Fence,
    title: "Fence Cleaning",
    description: "Revitalize wood, vinyl, and composite fences with professional cleaning.",
    image: deckService,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive power washing solutions for every exterior surface
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
