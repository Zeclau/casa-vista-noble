import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bed, Bath, Sofa, ChefHat, WashingMachine, MapPin, Phone, MessageCircle,
  TreePine, ShieldCheck, TrendingUp, Car, Home as HomeIcon, Sparkles, Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { FadeIn } from "@/components/property/FadeIn";

import facadeFront from "@/assets/property/facade-front.jpg";
import facadeSide from "@/assets/property/facade-side.jpg";
import entrance from "@/assets/property/entrance.jpg";
import living from "@/assets/property/living.jpg";
import bedroom from "@/assets/property/bedroom.jpg";
import bathroom from "@/assets/property/bathroom.jpg";
import kitchen from "@/assets/property/kitchen.jpg";
import yard from "@/assets/property/yard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Moderna en Valle Sandino | $45,000 USD — Ligia Donaire KW" },
      { name: "description", content: "Casa de 2 habitaciones en Valle Sandino, Carretera Nueva a León. Ideal para vivir o invertir. $45,000 USD. Agenda tu visita hoy." },
      { property: "og:title", content: "Casa Moderna en Valle Sandino — $45,000 USD" },
      { property: "og:description", content: "Tu primera casa o tu próxima inversión inteligente en Managua." },
      { property: "og:image", content: facadeFront },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: facadeFront },
    ],
  }),
  component: Index,
});

const PHONE = "+50587607418";
const WHATSAPP = "50587607418";
const WA_MSG = encodeURIComponent("Hola Ligia, me interesa la casa en Valle Sandino ($45,000). ¿Podemos agendar una visita?");
const waLink = `https://wa.me/${WHATSAPP}?text=${WA_MSG}`;
const telLink = `tel:${PHONE}`;

const stats = [
  { icon: Bed, label: "Habitaciones", value: "2" },
  { icon: Bath, label: "Baño", value: "1" },
  { icon: Sofa, label: "Sala & Comedor", value: "Amplia" },
  { icon: ChefHat, label: "Cocina", value: "Equipable" },
  { icon: WashingMachine, label: "Área de Servicio", value: "Sí" },
];

const benefits = [
  { icon: TrendingUp, title: "Alta Plusvalía", desc: "Zona en crecimiento sobre Carretera Nueva a León." },
  { icon: ShieldCheck, title: "Seguridad", desc: "Portón principal de hierro y rejas en ventanas." },
  { icon: TreePine, title: "Patio Privado", desc: "Espacio verde ideal para descanso o expansión." },
  { icon: Car, title: "Acceso Directo", desc: "Excelente conexión a Managua y zona oeste." },
  { icon: HomeIcon, title: "Lista para Habitar", desc: "Distribución funcional para familia o renta." },
  { icon: Sparkles, title: "Acabados Cuidados", desc: "Detalles modernos en sala, cocina y exteriores." },
];

const gallery = [
  { src: facadeFront, alt: "Fachada principal con portón", category: "Exterior", span: "md:col-span-2 md:row-span-2" },
  { src: living, alt: "Sala principal", category: "Interior", span: "" },
  { src: kitchen, alt: "Cocina equipada", category: "Cocina", span: "" },
  { src: bedroom, alt: "Habitación con repisas", category: "Habitación", span: "md:col-span-2" },
  { src: bathroom, alt: "Baño completo", category: "Baño", span: "" },
  { src: entrance, alt: "Entrada y porche", category: "Exterior", span: "" },
  { src: yard, alt: "Patio trasero", category: "Patio", span: "md:col-span-2" },
  { src: facadeSide, alt: "Vista lateral de la casa", category: "Exterior", span: "" },
];

