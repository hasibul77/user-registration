require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { v4: uuidv4 } = require('uuid');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY // ✅ Corrected key name
);

const uploadFile = async (file) => {
  const buffer = file.buffer;
  const fileExt = file.originalname.split('.').pop();
  const fileName = `${uuidv4()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from('media')
    .upload(fileName, buffer, {
      contentType: file.mimetype,
    });

  if (error) throw error;

  return `${process.env.SUPABASE_URL}/storage/v1/object/public/media/${fileName}`;
};

module.exports = { uploadFile };
