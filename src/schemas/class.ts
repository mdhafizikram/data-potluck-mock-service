import { z } from 'zod';

/**
 * Schema for class subject
 */
export const classSubjectSchema = z.object({
  strm: z.string(),

  subject: z.string().min(2).max(10),
  catalogNumber: z.string().min(3),
  include: z.string().optional(),
});

/**
 * Schema for class
 */
export const classSchema = z.object({
  strm: z.string(),
  classNumber: z.string(),
  include: z.string().optional(),
});

/**
 * Schema for class list
 */
export const classListSchema = z.object({
  strm: z.string(),
  include: z.string().optional(),
});

/**
 * Schema for multi class
 */
export const multiClassSchema = z.object({
  classKey: z.string(),
  include: z.string().optional(),
});

/**
 * Schema for class catalog range
 */
export const classCatalogRangeSchema = z.object({
  strm: z.string(),
  subject: z.string().min(2).max(10),
  catalogNumberStartInclusive: z.string().min(3).optional(),
  catalogNumberEndInclusive: z.string().min(3).optional(),
  include: z.string().optional(),
});
