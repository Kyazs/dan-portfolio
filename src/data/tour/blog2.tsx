export const blog2 = {
    id: 2,
    title: "Mastering React Hooks: A Deep Dive",
    summary: "A comprehensive guide to React Hooks, their usage, and advanced patterns for modern React apps.",
    tags: ["react", "hooks", "javascript"],
    content: `# Mastering React Hooks: A Deep Dive

## Why Hooks Changed Everything

Before hooks, managing state in React felt like juggling flaming swords. Now? Everything just clicks. No more class components, no more lifecycle confusion—just pure, functional magic.

### The Essentials

- **useState:** Local state, made simple.
- **useEffect:** Side effects, handled cleanly.
- **useContext:** Global data, no prop drilling.

### Level Up: Custom Hooks

Want to reuse logic across components? Build your own custom hooks! It’s like creating your own set of superpowers.

> "With great hooks comes great responsibility."

### Watch Out For

- Performance pitfalls
- Dependency array surprises

~~~javascript
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = 'You clicked ${'count'} times';
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
~~~

## Final Thoughts

Experiment, break things, and master the art of hooks. Your future self (and your codebase) will thank you!
`,
    date: "2025-06-22",
    image: "/proj/projectTwo.png",
    readTime: 7,
};
