
// React
import { useState, useRef } from 'react';

// components
import Card from './card';

// articles
import { card1, card2, card3 } from '../articles/cards';

const cardList = [card1, card2, card3]

const cards = cardList.map((card) => (
  <Card
    name={card.name}
    background={card.background}
    description={card.description}
    link={card.link}
    />
))

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [pause, setPause] = useState<boolean>(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      if (!pause) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }
    }, 5000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startCarousel = () => {
    startAutoScroll();

    return () => {
      stopAutoScroll();
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      }
    };
  };

  const handleInit = () => {
    if (!intervalRef.current) {
      startCarousel();
    }
  };

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    stopAutoScroll();
    setPause(true);

    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setPause(false);
      startAutoScroll();
    }, 2000);
  };

  handleInit();

  return (
    <div className="flex flex-col grow w-full h-full">
      <div className="flex grow">
        {cards[activeIndex]}
      </div>
      <div className="flex self-center">
        {cards.map((_, index) => (
          <button
            key={index}
            className={` m-1 ${index === activeIndex ? 'active-button' : ' rounded-full'}`}
            onClick={() => handleSelect(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
