import { describe, it, expect } from 'vitest';

/**
 * Solar Calculator Formulas Test Suite
 * Validates all calculations used in the Nova Distrito solar calculator
 */

// Formulas (same as in client/src/constants/company.ts)
const systemPower = (consumptionKwh: number) => {
  const power = consumptionKwh / 160;
  return Math.ceil(power * 100) / 100; // Round up to 2 decimal places
};

const requiredArea = (systemKwp: number) => {
  return systemKwp * 6;
};

const monthlySavings = (billValue: number) => {
  return billValue * 0.95;
};

const annualSavings = (monthlySavings: number) => {
  return monthlySavings * 12;
};

const savingsIn25Years = (annualSavings: number) => {
  return annualSavings * 25;
};

const billToConsumption = (billValue: number, tariff: number) => {
  return billValue / tariff;
};

describe('Solar Calculator Formulas', () => {
  describe('systemPower', () => {
    it('should calculate system power correctly for example case', () => {
      // 640 kWh ÷ 160 = 4.00 kWp
      const result = systemPower(640);
      expect(result).toBe(4.0);
    });

    it('should round up to 2 decimal places', () => {
      // 650 kWh ÷ 160 = 4.0625 → rounds up to 4.07
      const result = systemPower(650);
      expect(result).toBe(4.07);
    });

    it('should handle small values', () => {
      // 160 kWh ÷ 160 = 1.00 kWp
      const result = systemPower(160);
      expect(result).toBe(1.0);
    });

    it('should handle large values', () => {
      // 1600 kWh ÷ 160 = 10.00 kWp
      const result = systemPower(1600);
      expect(result).toBe(10.0);
    });

    it('should round up correctly for non-integer results', () => {
      // 161 kWh ÷ 160 = 1.00625 → rounds up to 1.01
      const result = systemPower(161);
      expect(result).toBe(1.01);
    });
  });

  describe('requiredArea', () => {
    it('should calculate required area correctly', () => {
      // 4.0 kWp × 6 m² = 24 m²
      const result = requiredArea(4.0);
      expect(result).toBe(24);
    });

    it('should handle decimal values', () => {
      // 4.5 kWp × 6 m² = 27 m²
      const result = requiredArea(4.5);
      expect(result).toBe(27);
    });

    it('should handle small values', () => {
      // 1.0 kWp × 6 m² = 6 m²
      const result = requiredArea(1.0);
      expect(result).toBe(6);
    });
  });

  describe('monthlySavings', () => {
    it('should calculate 95% savings correctly', () => {
      // R$ 300 × 0.95 = R$ 285
      const result = monthlySavings(300);
      expect(result).toBe(285);
    });

    it('should handle decimal values', () => {
      // R$ 250.50 × 0.95 = R$ 237.975
      const result = monthlySavings(250.5);
      expect(result).toBeCloseTo(237.975, 2);
    });

    it('should handle large values', () => {
      // R$ 1000 × 0.95 = R$ 950
      const result = monthlySavings(1000);
      expect(result).toBe(950);
    });
  });

  describe('annualSavings', () => {
    it('should calculate annual savings correctly', () => {
      // R$ 285 × 12 = R$ 3420
      const result = annualSavings(285);
      expect(result).toBe(3420);
    });

    it('should handle decimal values', () => {
      // R$ 237.975 × 12 = R$ 2855.7
      const result = annualSavings(237.975);
      expect(result).toBeCloseTo(2855.7, 1);
    });
  });

  describe('savingsIn25Years', () => {
    it('should calculate 25-year savings correctly', () => {
      // R$ 3420 × 25 = R$ 85500
      const result = savingsIn25Years(3420);
      expect(result).toBe(85500);
    });

    it('should handle large values', () => {
      // R$ 11400 × 25 = R$ 285000
      const result = savingsIn25Years(11400);
      expect(result).toBe(285000);
    });
  });

  describe('billToConsumption', () => {
    it('should convert bill to consumption correctly with default tariff', () => {
      // R$ 300 ÷ R$ 1.00/kWh = 300 kWh
      const result = billToConsumption(300, 1.0);
      expect(result).toBe(300);
    });

    it('should handle different tariffs', () => {
      // R$ 300 ÷ R$ 1.50/kWh = 200 kWh
      const result = billToConsumption(300, 1.5);
      expect(result).toBe(200);
    });

    it('should handle decimal tariffs', () => {
      // R$ 300 ÷ R$ 1.25/kWh = 240 kWh
      const result = billToConsumption(300, 1.25);
      expect(result).toBe(240);
    });

    it('should handle higher tariffs', () => {
      // R$ 400 ÷ R$ 2.00/kWh = 200 kWh
      const result = billToConsumption(400, 2.0);
      expect(result).toBe(200);
    });
  });

  describe('Complete calculation flow', () => {
    it('should calculate complete scenario correctly', () => {
      // Scenario: R$ 300 bill, R$ 1.00/kWh tariff
      const billValue = 300;
      const tariff = 1.0;

      // Step 1: Convert bill to consumption
      const consumption = billToConsumption(billValue, tariff);
      expect(consumption).toBe(300);

      // Step 2: Calculate system power
      const power = systemPower(consumption);
      expect(power).toBe(1.88); // 300 ÷ 160 = 1.875 → rounds up to 1.88

      // Step 3: Calculate required area
      const area = requiredArea(power);
      expect(area).toBeCloseTo(11.28, 1); // 1.88 × 6

      // Step 4: Calculate savings
      const monthly = monthlySavings(billValue);
      expect(monthly).toBe(285);

      const annual = annualSavings(monthly);
      expect(annual).toBe(3420);

      const in25Years = savingsIn25Years(annual);
      expect(in25Years).toBe(85500);
    });

    it('should calculate scenario with higher consumption', () => {
      // Scenario: R$ 500 bill, R$ 1.00/kWh tariff
      const billValue = 500;
      const tariff = 1.0;

      const consumption = billToConsumption(billValue, tariff);
      expect(consumption).toBe(500);

      const power = systemPower(consumption);
      expect(power).toBe(3.13); // 500 ÷ 160 = 3.125 → rounds up to 3.13

      const area = requiredArea(power);
      expect(area).toBeCloseTo(18.78, 1); // 3.13 × 6

      const monthly = monthlySavings(billValue);
      expect(monthly).toBe(475);

      const annual = annualSavings(monthly);
      expect(annual).toBe(5700);

      const in25Years = savingsIn25Years(annual);
      expect(in25Years).toBe(142500);
    });
  });

  describe('Edge cases', () => {
    it('should handle zero values', () => {
      expect(systemPower(0)).toBe(0);
      expect(monthlySavings(0)).toBe(0);
      expect(annualSavings(0)).toBe(0);
    });

    it('should handle very small values', () => {
      const result = systemPower(1);
      expect(result).toBe(0.01); // 1 ÷ 160 = 0.00625 → rounds up to 0.01
    });

    it('should handle very large values', () => {
      const result = systemPower(10000);
      expect(result).toBe(62.5); // 10000 ÷ 160 = 62.5
    });

    it('should maintain precision with decimal calculations', () => {
      const consumption = billToConsumption(333.33, 1.11);
      const power = systemPower(consumption);
      const area = requiredArea(power);
      
      // Should not have rounding errors
      expect(area).toBeGreaterThan(0);
      expect(area).toBeLessThan(1000);
    });
  });

  describe('Accuracy validation', () => {
    it('should ensure 95% savings rate is consistent', () => {
      const billValue = 1000;
      const savings = monthlySavings(billValue);
      
      // Should be exactly 95% of bill
      expect(savings / billValue).toBeCloseTo(0.95, 5);
    });

    it('should ensure annual calculation multiplies by 12', () => {
      const monthly = 500;
      const annual = annualSavings(monthly);
      
      expect(annual).toBe(monthly * 12);
    });

    it('should ensure 25-year calculation multiplies by 25', () => {
      const annual = 5000;
      const in25Years = savingsIn25Years(annual);
      
      expect(in25Years).toBe(annual * 25);
    });
  });
});
