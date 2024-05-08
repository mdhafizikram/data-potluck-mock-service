import { z } from 'zod';

/**
 * Schema for codeset degree
 */
export const codesetDegreeSchema = z.object({
  degreeCode: z.string().max(1).optional(),
});

/**
 * Schema for codeset campus
 */
export const codesetCampusSchema = z.object({
  campusCode: z.string(),
});

/**
 * Schema for codeset credit
 */
export const codesetCreditSchema = z.object({
  include: z.string().optional(),
});

/**
 * Schema for codeset credit code
 */
export const codesetCreditCodeSchema = z.object({
  testCode: z.string().max(3),
  include: z.string().optional(),
});

/**
 * Schema for codeset countries
 */
export const codesetCountriesSchema = z.object({
  include: z.string().optional(),
  exclude: z.string().optional(),
});

/**
 * Schema for codeset country
 */
export const codesetCountrySchema = z.object({
  countryCode: z.string(),
});
