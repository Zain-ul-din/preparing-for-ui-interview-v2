// bun test src/problems/05-throttle/test/throttle.test.ts

export function throttle<T extends (...args: any[]) => void, This>(
  fn: T,
  delay: number,
): (...args: any[]) => void {
  let lastTimeCalled: Date | null = null
  return function (this: This, ...args: Parameters<T>) {
    const timeElapsed =
      lastTimeCalled === null ? delay : Number(new Date()) - Number(lastTimeCalled)
    if (timeElapsed >= delay) {
      fn.apply(this, args)
      lastTimeCalled = new Date()
    }
  }
}

// --- Examples ---
// Uncomment to test your implementation:

// const log = throttle((msg: string) => console.log(msg), 300)
// log('a')  // fires immediately → "a"
// log('b')  // ignored (within 300ms)
// log('c')  // ignored (within 300ms)
// setTimeout(() => log('d'), 400)  // fires → "d" (300ms passed)
