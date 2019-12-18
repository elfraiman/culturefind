import React from 'react';
import css from './CompanyCard.module.scss';
import { useSpring, animated } from 'react-spring';

interface ICompanyProps {
  title: string;
  subtitle: string;
  location: string;
  logo: string;
  positions: string;
  color?: string;
}

const CompanyCard = ({
  title,
  subtitle,
  location,
  logo,
  positions,
  color
}: ICompanyProps) => {
  const calc: any = (x: number, y: number) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1
  ];

  const trans: any = (x: number, y: number, s: number) =>
    `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
      className={css.card}
    >
      <div className={css.cardBody}>
        <div
          className={css.img}
          style={{
            backgroundImage: `url(${logo})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className={css.cardFooter} style={{ backgroundColor: color }}>
        <span>{location}</span>
        <p> {positions} Available positions</p>
      </div>
    </animated.div>
  );
};

export default CompanyCard;
