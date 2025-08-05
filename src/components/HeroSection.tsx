import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, Globe2, Layers } from "lucide-react";
import heroBackground from "@/assets/tech-hero-bg.jpg";

const HeroSection = () => {
  const stats = [
    { number: "5+", label: "Platform Digital", icon: Layers },
    { number: "100+", label: "Klien Aktif", icon: Users },
    { number: "24/7", label: "Support", icon: Clock },
    { number: "10+", label: "Negara", icon: Globe2 },
  ];

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/50 to-transparent"></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-glow"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-glow animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-secondary rounded-full animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="gradient-text">TechHolding</span>
              <br />
              <span className="text-foreground">Group</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Perusahaan holding terdepan di bidang teknologi informasi dan perdagangan internasional. 
              Menghubungkan inovasi digital dengan peluang global.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 tech-glow group px-8 py-6 text-lg"
            >
              Jelajahi Portofolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg"
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center space-y-2 animate-fade-in group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;