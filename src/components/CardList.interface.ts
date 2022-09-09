export interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

export interface CardsProps {
  cards: Card[];
}
