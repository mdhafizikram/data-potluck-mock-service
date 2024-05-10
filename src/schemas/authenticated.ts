import { z } from 'zod';

/**
 * TODO: Eliminate this schema
 * Schema for private mock
 */
export const privateMockSchema = z.object({
  JOURNEY: z.string(),
});

/**
 * Schema for private report
 */
export const privateReportSchema = z.object({
  emplid: z.string(),
});

/**
 * Schema for private enrollment
 */
export const privateEnrollmentSchema = z.object({
  strm: z.string(),
  classNumber: z.number(),
});

/**
 * Schema for private person
 */
export const privatePersonSchema = z.object({
  emplid: z.string().optional(),
});

/**
 * Schema for private person id
 */
export const privatePersonIdSchema = z.object({
  emplid: z.string(),
});

/**
 * Schema for private principal
 */
export const privatePrincipalSchema = z.object({
  asuriteid: z.string(),
});

/**
 * Schema for private principal owner
 */
export const privatePrincipalOwnerSchema = z.object({
  asuriteid: z.string(),
  include: z.string().optional(),
});

/**
 * Schema for private service
 */
export const privateServiceSchema = z.object({
  asuriteid: z.string(),
  filter: z.string().optional(),
});

/**
 * Schema for private jobs list
 */
export const privateJobsSchema = z.object({
  emplid : z.string(),
  include: z.string().optional()

});

/**
 * Schema for mailing address 
 */
 export const privateMailAdressSchema = z.object({
  emplid : z.string()
 });
 export const privateAsuSyncClass = z.object({
  strm : z.string(),
  classNumber: z.number()
 });
 export const privatePhoneSchema = z.object({
  emplid : z.string()
 });
export const privateStudentGroupSchema = z.object({
  studentGroupCode : z.string()

});
export const privateZoomUserSchema = z.object({
  emplid : z.string()
});
export const privatePsUserRoleSchema = z.object({
  oprid: z.string()

})

/**
 * Schema for academic plan
 */
export const acadPlanSchema = z.object({
  ownedByCollege: z.string().optional(),
  ownedByDepartment: z.string().optional(),
  acadPlanType: z.string().optional(),
  degreeType: z.string().optional(),
  include: z.array(z.string()).optional(),
  filter: z.literal('activeInDegreeSearch').optional(),
});
