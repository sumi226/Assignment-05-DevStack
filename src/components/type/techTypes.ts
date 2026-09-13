export interface ITechnology {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
  badgeIcon: string;
  categoryChip: string;
  ratingIcon: string;
  action: {
    label: string;
    type: string;
  };
}