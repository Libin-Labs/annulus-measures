import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('analytic fixture', () => {
  assert.ok(Math.abs(api.annulusMeasures(1, 2).area - 3 * Math.PI) < 1e-10);
});
test('disk special case', () => {
  assert.equal(api.annulusMeasures(0, 2).area, 4 * Math.PI);
});
test('zero width', () => {
  assert.equal(api.annulusMeasures(2, 2).area, 0);
});
test('thin ring resolution', () => {
  const p = api.annulusMeasures(1e9 - 1, 1e9);
  assert.equal(p.area, Math.PI * 1999999999);
});
test('invalid ordering', () => {
  assert.throws(() => api.annulusMeasures(3, 2));
  assert.throws(() => api.annulusMeasures(-1, 2));
});
test('type contract', () => {
  assert.throws(() => api.annulusMeasures('1', 2));
});
