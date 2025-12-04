import { useEffect, useRef, useState } from "react";

/**
 * Hook to trigger animations when element enters viewport
 * Usage: const ref = useScrollReveal(); <div ref={ref}>Content</div>
 */
export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return { ref, isRevealed };
};

/**
 * Hook for parallax scroll effect
 * Usage: const offset = useParallax(0.5); <div style={{transform: `translateY(${offset}px)`}}>Content</div>
 */
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const elementTop = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
        setOffset((windowHeight - elementTop) * speed);
      }
    };

    const handleScrollThrottled = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollThrottled);
    return () => window.removeEventListener("scroll", handleScrollThrottled);
  }, [speed]);

  return { ref, offset };
};

/**
 * Hook for mouse follower cursor effect
 * Usage: useMouseFollower(); (creates floating cursor)
 */
export const useMouseFollower = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor-follow active";
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX - 10 + "px";
      cursor.style.top = e.clientY - 10 + "px";
    };

    const handleMouseEnter = () => {
      cursor.classList.add("active");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("active");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cursor.remove();
    };
  }, []);
};

/**
 * Hook for staggered children animations
 * Usage: const childRefs = useStaggerAnimation(5);
 * {items.map((item, i) => <div ref={el => childRefs.current[i] = el}>{item}</div>)}
 */
export const useStaggerAnimation = (count, delay = 0.1) => {
  const childRefs = useRef([]);

  useEffect(() => {
    childRefs.current.forEach((child, index) => {
      if (child) {
        child.style.animation = `fadeInUp 0.6s ease-out forwards`;
        child.style.animationDelay = `${delay * index}s`;
      }
    });
  }, [delay]);

  return childRefs;
};

/**
 * Hook to detect if element is in viewport
 */
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
};

/**
 * Hook for smooth number counter animation
 * Usage: const count = useCountUp(100, 2000);
 */
export const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    startRef.current = null;

    const animate = (timestamp) => {
      if (!startRef.current) {
        startRef.current = timestamp;
      }

      const progress = (timestamp - startRef.current) / duration;

      if (progress < 1) {
        setCount(Math.floor(target * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return count;
};

/**
 * Hook for word animation (highlight different words)
 */
export const useWordAnimation = (words, interval = 3000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return words[index];
};

/**
 * Hook for smooth scroll to element
 */
export const useSmoothScroll = () => {
  const scroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return scroll;
};

/**
 * Hook for fade in on scroll with offset
 */
export const useFadeInOnScroll = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isVisible;
};
