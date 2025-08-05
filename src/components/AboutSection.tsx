import { Building, Globe, Cpu, Users, Target, CheckCircle, Award, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const services = [
    {
      icon: Building,
      title: "Holding Company",
      description: "Struktur perusahaan holding yang mengelola berbagai anak perusahaan di bidang teknologi dan perdagangan."
    },
    {
      icon: Globe,
      title: "Ekspor Impor", 
      description: "Jaringan perdagangan internasional yang luas dengan fokus pada komoditas teknologi dan produk digital."
    },
    {
      icon: Cpu,
      title: "Teknologi Informasi",
      description: "Solusi teknologi terdepan meliputi web hosting, aplikasi builder, dan platform digital inovatif."
    },
    {
      icon: Users,
      title: "Social Media",
      description: "Platform media sosial yang menghubungkan komunitas global dengan teknologi canggih."
    }
  ];

  const visionMission = [
    {
      title: "Visi",
      content: "Menjadi perusahaan holding teknologi terdepan di Asia Tenggara yang menghubungkan inovasi digital dengan peluang bisnis global.",
      icon: Target
    },
    {
      title: "Misi", 
      items: [
        "Mengembangkan ekosistem digital yang terintegrasi",
        "Memfasilitasi perdagangan internasional melalui teknologi",
        "Menciptakan platform inovatif untuk pertumbuhan bisnis",
        "Membangun komunitas digital yang berkelanjutan"
      ],
      icon: CheckCircle
    }
  ];

  const values = [
    { name: "Inovasi", description: "Selalu di garis depan teknologi", icon: Lightbulb },
    { name: "Integritas", description: "Transparansi dalam setiap langkah", icon: Award },
    { name: "Kolaborasi", description: "Kekuatan dalam kemitraan", icon: Users },
    { name: "Excellence", description: "Standar kualitas tertinggi", icon: Target }
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tentang <span className="gradient-text">TechHolding Group</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kami adalah perusahaan holding yang berfokus pada inovasi teknologi informasi dan perdagangan internasional. 
            Dengan pengalaman lebih dari satu dekade, kami telah membangun ekosistem digital yang terintegrasi dan berkelanjutan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-effect border-white/10 hover:border-primary/30 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {visionMission.map((item, index) => (
            <Card key={index} className="glass-effect border-white/10 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                </div>
                {item.content ? (
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                ) : (
                  <ul className="space-y-3">
                    {item.items?.map((listItem, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <span className="text-primary mr-3 font-bold">•</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">
            Nilai <span className="gradient-text">Perusahaan</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="text-center p-6 glass-effect border border-white/10 rounded-lg hover:border-primary/30 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">{value.name}</h4>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;