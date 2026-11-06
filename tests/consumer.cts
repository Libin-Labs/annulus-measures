import { annulusMeasures } from '@lp-labs/annulus-measures';
if (Math.abs(annulusMeasures(1, 2).area - 3 * Math.PI) > 1e-10) throw new Error('Geometry');
// @ts-expect-error invalid argument must be rejected by declarations
annulusMeasures('1', 2);
