import React from 'react';
import Card from './Card';
import './CardList.css';

const SNEAKERS_DATA = [
  {
    id: 1,
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '12 999',
    image: '/image 5-1.jpg',
    isSelected: false
  },
  {
    id: 2,
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: '12 999',
    image: '/image 5-2.jpg',
    isSelected: true
  },
  {
    id: 3,
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '8 499',
    image: '/image 5-3.jpg',
    isSelected: false
  },
  {
    id: 4,
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: '8 999',
    image: '/image 5-4.jpg',
    isSelected: false
  },
  {
    id: 5,
    title: 'Мужские Кроссовки Under Armour Curry 8',
    price: '15 199',
    image: '/image 5-5.jpg',
    isSelected: false
  },
  {
    id: 6,
    title: 'Мужские Кроссовки Nike Kyrie 7',
    price: '11 299',
    image: '/image 5-6.jpg',
    isSelected: false
  },
  {
    id: 7,
    title: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: '10 799',
    image: '/image 5-7.jpg',
    isSelected: false
  },
  {
    id: 8,
    title: 'Мужские Кроссовки Nike LeBron XVIII',
    price: '16 499',
    image: '/image 5-8.jpg',
    isSelected: false
  },
  {
    id: 9,
    title: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: '13 999',
    image: '/image 5-9.jpg',
    isSelected: false
  },
  {
    id: 10,
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '8 499',
    image: '/image 5-10.jpg',
    isSelected: false
  },
  {
    id: 11,
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: '8 999',
    image: '/image 5-11.jpg',
    isSelected: false
  },
  {
    id: 12,
    title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
    price: '11 299',
    image: '/image 5.jpg',
    isSelected: false
  }
];

const CardList = () => {
  return (
    <div className="card-list-container">
      <div className="card-list-header">
        <h1 className="section-title">Все кроссовки</h1>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Поиск..." />
        </div>
      </div>
      <div className="card-list">
        {SNEAKERS_DATA.map(sneaker => (
          <Card 
            key={sneaker.id}
            image={sneaker.image}
            title={sneaker.title}
            price={sneaker.price}
            isSelected={sneaker.isSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList; 