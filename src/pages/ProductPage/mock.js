import Image1 from '../../assets/images/p-1.png';
import Image2 from '../../assets/images/p-2.png';
import Image3 from '../../assets/images/p-3.png';

export const ProductMock = {
  category: 'Clay Brick',
  brand: 'Wastsontown Brick',
  name: 'Bison - Red Matt Sanded Series',
  minPrice: 1.17,
  maxPrice: 1.19,
  stock: 8500,
  dateLead: new Date('2020-12-10'),
  dateEarliestPickup: new Date('2020-12-10'),
  material: 'Manufactured Stone',
  manufacturer: 'Arriscraft',
  sizes: ['2"', '11"', '8"', '5"'],
  images: [Image1, Image2, Image3],
}

export const RelatedProductsMock = [
  {
    id: 1,
    ...ProductMock
  },
  {
    id: 2,
    ...ProductMock
  },
  {
    id: 3,
    ...ProductMock
  }
];
