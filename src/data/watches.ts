import watch1 from "@/assets/watch1.jpg";
import watch2 from "@/assets/watch2.jpg";
import watch3 from "@/assets/watch3.jpg";
import watch4 from "@/assets/watch4.jpg";
import watch5 from "@/assets/watch5.jpg";
import watch6 from "@/assets/watch6.jpg";

export interface WatchListing {
  id: number;
  brand: string;
  model: string;
  price: string;
  year: number;
  image: string;
  images: string[];
  condition: string;
  location: string;
  description: string;
  seller: string;
  specs: Array<{
    label: string;
    value: string;
  }>;
}

export const watches: WatchListing[] = [
  {
    id: 1,
    brand: "Rolex",
    model: "Submariner Date",
    price: "€14.500",
    year: 2023,
    image: watch1,
    images: [watch1, watch4, watch6],
    condition: "Unworn",
    location: "Milano",
    seller: "Luca Ferretti",
    description:
      "Submariner Date full set con finiture impeccabili, lunetta in ceramica e bracciale Oyster. Un esemplare pronto da indossare, selezionato per chi cerca un diver iconico in condizioni pari al nuovo.",
    specs: [
      { label: "Referenza", value: "126610LN" },
      { label: "Cassa", value: "41 mm acciaio Oystersteel" },
      { label: "Movimento", value: "Automatico calibro 3235" },
      { label: "Corredo", value: "Box e documenti originali" },
      { label: "Garanzia", value: "Residua ufficiale fino al 2028" },
      { label: "Disponibilità", value: "Consegna immediata" },
    ],
  },
  {
    id: 2,
    brand: "Audemars Piguet",
    model: "Royal Oak 41mm",
    price: "€38.900",
    year: 2024,
    image: watch2,
    images: [watch2, watch1, watch5],
    condition: "Like New",
    location: "Lugano",
    seller: "Marco Bellini",
    description:
      "Royal Oak 41 mm con quadrante tapisserie, proporzioni perfette e presenza raffinata al polso. Selezionato per collezionisti che cercano un pezzo moderno con forte desiderabilità sul mercato secondario.",
    specs: [
      { label: "Referenza", value: "15510ST.OO.1320ST.02" },
      { label: "Cassa", value: "41 mm acciaio satinato" },
      { label: "Movimento", value: "Automatico calibro 4302" },
      { label: "Quadrante", value: "Bleu nuit, Petite Tapisserie" },
      { label: "Corredo", value: "Full set boutique" },
      { label: "Stato", value: "Indossato pochissimo" },
    ],
  },
  {
    id: 3,
    brand: "Patek Philippe",
    model: "Nautilus 5711R",
    price: "€125.000",
    year: 2022,
    image: watch3,
    images: [watch3, watch2, watch6],
    condition: "Excellent",
    location: "Roma",
    seller: "Atelier Tempo",
    description:
      "Nautilus in oro rosa con quadrante brunito e bracciale integrato. Un annuncio destinato a chi privilegia esclusività, presenza e storicità di un modello ormai difficilmente reperibile in questa configurazione.",
    specs: [
      { label: "Referenza", value: "5711/1R-001" },
      { label: "Cassa", value: "40 mm oro rosa" },
      { label: "Movimento", value: "Automatico calibro 26-330 S C" },
      { label: "Quadrante", value: "Bruno soleil con sfumatura nera" },
      { label: "Corredo", value: "Archivi e certificati inclusi" },
      { label: "Ritiro", value: "Su appuntamento" },
    ],
  },
  {
    id: 4,
    brand: "Omega",
    model: "Speedmaster Moonwatch",
    price: "€7.200",
    year: 2023,
    image: watch4,
    images: [watch4, watch1, watch3],
    condition: "Unworn",
    location: "Torino",
    seller: "Studio Crono",
    description:
      "Moonwatch con movimento Co-Axial Master Chronometer e look fedele all'originale. Ideale per chi desidera un cronografo iconico, equilibrato e già pronto per entrare in rotazione quotidiana.",
    specs: [
      { label: "Referenza", value: "310.30.42.50.01.001" },
      { label: "Cassa", value: "42 mm acciaio" },
      { label: "Movimento", value: "Manuale calibro 3861" },
      { label: "Vetro", value: "Esalite frontale" },
      { label: "Corredo", value: "Cofanetto Moonwatch completo" },
      { label: "Spedizione", value: "Assicurata in 24/48h" },
    ],
  },
  {
    id: 5,
    brand: "Cartier",
    model: "Tank Française",
    price: "€9.800",
    year: 2024,
    image: watch5,
    images: [watch5, watch2, watch4],
    condition: "Like New",
    location: "Parigi",
    seller: "Maison Horlogère",
    description:
      "Tank Française di ultima generazione con proporzioni eleganti e forte identità Cartier. Un'opzione sofisticata per chi cerca un pezzo versatile, urbano e immediatamente riconoscibile.",
    specs: [
      { label: "Referenza", value: "WSTA0067" },
      { label: "Cassa", value: "32 x 27 mm acciaio" },
      { label: "Movimento", value: "Automatico" },
      { label: "Quadrante", value: "Argenté con numeri romani" },
      { label: "Corredo", value: "Box, documenti e ricevuta" },
      { label: "Condizione", value: "Pari al nuovo" },
    ],
  },
  {
    id: 6,
    brand: "IWC",
    model: "Portugieser Chronograph",
    price: "€8.500",
    year: 2023,
    image: watch6,
    images: [watch6, watch3, watch1],
    condition: "Excellent",
    location: "Firenze",
    seller: "Galleria del Tempo",
    description:
      "Portugieser Chronograph con quadrante pulito, anse sottili e ottima vestibilità. Pensato per chi apprezza l'eleganza classica di un cronografo da collezione con indole contemporanea.",
    specs: [
      { label: "Referenza", value: "IW371620" },
      { label: "Cassa", value: "41 mm acciaio" },
      { label: "Movimento", value: "Automatico calibro 69355" },
      { label: "Cinturino", value: "Pelle blu IWC" },
      { label: "Corredo", value: "Full set 2023" },
      { label: "Ritiro", value: "Boutique partner" },
    ],
  },
];

export const getWatchById = (id: number) => watches.find((watch) => watch.id === id);