export function ExpensiveComponent() {
  // Block 500ms
  const start = performance.now();
  while (performance.now() - start < 5) {
    // Do nothing
  }

  return <div>ExpensiveComponent</div>;
}
