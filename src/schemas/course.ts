import { z } from 'zod';

/**
 * Schema for course
 */
export const courseSchema = z.object({
  strm: z.string(),
  courseId: z.string(),
  courseOfferNumber: z.string(),
  include: z.string().optional(),
});

/**
 * Schema for course by courseId
 */
export const courseByCourseIdSchema = z.object({
  strm: z.string(),
  courseId: z.string(),
  include: z.string().optional(),
});

/**
 * Schema for course catalog range
 */
export const courseCatalogRangeSchema = z.object({
  strm: z.string(),
  subject: z.string().min(2).max(10),
  catalogNumberStartInclusive: z.string().min(3).optional(),
  catalogNumberEndInclusive: z.string().min(3).optional(),
  include: z.string().optional(),
});

/**
 * Schema for course catalog number
 */
export const courseCatalogNumberSchema = z.object({
  strm: z.string(),
  subject: z.string().min(2).max(10),
  catalogNumber: z.string().min(3),
  include: z.string().optional(),
});

/**
 * Schema for course owner
 */
export const courseOwnerSchema = z.object({
  strm: z.string(),
  ownedByCollege: z.string().optional(),
  ownedByDepartment: z.string().optional(),
  include: z.string().optional(),
});
