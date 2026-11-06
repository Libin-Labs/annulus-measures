function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function length(v: number): void {
  finite(v, 1e-9, 1e9);
}
export function annulusMeasures(
  inner: number,
  outer: number,
): { area: number; width: number; innerCircumference: number; outerCircumference: number } {
  length(outer);
  finite(inner, 0, outer);
  return {
    area: Math.PI * (outer - inner) * (outer + inner),
    width: outer - inner,
    innerCircumference: 2 * Math.PI * inner,
    outerCircumference: 2 * Math.PI * outer,
  };
}
