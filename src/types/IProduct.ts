// export interface IProduct {
//   id: number;
//   url: string;
//   title: string;
//   description: string;
//   image: string | null;
//   delivery_text: string; //
//   in_stock: boolean;
//   price: number;
//   sale_price: number | null;
//   form: 'On weight' | 'Prepackaged';
//   measure: number | string; //if on weight: what weight by this price; for prepackage: weight on 1 package
//   composition: string;
//   nutritional_value: string;
//   vitamins: string;
//   minerals: string;
//   rating: number; //float number
//   review: {
//     username: string;
//     message: string;
//     date: string;
//     rating: number;
//   }[];
// }

export interface IProduct {
	id: number;
	url: string;
	title: string;
	description: string;
	image: string;
	price: number;
	oldPrice: number | null;
	size: number;
	deliveryText: string;
	inStock: boolean;
	measure: string;
	rating: number;
}
