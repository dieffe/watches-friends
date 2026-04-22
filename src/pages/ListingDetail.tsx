import { ArrowLeft, BadgeCheck, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { getWatchById } from "@/data/watches";

const ListingDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const watch = useMemo(() => getWatchById(Number(id)), [id]);

  if (!watch) {
    return (
      <main className="min-h-screen bg-background max-w-md mx-auto px-6 py-16 flex flex-col items-center justify-center text-center">
        <p className="text-xs font-medium tracking-[0.24em] uppercase text-primary mb-3">Annuncio non trovato</p>
        <h1 className="font-display text-3xl text-foreground mb-3">Questo orologio non è più disponibile</h1>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          Torna alla selezione principale per scoprire altri pezzi verificati della collezione.
        </p>
        <Button asChild>
          <Link to="/">Rientra nella vetrina</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background max-w-md mx-auto pb-28">
      <div className="relative">
        <div className="absolute left-4 right-4 top-14 z-10 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/88 text-foreground shadow-sm backdrop-blur-sm"
            aria-label="Torna indietro"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="rounded-full border border-border bg-background/88 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-primary backdrop-blur-sm">
            {watch.condition}
          </div>
        </div>

        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent className="ml-0">
            {watch.images.map((image, index) => (
              <CarouselItem key={`${watch.id}-${index}`} className="pl-0">
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img
                    src={image}
                    alt={`${watch.brand} ${watch.model} vista ${index + 1}`}
                    className="h-full w-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <section className="px-5 pt-6">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.28em] text-primary">{watch.brand}</p>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-[2rem] leading-none text-foreground">{watch.model}</h1>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{watch.location}</span>
              <span className="text-border">•</span>
              <span>{watch.year}</span>
            </div>
          </div>
          <p className="font-display text-2xl leading-none text-foreground">{watch.price}</p>
        </div>
      </section>

      <section className="mt-6 border-y border-border bg-card px-5 py-4">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="space-y-1">
            <ShieldCheck className="mx-auto h-4 w-4 text-primary" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Verifica</p>
            <p className="text-xs font-medium text-foreground">Esclusiva</p>
          </div>
          <div className="space-y-1">
            <BadgeCheck className="mx-auto h-4 w-4 text-primary" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Corredo</p>
            <p className="text-xs font-medium text-foreground">Full set</p>
          </div>
          <div className="space-y-1">
            <MessageCircle className="mx-auto h-4 w-4 text-primary" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Risposta</p>
            <p className="text-xs font-medium text-foreground">Rapida</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-6">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Venditore</p>
            <p className="mt-1 text-sm font-medium text-foreground">{watch.seller}</p>
          </div>
          <p className="text-xs text-primary">Annuncio verificato</p>
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="mb-2 font-display text-xl text-foreground">Dettagli</h2>
            <p className="text-sm leading-7 text-muted-foreground">{watch.description}</p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl text-foreground">Specifiche tecniche</h2>
            <dl className="space-y-3">
              {watch.specs.map((spec) => (
                <div key={spec.label} className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-b-0 last:pb-0">
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{spec.label}</dt>
                  <dd className="max-w-[58%] text-right text-sm text-foreground">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 border-t border-border bg-background/96 px-5 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="icon" className="shrink-0 rounded-full" aria-label="Salva annuncio">
            <MessageCircle className="h-4 w-4" />
          </Button>
          <Button className="h-12 flex-1 text-sm font-semibold">Contatta il venditore</Button>
        </div>
      </div>
    </main>
  );
};

export default ListingDetail;