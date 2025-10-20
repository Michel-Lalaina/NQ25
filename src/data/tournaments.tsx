// src/data/tournaments.ts
export interface Tournament {
  id: number;
  title: string;
  date: string;
  location: string;
  players: number;
  image: string;
}

export const tournaments: Tournament[] = [
  {
    id: 1,
    title: "Mon Tournoi #1",
    date: "05 - 10 Avril 2025",
    location: "Lille, France",
    players: 32,
    image: "/images/t1.jpg",
  },
  {
    id: 2,
    title: "Mon Tournoi #2",
    date: "06 - 12 Avril 2025",
    location: "Lyon, France",
    players: 24,
    image: "/images/t2.jpg",
  },
  {
    id: 3,
    title: "Mon Tournoi #3",
    date: "10 - 15 Avril 2025",
    location: "Paris, France",
    players: 18,
    image: "/images/t3.jpg",
  },
  {
    id: 4,
    title: "Mon Tournoi #4",
    date: "20 - 26 Avril 2025",
    location: "Bordeaux, France",
    players: 30,
    image: "/images/t4.jpg",
  },
  {
    id: 5,
    title: "Mon Tournoi #5",
    date: "28 - 30 Avril 2025",
    location: "Nice, France",
    players: 22,
    image: "/images/t5.jpg",
  },
];
