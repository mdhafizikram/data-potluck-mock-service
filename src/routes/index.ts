import express, { Router } from 'express';
import { doHttp } from './api/httpMethods';
import { doMock } from './api/mockMethods';
import { validateData } from '../middleware/requestValidation';
import {
  classSubjectSchema,
  classSchema,
  classListSchema,
  multiClassSchema,
  classCatalogRangeSchema,
  courseSchema,
  courseByCourseIdSchema,
  courseCatalogRangeSchema,
  courseCatalogNumberSchema,
  courseOwnerSchema,
  privateMockSchema,
} from '../schemas/userSchemas';

const router: Router = express.Router();

// @HttpGetCourse
router.get(
  '/api/course/:strm/:courseId/:courseOfferNumber',
  validateData(courseSchema),
  doHttp
);
router.get(
  '/api/course/:strm/:courseId',
  validateData(courseByCourseIdSchema),
  doHttp
);
router.get(
  '/api/course/:strm/subject/:subject',
  validateData(courseCatalogRangeSchema),
  doHttp
);
router.get(
  '/api/course/:strm/subject/:subject/:catalogNumber',
  validateData(courseCatalogNumberSchema),
  doHttp
);
router.get('/api/course/:strm', validateData(courseOwnerSchema), doHttp);

// @HttpGetClass
router.get('/api/class', validateData(multiClassSchema), doHttp);
router.get('/api/class/:strm', validateData(classListSchema), doHttp);
router.get(
  '/api/class/:strm/subject/:subject/:catalogNumber',
  validateData(classSubjectSchema),
  doHttp
);
router.get('/api/class/:strm/:classNumber', validateData(classSchema), doHttp);
router.get(
  '/api/class/:strm/subject/:subject',
  validateData(classCatalogRangeSchema),
  doHttp
);

// @samplePrivateRoute
router.get('/private', validateData(privateMockSchema), doMock);

export default router;
