import express, { Router } from 'express';
import { dplService } from './data-potluck';
import { mockService } from './mocks';
import { validateData } from '../middleware/requestValidation';
import {
  classSubjectSchema,
  classSchema,
  classListSchema,
  multiClassSchema,
  classCatalogRangeSchema,
} from '../schemas/class';
import {
  courseSchema,
  courseByCourseIdSchema,
  courseCatalogRangeSchema,
  courseCatalogNumberSchema,
  courseOwnerSchema,
} from '../schemas/course';
import {
  codesetDegreeSchema,
  codesetCampusSchema,
  codesetCreditSchema,
  codesetCreditCodeSchema,
  codesetCountriesSchema,
  codesetCountrySchema,
} from '../schemas/codeset';
import {
  privateMockSchema,
  privateReportSchema,
  privateEnrollmentSchema,
  privatePersonSchema,
  privatePersonIdSchema,
  privatePrincipalSchema,
  privatePrincipalOwnerSchema,
  privateServiceSchema,
} from '../schemas/authenticated';

const router: Router = express.Router();

/**
 * @description Routes for getting course information
 */

/**
 * Get course information by strm, courseId, and courseOfferNumber
 */
router.get(
  '/api/course/:strm/:courseId/:courseOfferNumber',
  validateData(courseSchema),
  dplService
);

/**
 * Get course information by strm and courseId
 */
router.get(
  '/api/course/:strm/:courseId',
  validateData(courseByCourseIdSchema),
  dplService
);

/**
 * Get course information by strm and subject
 */
router.get(
  '/api/course/:strm/subject/:subject',
  validateData(courseCatalogRangeSchema),
  dplService
);

/**
 * Get course information by strm, subject, and catalogNumber
 */
router.get(
  '/api/course/:strm/subject/:subject/:catalogNumber',
  validateData(courseCatalogNumberSchema),
  dplService
);

/**
 * Get course information by strm
 */
router.get('/api/course/:strm', validateData(courseOwnerSchema), dplService);

/**
 * @description Routes for getting class information
 */

// @HttpGetClass
/**
 * Get class information by multiple parameters
 */
router.get('/api/class', validateData(multiClassSchema), dplService);

/**
 * Get class information by strm
 */
router.get('/api/class/:strm', validateData(classListSchema), dplService);

/**
 * Get class information by strm, subject, and catalogNumber
 */
router.get(
  '/api/class/:strm/subject/:subject/:catalogNumber',
  validateData(classSubjectSchema),
  dplService
);

/**
 * Get class information by strm and classNumber
 */
router.get(
  '/api/class/:strm/:classNumber',
  validateData(classSchema),
  dplService
);

/**
 * Get class information by strm and subject
 */
router.get(
  '/api/class/:strm/subject/:subject',
  validateData(classCatalogRangeSchema),
  dplService
);

/**
 * @description Routes for getting codeset information
 */

/**
 * Get degrees codeset information
 */
router.get(
  '/api/codeset/degrees',
  validateData(codesetDegreeSchema),
  dplService
);

/**
 * Get campus codeset information by campusCode
 */
router.get(
  '/api/codeset/campus/{campusCode}',
  validateData(codesetCampusSchema),
  dplService
);

/**
 * Get campus codeset information
 */
router.get('/api/codeset/campuses', dplService);

/**
 * Get credit-by-exam codeset information
 */
router.get(
  '/api/codeset/credit-by-exam',
  validateData(codesetCreditSchema),
  dplService
);

/**
 * Get credit-by-exam codeset information by testCode
 */
router.get(
  '/api/codeset/credit-by-exam/{testCode}',
  validateData(codesetCreditCodeSchema),
  dplService
);

/**
 * Get countries codeset information
 */
router.get(
  '/api/codeset/countries',
  validateData(codesetCountriesSchema),
  dplService
);

/**
 * Get country codeset information by countryCode
 */
router.get(
  '/api/codeset/country/{countryCode}',
  validateData(codesetCountrySchema),
  dplService
);

/**
 * @description Routes for private endpoints
 */

// @samplePrivateRoute
/**
 * Get academic status report by emplid
 */
router.get(
  '/api/academic-status-report/emplid/{emplid}',
  validateData(privateReportSchema),
  mockService
);

/**
 * Get enrollment information by strm and classNumber
 */
router.get(
  '/api/enrollment/class/{strm}/{classNumber}',
  validateData(privateEnrollmentSchema),
  mockService
);

/**
 * Get person information
 */
router.get('/api/person', validateData(privatePersonSchema), mockService);

/**
 * Get person information by emplid
 */
router.get(
  '/api/person/{emplid}',
  validateData(privatePersonIdSchema),
  mockService
);

/**
 * Get principal information by asuriteid
 */
router.get(
  '/api/principal/asuriteid/{asuriteid}',
  validateData(privatePrincipalSchema),
  mockService
);

/**
 * Get principal information by asuriteid with ownerDetail included
 */
router.get(
  '/api/principal/asuriteid/{asuriteid}?include=ownerDetail',
  validateData(privatePrincipalOwnerSchema),
  mockService
);

/**
 * Get service subscription information by asuriteid
 */
router.get(
  '/api/service-subscription/asuriteid/{asuriteid}',
  validateData(privateServiceSchema),
  mockService
);

/**
 * Get private information
 */
router.get('/private', validateData(privateMockSchema), mockService);

export default router;
