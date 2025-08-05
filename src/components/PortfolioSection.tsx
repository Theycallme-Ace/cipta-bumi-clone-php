import { ExternalLink, Plane, Users, Server, ShoppingCart, Camera, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      category: "Travel & Tourism",
      name: "MoreTrip",
      url: "www.moretrip.id",
      description: "Platform perjalanan dan wisata digital yang menyediakan layanan booking hotel, tiket pesawat, dan paket wisata.",
      icon: Plane,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      category: "Social Media",
      name: "LotFriends",
      url: "www.lotfriends.com", 
      description: "Platform media sosial yang menghubungkan komunitas global dengan fitur komunikasi dan networking yang canggih.",
      icon: Users,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      category: "Web Hosting",
      name: "WebServer",
      url: "www.webserver.id",
      description: "Layanan web hosting enterprise dengan infrastruktur cloud yang handal dan support 24/7.",
      icon: Server,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      category: "E-Commerce",
      name: "ShopTech",
      url: "www.shoptech.id",
      description: "Platform e-commerce B2B yang mengintegrasikan teknologi AI untuk optimasi penjualan dan inventory.",
      icon: ShoppingCart,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      category: "Digital Media",
      name: "PhotoPro",
      url: "www.photopro.id",
      description: "Platform digital untuk fotografer profesional dengan tools editing dan marketplace terintegrasi.",
      icon: Camera,
      gradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
      category: "Property Tech",
      name: "PropTech",
      url: "www.proptech.id",
      description: "Solusi teknologi untuk industri properti dengan virtual tour, CRM, dan sistem manajemen digital.",
      icon: Building,
      gradient: "from-teal-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Portfolio Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Portofolio <span className="gradient-text">Perusahaan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jaringan perusahaan kami mencakup berbagai sektor teknologi, dari platform perjalanan hingga media sosial dan layanan hosting enterprise.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="glass-effect border-white/10 hover:border-primary/30 transition-all duration-300 group hover:scale-105 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Category Badge */}
                <div className="p-6 pb-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-primary/10 text-primary border-primary/20 text-xs font-medium mb-4"
                  >
                    {item.category}
                  </Badge>
                </div>

                {/* Icon Section */}
                <div className="px-6 pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-primary/80 text-sm font-mono mb-4">
                    {item.url}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-primary/30 text-primary hover:bg-primary/10 group-hover:border-primary transition-all"
                  >
                    <span>Kunjungi Website</span>
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-effect border-white/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Tertarik Bergabung dengan <span className="gradient-text">Ekosistem Kami?</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Kami selalu mencari mitra strategis dan peluang investasi baru untuk mengembangkan portofolio teknologi yang inovatif.
              </p>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 tech-glow"
              >
                Hubungi Tim Kami
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;