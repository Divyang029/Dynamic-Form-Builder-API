const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
  responses: { type: Map, of: mongoose.Schema.Types.Mixed }  // Dynamic responses
});

module.exports = mongoose.model('FormResponse', responseSchema);
