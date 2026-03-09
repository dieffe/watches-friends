import { Heart } from "lucide-react";
import { useState } from "react";

interface Watch {
  id: number;
  brand: string;
  model: string;
  price: string;
  year: number;
  image: string;
  condition: string;
}

interface WatchCardProps {
  watch: Watch;
  index: number;
}

const WatchCard = ({ watch, index }: WatchCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="animate-fade-in rounded-xl overflow-hidden bg-card group cursor-pointer"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={watch.image}
          alt={`${watch.brand} ${watch.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-2 right-2 p-1.5 rounded-full bg-background/60 backdrop-blur-sm"
        >
          <Heart
            className={`w-3.5 h-3.5 transition-colors ${
              liked ? "fill-primary text-primary" : "text-foreground/70"
            }`}
          />
        </button>
        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-background/60 backdrop-blur-sm text-[10px] font-medium text-foreground">
          {watch.condition}
        </span>
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-[10px] text-primary font-medium tracking-widest uppercase mb-0.5">
          {watch.brand}
        </p>
        <p className="text-xs text-foreground font-medium leading-tight mb-1.5 line-clamp-1">
          {watch.model}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-sm font-display font-semibold text-foreground">
            {watch.price}
          </p>
          <p className="text-[10px] text-muted-foreground">{watch.year}</p>
        </div>
      </div>
    </div>
  );
};

export default WatchCard;