const galleryCategories = ["Todos", "Exterior", "Interior", "Cocina", "Habitación", "Baño", "Patio"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />
      <Hero />
      <QuickStats />
      <Description />
      <Benefits />
      <Gallery />
      <LocationMap />
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${facadeFront})` }}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-20 pt-32 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
            <MapPin className="h-3.5 w-3.5" />
            Valle Sandino · Managua
          </div>
          <h1 className="text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Tu Casa Propia en <span className="italic text-gold">Valle Sandino</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
            Ideal para vivir o invertir en una zona de alta demanda sobre Carretera Nueva a León.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="rounded-2xl bg-primary px-5 py-3 text-primary-foreground shadow-[var(--shadow-elegant)]">
              <div className="text-[10px] uppercase tracking-widest opacity-80">Precio</div>
              <div className="text-2xl font-bold sm:text-3xl">$45,000 USD</div>
            </div>
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-14 gap-2 rounded-full bg-white px-7 text-base font-semibold text-navy shadow-xl hover:bg-white/90">
                <MessageCircle className="h-5 w-5" />
                Agendar Visita por WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/70 sm:block"
      >
        Desliza para descubrir
      </motion.div>
    </section>
  );
}

function QuickStats() {
  return (
    <section className="relative -mt-12 px-4 sm:-mt-16">
      <FadeIn>
        <div className="mx-auto max-w-5xl rounded-2xl bg-card p-6 shadow-[var(--shadow-elegant)] sm:p-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-navy">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function Description() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">La Propiedad</span>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">
            Una oportunidad pensada para tu <span className="italic">próximo paso</span>.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Descubre esta excelente oportunidad de inversión sobre Carretera Nueva a León.
            Una propiedad diseñada para ofrecerte comodidad y accesibilidad, perfecta para tu primera
            casa o como una inversión inteligente con excelente proyección de plusvalía.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-accent/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-14 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Por qué esta casa</span>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Beneficios que marcan la diferencia</h2>
        </FadeIn>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.05}>
              <Card className="h-full border-0 bg-card p-7 shadow-[var(--shadow-card)] transition-[var(--transition-smooth)] hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Galería</span>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">Recorre cada espacio</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-[var(--transition-smooth)] ${
                  filter === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {filtered.map((img, i) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`group relative overflow-hidden rounded-2xl bg-muted ${filter === "Todos" ? img.span : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-navy">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationMap() {
  const lat = 12.1747189;
  const lng = -86.3646663;
  const bbox = `${lng - 0.005},${lat - 0.003},${lng + 0.005},${lat + 0.003}`;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <section className="bg-navy px-6 py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Ubicación Estratégica</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Valle Sandino, una zona con futuro</h2>
          <p className="mt-5 text-base leading-relaxed text-white/75">
            A pocos minutos de los principales accesos de Managua, sobre la Carretera Nueva a León,
            Valle Sandino combina tranquilidad residencial con conectividad comercial. Cercano a colegios,
            supermercados y zonas de desarrollo en constante crecimiento — una ubicación que protege
            tu inversión y eleva tu calidad de vida.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
            <MapPin className="h-4 w-4 text-gold" />
            12.1747° N, 86.3646° O
          </div>
          <a href={directions} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              Cómo llegar
            </Button>
          </a>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
            <iframe
              title="Ubicación Valle Sandino"
              src={mapSrc}
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "Me interesa la propiedad en Valle Sandino",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Por favor completa tu nombre y teléfono.");
      return;
    }
    const text = encodeURIComponent(
      `Hola Ligia, soy ${form.name} (${form.phone}). ${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
    toast.success("¡Gracias! Te conectamos con Ligia por WhatsApp.");
  };

  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.2fr]">
        <FadeIn>
          <Card className="overflow-hidden border-0 bg-card p-0 shadow-[var(--shadow-elegant)]">
            <div className="bg-navy px-8 py-10 text-white">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-2xl font-bold text-white ring-4 ring-white/15">
                  LD
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-gold">Tu Asesora</div>
                  <h3 className="mt-1 text-2xl font-semibold text-white">Ligia Donaire</h3>
                  <p className="text-sm text-white/70">Keller Williams Nicaragua</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/75">
                Acompañamiento personalizado en cada paso — de la visita al cierre. Resuelvo tus dudas con honestidad y rapidez.
              </p>
            </div>
            <div className="space-y-3 px-8 py-7">
              <a href={telLink} className="block">
                <Button variant="outline" size="lg" className="h-12 w-full justify-start gap-3 rounded-xl border-2">
                  <Phone className="h-4 w-4 text-primary" />
                  Llamar Ahora · +505 8760-7418
                </Button>
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="block">
                <Button size="lg" className="h-12 w-full justify-start gap-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
                  <MessageCircle className="h-4 w-4" />
                  Escribir al WhatsApp
                </Button>
              </a>
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Card className="border-0 bg-card p-8 shadow-[var(--shadow-card)] sm:p-10">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Solicita Información</span>
            <h3 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">Agenda tu visita</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Déjanos tus datos y Ligia te contactará a la brevedad.
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-medium text-foreground">Nombre</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value.slice(0, 80) })}
                  placeholder="Tu nombre completo"
                  className="mt-1.5 h-11"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground">Teléfono</label>
                <Input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value.slice(0, 25) })}
                  placeholder="+505 0000-0000"
                  className="mt-1.5 h-11"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground">Mensaje</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value.slice(0, 500) })}
                  rows={4}
                  className="mt-1.5"
                />
              </div>
              <Button type="submit" size="lg" className="h-12 w-full gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className="h-4 w-4" />
                Enviar
              </Button>
            </form>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Casa Valle Sandino · Ligia Donaire — Keller Williams Nicaragua
        </p>
        <p className="text-xs text-muted-foreground">
          Desarrollado por <span className="font-semibold text-foreground">Sacuanjoche.dev</span> · Marketing Inmobiliario de Alto Nivel
        </p>
      </div>
    </footer>
  );
}
