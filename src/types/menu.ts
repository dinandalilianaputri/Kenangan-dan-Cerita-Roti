export type MenuCategory = 'Coffee' | 'Non-Coffee' | 'Cerita Roti';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  basePrice: number;
  image: string; // Gunakan URL Unsplash berkualitas tinggi atau placeholder lokal yang relevan
  isBestSeller?: boolean;
  isDrink: boolean; // true untuk memunculkan opsi Ice/Hot, Size, Sugar Level
}

export type DrinkTemperature = 'Ice' | 'Hot';
export type DrinkSize = 'Regular' | 'Large';
export type SugarLevel = 'Normal (100%)' | 'Less Sugar (70%)' | 'Slight Sugar (50%)' | 'No Sugar (0%)';
export type IceLevel = 'Normal Ice' | 'Less Ice' | 'No Ice';

export interface CartItemOption {
  temperature?: DrinkTemperature;
  size?: DrinkSize;
  sugarLevel?: SugarLevel;
  iceLevel?: IceLevel;
  notes?: string;
}

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  quantity: number;
  selectedOptions?: CartItemOption;
  unitPrice: number;
}
