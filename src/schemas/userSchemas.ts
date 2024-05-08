import { z } from 'zod';

export const classSubjectSchema = z.object({
  strm: z.string(),

  subject: z.string().min(2).max(10),
  catalogNumber: z.string().min(3),
  include: z.string().optional(),
});

export const classSchema = z.object({
  strm: z.string(),
  classNumber: z.string(),
  include: z.string().optional(),
});

export const classListSchema = z.object({
  strm: z.string(),
  include: z.string().optional(),
});

export const multiClassSchema = z.object({
  classKey: z.string(),
  include: z.string().optional(),
});

export const classCatalogRangeSchema = z.object({
  strm: z.string(),
  subject: z.string().min(2).max(10),
  catalogNumberStartInclusive: z.string().min(3).optional(),
  catalogNumberEndInclusive: z.string().min(3).optional(),
  include: z.string().optional(),
});

export const courseSchema = z.object({
  strm: z.string(),
  courseId: z.string(),
  courseOfferNumber: z.string(),
  include: z.string().optional(),
});
export const courseByCourseIdSchema = z.object({
  strm: z.string(),
  courseId: z.string(),

  include: z.string().optional(),
});
export const courseCatalogRangeSchema = z.object({
  strm: z.string(),
  subject: z.string().min(2).max(10),
  catalogNumberStartInclusive: z.string().min(3).optional(),
  catalogNumberEndInclusive: z.string().min(3).optional(),
  include: z.string().optional(),
});
export const courseCatalogNumberSchema = z.object({
  strm: z.string(),
  subject: z.string().min(2).max(10),
  catalogNumber: z.string().min(3),

  include: z.string().optional(),
});
export const courseOwnerSchema = z.object({
  strm: z.string(),
  ownedByCollege: z.string().optional(),
  ownedByDepartment: z.string().optional(),
  include: z.string().optional(),
});
export const codesetDegreeSchema = z.object({
  degreeCode : z.string().max(1).optional()
})
export const codesetCampusSchema = z.object({
  campusCode : z.string()
})
// For all authenticated routes JOURNEY is required
export const privateMockSchema = z.object({
  JOURNEY: z.string(),
});
export const codesetCreditSchema = z.object({
  include : z.string().optional()
});
export const codesetCreditCodeSchema = z.object({
  testCode: z.string().max(3),
  include : z.string().optional()
})
export const codesetCountriesSchema = z.object({
  include: z.string().optional(),
  exclude : z.string().optional()
});
export const codesetCountrySchema = z.object({
  countryCode: z.string()
});
export const privateReportSchema = z.object({

  emplid: z.string()
});
export const privateEnrollmentSchema = z.object({
  strm: z.string(),
  classNumber: z.string()
});
export const privatePersonSchema = z.object({
  emplid: z.string().optional()
 
});
export const privatePersonIdSchema = z.object({
  emplid: z.string()
});
export const privatePrincipalSchema = z.object({
  asuriteid: z.string()
});
export const privatePrincipalOwnerSchema = z.object({
  asuriteid: z.string(),
  include: z.string().optional()
});
export const privateServiceSchema = z.object({
  asuriteid: z.string(),
  filter: z.string().optional()
})


export const acadPlanSchema = z.object({
  ownedByCollege: z.string().optional(),
  ownedByDepartment: z.string().optional(),
  acadPlanType: z.string().optional(),
  degreeType: z.string().optional(),
  include: z.array(z.string()).optional(),

  filter: z.literal('activeInDegreeSearch').optional(),
});
