import { Droplets } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="h-8 w-8" />
              <span className="text-2xl font-bold">Full Draw Power Washing</span>
            </div>
            <p className="text-primary-foreground/80">
              Hits the target every time when it comes to clean. Precision power washing for Edmond, Oklahoma City, Yukon, and Piedmont.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Get Quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>(405) 204-8779</li>
              <li>Available 24/7</li>
              <li>Edmond, OK 73013</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {currentYear} Full Draw Power Washing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
