import { useEffect } from 'react';

export function useNavScroll(navRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const onScroll = () => {
      el.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [navRef]);
}
