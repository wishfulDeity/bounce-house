import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config() // Doesnt work at all, do later

const supabaseUrl = process.env['SUPABASE_URL'];
const supabaseKey = process.env['SUPABASE_KEY'];

export const supabase = createClient(supabaseUrl, supabaseKey);