# Animation & Effects Reference Guide

## Quick Animation Classes

### Entrance Animations
```html
<!-- Fade in from bottom -->
<div className="animate-fade-in-up">Content</div>

<!-- Fade in from top -->
<div className="animate-fade-in-down">Content</div>

<!-- Fade in from left -->
<div className="animate-fade-in-left">Content</div>

<!-- Fade in from right -->
<div className="animate-fade-in-right">Content</div>

<!-- Simple fade -->
<div className="animate-fade-in">Content</div>

<!-- Slide in from bottom (bouncy) -->
<div className="animate-slide-in-up">Content</div>

<!-- Slide in from top (bouncy) -->
<div className="animate-slide-in-down">Content</div>
```

### Scroll Reveal Animations
```html
<!-- Smooth reveal on scroll -->
<div className="animate-reveal-up">Content</div>

<!-- Scale reveal on scroll -->
<div className="animate-reveal-scale">Content</div>

<!-- Rotate & scale reveal -->
<div className="animate-reveal-rotate">Content</div>
```

### Continuous Animations
```html
<!-- Floating effect -->
<div className="animate-float">Content</div>

<!-- Glowing effect -->
<div className="animate-glow">Content</div>

<!-- Pulse scale -->
<div className="animate-pulse-scale">Content</div>

<!-- Subtle bounce -->
<div className="animate-bounce-subtle">Content</div>

<!-- Scroll indicator -->
<div className="animate-scroll-down">↓</div>
```

### Hover Effects
```html
<!-- Lift on hover with shadow -->
<div className="hover-lift">Content</div>

<!-- Gradient background animation -->
<div className="gradient-animated">Content</div>

<!-- Gradient text -->
<div className="gradient-text">Gradient Text</div>

<!-- Glass effect -->
<div className="glass-effect backdrop-blur-xl">Content</div>
```

---

## Hook Usage Examples

### 1. useScrollReveal
Triggers animation when element enters viewport.

```jsx
import { useScrollReveal } from "../hooks/useAnimations";

export default function Section() {
  const { ref, isRevealed } = useScrollReveal();
  
  return (
    <section ref={ref}>
      <h2 className={isRevealed ? "animate-fade-in-up" : ""}>
        This animates when scrolled into view
      </h2>
      <p className={`${isRevealed ? "animate-fade-in" : ""}`} style={{
        transitionDelay: "0.2s"
      }}>
        This reveals slightly delayed
      </p>
    </section>
  );
}
```

### 2. useParallax
Creates smooth parallax scroll effect.

```jsx
import { useParallax } from "../hooks/useAnimations";

export default function ParallaxSection() {
  const { ref, offset } = useParallax(0.5);
  
  return (
    <div ref={ref} style={{
      transform: `translateY(${offset}px)`,
      transition: 'transform 0.1s ease-out'
    }}>
      Parallax background moves slower than scroll
    </div>
  );
}
```

### 3. useMouseFollower
Creates a custom cursor that follows the mouse.

```jsx
import { useMouseFollower } from "../hooks/useAnimations";

export default function App() {
  useMouseFollower(); // Call once at app level
  
  return (
    <div>
      {/* Rest of app - cursor will follow automatically */}
    </div>
  );
}
```

### 4. useStaggerAnimation
Stagger children animations with delay.

```jsx
import { useStaggerAnimation } from "../hooks/useAnimations";

export default function StaggerList({ items }) {
  const childRefs = useStaggerAnimation(items.length, 0.1);
  
  return (
    <ul>
      {items.map((item, i) => (
        <li 
          key={i} 
          ref={el => childRefs.current[i] = el}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
```

### 5. useInView
Detect if element is currently visible in viewport.

```jsx
import { useInView } from "../hooks/useAnimations";

export default function Counter() {
  const { ref, isInView } = useInView();
  
  return (
    <div ref={ref}>
      {isInView && (
        <h2 className="animate-fade-in">Element is visible!</h2>
      )}
    </div>
  );
}
```

### 6. useCountUp
Animate a number from 0 to target value.

```jsx
import { useCountUp } from "../hooks/useAnimations";

export default function Stats() {
  const projects = useCountUp(50, 2000);
  
  return <div className="text-4xl font-bold">{projects}+</div>;
}
```

### 7. useWordAnimation
Cycle through different words.

```jsx
import { useWordAnimation } from "../hooks/useAnimations";

export default function Hero() {
  const word = useWordAnimation(
    ["Developer", "Designer", "Creator"],
    3000
  );
  
  return <h1>I'm a <span className="gradient-text">{word}</span></h1>;
}
```

### 8. useSmoothScroll
Smoothly scroll to elements.

```jsx
import { useSmoothScroll } from "../hooks/useAnimations";

export default function Navigation() {
  const smoothScroll = useSmoothScroll();
  
  return (
    <button onClick={() => smoothScroll("projects")}>
      Jump to Projects
    </button>
  );
}
```

---

## Advanced Patterns

### Staggered List with useScrollReveal
```jsx
import { useScrollReveal } from "../hooks/useAnimations";

export default function ProjectsList({ projects }) {
  const { ref, isRevealed } = useScrollReveal();
  
  return (
    <div ref={ref} className="space-y-6">
      {projects.map((project, i) => (
        <div
          key={i}
          style={{
            animation: isRevealed ? `fadeInUp 0.6s ease-out forwards` : "none",
            animationDelay: `${i * 0.1}s`,
            opacity: 0
          }}
        >
          {/* Project card */}
        </div>
      ))}
    </div>
  );
}
```

