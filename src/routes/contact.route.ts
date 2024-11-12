import { Router } from 'express';
import { contactController } from '../controllers';

const contactRouter: Router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the contact
 *         company:
 *           type: string
 *           description: Company of the contact
 *         profileImage:
 *           type: string
 *           description: URL to the profile image of the contact
 *         email:
 *           type: string
 *           description: Email address of the contact
 *         birthdate:
 *           type: string
 *           format: date
 *           description: Birthdate of the contact
 *         phoneNumber:
 *           type: object
 *           properties:
 *             work:
 *               type: string
 *               description: Work phone number of the contact
 *             personal:
 *               type: string
 *               description: Personal phone number of the contact
 *         address:
 *           type: object
 *           properties:
 *             street:
 *               type: string
 *               description: Street address of the contact
 *             city:
 *               type: string
 *               description: City of the contact
 *             state:
 *               type: string
 *               description: State of the contact
 *             zip:
 *               type: string
 *               description: ZIP code of the contact
 */

/**
 * @swagger
 * /contacts/search:
 *   get:
 *     summary: Searches for contacts based on query parameters
 *     tags: [Contact]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: Email of the contact
 *       - in: query
 *         name: phoneNumber
 *         schema:
 *           type: string
 *         description: Phone number of the contact
 *     responses:
 *       200:
 *         description: A list of contacts matching the search criteria
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /contacts/location:
 *   get:
 *     summary: Retrieves contacts by location
 *     tags: [Contact]
 *     parameters:
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         description: City of the contact
 *       - in: query
 *         name: state
 *         schema:
 *           type: string
 *         description: State of the contact
 *     responses:
 *       200:
 *         description: A list of contacts in the specified location
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Retrieves a contact by ID
 *     tags: [Contact]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the contact
 *     responses:
 *       200:
 *         description: The contact information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Updates a contact by ID
 *     tags: [Contact]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       200:
 *         description: Contact updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Deletes a contact by ID
 *     tags: [Contact]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the contact
 *     responses:
 *       200:
 *         description: Contact deleted successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Creates a new contact
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       201:
 *         description: Contact created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

contactRouter.post('/', contactController.createContact);
contactRouter.get('/search', contactController.searchContact);
contactRouter.get('/location', contactController.getContactsByLocation);
contactRouter.get('/:id', contactController.getContact);
contactRouter.put('/:id', contactController.updateContact);
contactRouter.delete('/:id', contactController.deleteContact);

export { contactRouter };
