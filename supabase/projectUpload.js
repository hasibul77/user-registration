require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { v4: uuidv4 } = require('uuid');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY // Ensure your Supabase credentials are correct
);

// Upload file to Supabase's 'project-media' bucket
const uploadFile = async (file) => {
  const buffer = file.buffer;  // Get the file's buffer
  const fileExt = file.originalname.split('.').pop();  // Get file extension
  const fileName = `${uuidv4()}.${fileExt}`;  // Generate a unique file name using UUID

  // Upload the file to the 'project-media' bucket in Supabase
  const { data, error } = await supabase.storage
    .from('project-media')  // Specify the 'project-media' bucket here
    .upload(fileName, buffer, {
      contentType: file.mimetype,  // Set content type based on file's MIME type
    });

  if (error) {
    throw error;  // Handle any upload errors
  }

  // Return the public URL of the uploaded file
  return `${process.env.SUPABASE_URL}/storage/v1/object/public/project-media/${fileName}`;
};

// Delete a file from the 'project-media' bucket
const deleteFile = async (fileName) => {
  const { error } = await supabase.storage
    .from('project-media')
    .remove([fileName]);  // Remove file based on its name

  if (error) {
    throw error;  // Handle any deletion errors
  }

  return { message: 'File deleted successfully' };
};

module.exports = { uploadFile, deleteFile };
