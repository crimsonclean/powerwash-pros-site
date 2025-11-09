import { CheckCircle } from "lucide-react";
import beforeAfterImage from "@/assets/before-after.jpg";

const benefits = [
  "Increases property value",
  "Prevents long-term damage",
  "Removes harmful mold & mildew",
  "Enhances curb appeal",
];

export const BeforeAfter = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See The{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Remarkable Difference
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our professional power washing services deliver stunning results that speak for themselves. 
              Transform your property from dull and dirty to pristine and beautiful.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-secondary/50 rounded-lg p-6 border border-border">
              <p className="text-lg font-semibold mb-2">Ready to transform your property?</p>
              <p className="text-muted-foreground">Get a free, no-obligation quote today and see what we can do for you.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={beforeAfterImage} 
                alt="Before and after power washing results"
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-semibold">Before & After</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
