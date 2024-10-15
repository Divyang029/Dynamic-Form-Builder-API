const app = require('express');
const Form = require('../models/Form');
const Response = require('../models/FormResponse');
const router = app.Router();

// Create a new form
router.post('/create', async (req, res) => {
  const { formTitle, formDescription, fields } = req.body;

  try {
    const newForm = new Form({ formTitle, formDescription, fields });
    await newForm.save();
    res.status(201).json({ success: true, formId: newForm._id });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create form' });
  }
});

// Get a form by ID
router.get('/:id', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ success: false, message: 'Form not found' });
    res.json(form);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching form' });
  }
});

// Update a form by ID
router.put('/update/:id', async (req, res) => {
  try {
    const formId = req.params.id;
    const updatedForm = await Form.findByIdAndUpdate(formId, req.body, {
      new: true, // Return the updated document
      runValidators: true // Validate the data against the schema
    });

    if (!updatedForm) {
      return res.status(404).json({ message: 'Form not found' });
    }

    res.status(200).json(updatedForm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Submit responses for a form
router.post('/submit', async (req, res) => {
  const { formId,responses } = req.body;

  try {
    const form = await Form.findById(formId);
    if (!form) return res.status(404).json({ success: false, message: 'Form id not found' });

    const newResponse = new FormResponse({
      formId: form._id,
      responses
    });
    await newResponse.save();
    res.status(201).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error:error, success: false, message: 'Failed to submit form' });
  }
});

// Fetch all responses for a form
router.get('/:id/responses', async (req, res) => {
  try {
    const responses = await FormResponse.find({ formId: req.params.id });
    res.json(responses);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching responses' });
  }
});

module.exports = router;
