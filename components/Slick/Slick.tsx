import React, { useEffect, useRef, useState } from 'react';

import cx from 'classnames';
import { useDebounce } from 'use-debounce';

import css from './Slick.module.css';

interface SlickProps {
  children: React.ReactNode | React.ReactNode[];
  step: number;
}

const SCROLL_DURATION = 300;

type Transform = {
  value: number;
  duration: number;
};

export const Slick: React.FC<SlickProps> = ({ children, step }) => {
  const slidesRef = useRef<HTMLDivElement>(null);

  const [slickTransform, setSlickTransform] = useState<Transform>({
    value: 0,
    duration: SCROLL_DURATION,
  });
  const [isRightArrowVisible, setIsRightArrowVisible] = useState<boolean>(true);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState<boolean>(false);

  // const setPromisedTransformDuration = (newState: Transform) =>
  //   new Promise(() => setSlickTransform(newState));

  const handleScroll = () => {
    const scrollLeftValue = slidesRef.current?.scrollLeft || 0;
    const sliderClientWidth = slidesRef.current?.offsetWidth || 0;
    const sliderScrollWidth = slidesRef.current?.scrollWidth || 0;

    if (scrollLeftValue < 50) {
      return setIsLeftArrowVisible(false);
    }
    if (scrollLeftValue > sliderScrollWidth - sliderClientWidth - 50) {
      return setIsRightArrowVisible(false);
    }

    setIsLeftArrowVisible(true);
    setIsRightArrowVisible(true);
  };

  const [debouncedScrollHandler] = useDebounce(handleScroll, 800);

  let scrollStep: number = step;

  useEffect(() => {
    slidesRef.current?.addEventListener('scroll', debouncedScrollHandler);

    return () => {
      slidesRef.current?.removeEventListener('scroll', debouncedScrollHandler);
    };
  }, []);

  const scrollContent = async (direction: 'left' | 'right') => {
    const scrollDefaultStepSign = direction === 'left' ? 1 : -1;
    const scrollLeftValue = slidesRef.current?.scrollLeft || 0;
    const sliderClientWidth = slidesRef.current?.offsetWidth || 0;
    const sliderScrollWidth = slidesRef.current?.scrollWidth || 0;

    if (direction === 'left') {
      scrollStep = scrollLeftValue > step ? step : scrollLeftValue;

      setIsRightArrowVisible(true);
      if (scrollLeftValue < step) {
        setIsLeftArrowVisible(false);
      }
    } else {
      scrollStep =
        sliderClientWidth - scrollLeftValue < step
          ? sliderScrollWidth - sliderClientWidth - scrollLeftValue
          : step;

      setIsLeftArrowVisible(true);
      if (sliderClientWidth - scrollLeftValue < step) {
        setIsRightArrowVisible(false);
      }
    }

    setSlickTransform({
      value: slickTransform.value + scrollDefaultStepSign * scrollStep,
      duration: SCROLL_DURATION,
    });

    setTimeout(async () => {
      setSlickTransform({ value: 0, duration: 0 });

      if (slidesRef.current) {
        slidesRef.current.scrollTo({
          left: slidesRef.current.scrollLeft - scrollDefaultStepSign * scrollStep,
        });
      }
    }, SCROLL_DURATION + 10);
  };

  return (
    <div className={css.slickConteinerWrapper}>
      <div
        className={cx(css.sliderArrow, css.leftArrow)}
        // Icon={Icon.ArrowLeft}
        style={{
          visibility: isLeftArrowVisible ? 'visible' : 'hidden',
          opacity: isLeftArrowVisible ? 0.8 : 0,
        }}
        onClick={() => scrollContent('left')}
      >
        <div className='bg-gray-500 p-2 cursor-pointer rounded-full'>
          <IconArrowLeft />
        </div>
      </div>
      <div
        className={cx(css.sliderArrow, css.rightArrow)}
        // Icon={Icon.ArrowRight}
        style={{
          visibility: isRightArrowVisible ? 'visible' : 'hidden',
          opacity: isRightArrowVisible ? 0.8 : 0,
        }}
        onClick={() => {
          console.log('clicked right')
          scrollContent('right')
        }}
      >
        <div className='bg-gray-500 p-2 cursor-pointer rounded-full'>
          <IconArrowRight />
        </div>

      </div>
      <div className={css.slickConteiner}>
        <div ref={slidesRef} className={css.contentWrapper}>
          <div
            className={css.content}
            style={{
              transform: `translateX(${slickTransform.value}px)`,
              transitionDuration: `${slickTransform.duration}ms`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const IconArrowRight = () => {
  return (
    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
    </svg>
  )
}

const IconArrowLeft = () => {
  return (
    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
    </svg>
  )
}