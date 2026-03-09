import { Search, Heart, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import WatchCard from "@/components/WatchCard";
import watch1 from "@/assets/watch1.jpg";
import watch2 from "@/assets/watch2.jpg";
import watch3 from "@/assets/watch3.jpg";
import watch4 from "@/assets/watch4.jpg";
import watch5 from "@/assets/watch5.jpg";
import watch6 from "@/assets/watch6.jpg";

const watches = [
  { id: 1, brand: "Rolex", model: "Submariner Date", price: "€14.500", year: 2023, image: watch1, condition: "Unworn" },
  { id: 2, brand: "Audemars Piguet", model: "Royal Oak 41mm", price: "€38.900", year: 2024, image: watch2, condition: "Like New" },
  { id: 3, brand: "Patek Philippe", model: "Nautilus 5711R", price: "€125.000", year: 2022, image: watch3, condition: "Excellent" },
  { id: 4, brand: "Omega", model: "Speedmaster Moonwatch", price: "€7.200", year: 2023, image: watch4, condition: "Unworn" },
  { id: 5, brand: "Cartier", model: "Tank Française", price: "€9.800", year: 2024, image: watch5, condition: "Like New" },
  { id: 6, brand: "IWC", model: "Portugieser Chronograph", price: "€8.500", year: 2023, image: watch6, condition: "Excellent" },
];

const categories = ["All", "Rolex", "AP", "Patek", "Omega", "Cartier"];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto">
      {/* Status bar spacer */}
      <div className="h-12" />

      {/* Header */}
      <header className="px-5 pb-4">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="font-display text-xl font-semibold tracking-wide text-foreground">
              Watches<span className="text-primary">&</span>Friends
            </h1>
          </div>
          <button className="relative p-2">
            <Heart className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Search */}
        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-2.5 bg-secondary rounded-lg px-3.5 py-2.5">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search watches..."
              className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
            />
          </div>
          <button className="bg-secondary rounded-lg p-2.5 flex items-center justify-center">
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </header>

      {/* Categories */}
      <div className="px-5 mb-5">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="px-5 mb-4">
        <p className="text-xs text-muted-foreground tracking-wider uppercase">
          {watches.length} timepieces available
        </p>
      </div>

      {/* Watch Grid */}
      <div className="px-5 pb-24 grid grid-cols-2 gap-3">
        {watches.map((watch, i) => (
          <WatchCard key={watch.id} watch={watch} index={i} />
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-card/95 backdrop-blur-md border-t border-border">
        <div className="flex items-center justify-around py-2 pb-6">
          {[
            { icon: "🏠", label: "Home", active: true },
            { icon: "🔍", label: "Explore", active: false },
            { icon: "➕", label: "Sell", active: false },
            { icon: "💬", label: "Chat", active: false },
            { icon: "👤", label: "Profile", active: false },
          ].map((item) => (
            <button key={item.label} className="flex flex-col items-center gap-0.5">
              <span className="text-lg">{item.icon}</span>
              <span
                className={`text-[10px] font-medium ${
                  item.active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Index;
