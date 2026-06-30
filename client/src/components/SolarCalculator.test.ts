import { describe, it, expect } from 'vitest';
import { SOLAR_CALCULATOR } from '@/constants/company';

describe('Solar Calculator Formulas', () => {
  describe('systemPower', () => {
    it('should calculate system power correctly', () => {
      // 640 kWh ÷ 160 = 4.00 kWp
      const result = SOLAR_CALCULATOR.formulas.systemPower(640);
      expect(result).toBe(4.0);
    });

    it('should round up to 2 decimal places', () => {
      // 650 kWh ÷ 160 = 4.0625 → rounds up to 4.07
      const result = SOLAR_CALCULATOR.formulas.systemPower(650);
      expect(result).toBe(4.07);
    });

    it('should handle small values', () => {
      // 160 kWh ÷ 160 = 1.00 kWp
      const result = SOLAR_CALCULATOR.formulas.systemPower(160);
      expect(result).toBe(1.0);
    });

    it('should handle large values', () => {
      // 1600 kWh ÷ 160 = 10.00 kWp
      const result = SOLAR_CALCULATOR.formulas.systemPower(1600);
      expect(result).toBe(10.0);
    });
  });

  describe('requiredArea', () => {
    it('should calculate required area correctly', () => {
      // 4.0 kWp × 6 m² = 24 m²
      const result = SOLAR_CALCULATOR.formulas.requiredArea(4.0);
      expect(result).toBe(24);
    });

    it('should handle decimal values', () => {
      // 4.5 kWp × 6 m² = 27 m²
      const result = SOLAR_CALCULATOR.formulas.requiredArea(4.5);
      expect(result).toBe(27);
    });
  });

  describe('monthlySavings', () => {
    it('should calculate 95% savings correctly', () => {
      // R$ 300 × 0.95 = R$ 285
      const result = SOLAR_CALCULATOR.formulas.monthlySavings(300);
      expect(result).toBe(285);
    });

    it('should handle decimal values', () => {
      // R$ 250.50 × 0.95 = R$ 237.975
      const result = SOLAR_CALCULATOR.formulas.monthlySavings(250.5);
      expect(result).toBeCloseTo(237.975, 2);
    });
  });

  describe('annualSavings', () => {
    it('should calculate annual savings correctly', () => {
      // R$ 285 × 12 = R$ 3420
      const result = SOLAR_CALCULATOR.formulas.annualSavings(285);
      expect(result).toBe(3420);
    });
  });

  describe('savingsIn25Years', () => {
    it('should calculate 25-year savings correctly', () => {
      // R$ 3420 × 25 = R$ 85500
      const result = SOLAR_CALCULATOR.formulas.savingsIn25Years(3420);
      expect(result).toBe(85500);
    });
  });

  describe('billToConsumption', () => {
    it('should convert bill to consumption correctly', () => {
      // R$ 300 ÷ R$ 1.00/kWh = 300 kWh
      const result = SOLAR_CALCULATOR.formulas.billToConsumption(300, 1.0);
      expect(result).toBe(300);
    });

    it('should handle different tariffs', () => {
      // R$ 300 ÷ R$ 1.50/kWh = 200 kWh
      const result = SOLAR_CALCULATOR.formulas.billToConsumption(300, 1.5);
      expect(result).toBe(200);
    });

    it('should handle decimal tariffs', () => {
      // R$ 300 ÷ R$ 1.25/kWh = 240 kWh
      const result = SOLAR_CALCULATOR.formulas.billToConsumption(300, 1.25);
      expect(result).toBe(240);
    });
  });

  describe('Complete calculation flow', () => {
    it('should calculate complete scenario correctly', () => {
      // Scenario: R$ 300 bill, R$ 1.00/kWh tariff
      const billValue = 300;
      const tariff = 1.0;

      // Step 1: Convert bill to consumption
      const consumption = SOLAR_CALCULATOR.formulas.billToConsumption(billValue, tariff);
      expect(consumption).toBe(300);

      // Step 2: Calculate system power
      const systemPower = SOLAR_CALCULATOR.formulas.systemPower(consumption);
      expect(systemPower).toBe(1.88); // 300 ÷ 160 = 1.875 → rounds up to 1.88

      // Step 3: Calculate required area
      const area = SOLAR_CALCULATOR.formulas.requiredArea(systemPower);
      expect(area).toBeCloseTo(11.28, 1); // 1.88 × 6

      // Step 4: Calculate savings
      const monthlySavings = SOLAR_CALCULATOR.formulas.monthlySavings(billValue);
      expect(monthlySavings).toBe(285);

      const annualSavings = SOLAR_CALCULATOR.formulas.annualSavings(monthlySavings);
      expect(annualSavings).toBe(3420);

      const savingsIn25Years = SOLAR_CALCULATOR.formulas.savingsIn25Years(annualSavings);
      expect(savingsIn25Years).toBe(85500);
    });
  });

  describe('Edge cases', () => {
    it('should handle zero values', () => {
      expect(SOLAR_CALCULATOR.formulas.systemPower(0)).toBe(0);
      expect(SOLAR_CALCULATOR.formulas.monthlySavings(0)).toBe(0);
    });

    it('should handle very small values', () => {
      const result = SOLAR_CALCULATOR.formulas.systemPower(1);
      expect(result).toBe(0.01); // 1 ÷ 160 = 0.00625 → rounds up to 0.01
    });

    it('should maintain precision with large values', () => {
      const result = SOLAR_CALCULATOR.formulas.systemPower(10000);
      expect(result).toBe(62.5);
    });
  });
});
