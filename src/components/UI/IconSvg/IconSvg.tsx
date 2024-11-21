import sprite from '@assets/sprite.svg';

const IconSvg = ({ id, className }: { id: string; className?: string }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  );
};

export default IconSvg;
