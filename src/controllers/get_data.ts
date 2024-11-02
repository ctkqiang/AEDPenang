import * as fs from 'fs';
import * as path from 'path';
import { AED } from '../models/aed_model';

const AED_FILE = path.join(__dirname, '../../database/aed.json');

export function GetAED<T>(): T | null
{
  // Check if the file exists before attempting to read it
  if (!fs.existsSync(AED_FILE))
  {
    console.error(`File not found: ${AED_FILE}`);
    return null;
  }

  try
  {
    const data = fs.readFileSync(AED_FILE, 'utf-8');
    return JSON.parse(data) as T;
  }
  catch (error)
  {
    console.error('Error reading or parsing the JSON file:', error);
  }

  return null;
}


// Example usage
// npx ts-node ./src/controllers/get_data.ts
const aedData = GetAED();

if (aedData)
{
  console.log(aedData);
}
else
{
  console.log('No AED data found.');
}