### Scroll Reveal with Custom Timing
```jsx
import { useScrollReveal } from "../hooks/useAnimations";

export default function CustomTiming() {
  const { ref, isRevealed } = useScrollReveal({
    threshold: 0.2, // Trigger when 20% visible
    rootMargin: "0px 0px -100px 0px" // Trigger 100px before viewport
  });
  
  return <div ref={ref}>{/* Content */}</div>;
}
```

### Parallax with Multiple Layers
```jsx
import { useParallax } from "../hooks/useAnimations";

export default function ParallaxLayers() {
  const { ref: bgRef, offset: bgOffset } = useParallax(0.3);
  const { ref: midRef, offset: midOffset } = useParallax(0.6);
  const { ref: fgRef, offset: fgOffset } = useParallax(1);
  
  return (
    <section>
      <div ref={bgRef} style={{transform: `translateY(${bgOffset}px)`}}>
        Background
      </div>
      <div ref={midRef} style={{transform: `translateY(${midOffset}px)`}}>
        Middle
      </div>
      <div ref={fgRef} style={{transform: `translateY(${fgOffset}px)`}}>
        Foreground
      </div>
    </section>
  );
}
```

### Combined Effects Example
```jsx
import { useScrollReveal, useParallax } from "../hooks/useAnimations";

export default function HeroSection() {
  const { ref: titleRef, isRevealed } = useScrollReveal();
  const { ref: bgRef, offset } = useParallax(0.5);
  
  return (
    <section>
      {/* Parallax background */}
      <div 
        ref={bgRef}
        style={{
          transform: `translateY(${offset}px)`,
          position: "absolute",
          inset: 0,
          backgroundImage: "url(...)"
        }}
      />
      
      {/* Reveal content */}
      <div ref={titleRef}>
        <h1 className={isRevealed ? "animate-fade-in-up" : ""}>
          Hero Title
        </h1>
        <p style={{
          animation: isRevealed ? "fadeInUp 0.6s ease-out 0.2s forwards" : "none",
          opacity: 0
        }}>
          Subtitle with delay
        </p>
      </div>
    </section>
  );
}
```

---

## Timing Recommendations

### Page Load Animations
- Duration: 0.6s - 1s
- Easing: ease-out, cubic-bezier(0.23, 1, 0.32, 1)
- Stagger delay: 0.1s - 0.15s between items

### Hover Animations
- Duration: 0.2s - 0.3s
- Easing: ease, cubic-bezier(0.4, 0, 0.2, 1)
- Transform: scale, translateY, rotate

### Scroll Reveals
- Duration: 0.7s - 0.8s
- Easing: ease-out
- Trigger threshold: 10% - 20% of element visible

### Continuous Animations
- Duration: 2s - 4s
- Easing: ease-in-out, linear
- Infinite loop: animation-iteration-count: infinite

---

## Browser Compatibility

### Fully Supported
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Graceful Degradation
- Older browsers: Animations still work, slightly different timing
- No animation (prefers-reduced-motion): Still fully functional
- Mobile browsers: Optimized for touch

---

## Performance Tips

1. **Use CSS animations over JavaScript** ✓ (This design does this)
2. **Limit simultaneous animations** - Group related animations
3. **Use will-change sparingly** - Only on elements that animate
4. **Debounce scroll listeners** - Already done in hooks
5. **Use requestAnimationFrame** - Already done for parallax
6. **Test on real devices** - Performance varies

---

## Customization

### Change Animation Duration
```css
/* In animations.css, modify specific animation */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Then change in utility class */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards; /* Changed from 0.6s */
}
```

### Add New Animation
```css
@keyframes slideInFromLeft {
  from { 
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-from-left {
  animation: slideInFromLeft 0.6s ease-out forwards;
}
```

### Create Animation Variants
```css
/* Slow version */
.animate-fade-in-up-slow {
  animation: fadeInUp 1.2s ease-out forwards;
}

/* Fast version */
.animate-fade-in-up-fast {
  animation: fadeInUp 0.3s ease-out forwards;
}

/* With delay */
.animate-fade-in-up-delayed {
  animation: fadeInUp 0.6s ease-out 0.3s forwards;
}
```

---

## Accessibility

### Reduced Motion Support
All animations include support for `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

This ensures animations don't cause issues for users sensitive to motion.

### Focus Indicators
Always visible on interactive elements:
```css
button:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
```

---

## Debugging

### Check if animation is running
```css
/* Temporarily add border to see when animation triggers */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  border: 2px solid red; /* Remove after debugging */
}
```

### Test animation timing
```jsx
// Use Chrome DevTools -> Elements -> Animations
// Or add console.log at animation start/end
```

### Visual debugging
```jsx
// Add visual indicator
{isRevealed && <div className="text-green-500">✓ Revealed</div>}
```

---

## Summary

- 20+ pre-built animation classes
- 8 custom hooks for common patterns
- Zero external animation libraries
- Full browser support
- Accessibility built-in
- Highly customizable
- Production-ready code

Happy animating! 🎨✨
