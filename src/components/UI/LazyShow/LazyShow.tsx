import { useOnScreen } from '@/hooks/useOnScreen';
import { motion, useAnimation } from 'framer-motion';
import { ReactElement, useEffect, useRef } from 'react';

export const LazyShowY = ({
  children,
  className,
}: {
  children: ReactElement;
  className?: string;
}) => {
  const controls = useAnimation();
  const rootRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(rootRef);

  useEffect(() => {
    if (onScreen) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      });
    } else {
      controls.start({
        y: 50,
        opacity: 0,
      });
    }
  }, [controls, onScreen]);

  return (
    <motion.div
      ref={rootRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const LazyShowX = ({
  children,
  className,
}: {
  children: ReactElement;
  className?: string;
}) => {
  const controls = useAnimation();
  const rootRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(rootRef);

  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      });
    } else {
      controls.start({
        x: 50,
        opacity: 0,
      });
    }
  }, [controls, onScreen]);

  return (
    <motion.div
      ref={rootRef}
      initial={{ opacity: 0, x: 50 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};
