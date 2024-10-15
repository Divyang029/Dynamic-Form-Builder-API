const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  formTitle: { type: String, required: true },
  formDescription: { type: String },
  fields: [{
       fieldName: { type: String, required: true }, // For field label
       type: { type: String, required: true },
       options: [String],  // For dropdowns or checkboxes
       required: { type: Boolean, default: false }
  }]   // Array of fields
});

module.exports = mongoose.model('Form', formSchema);
