// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hyqidjgbnmdiirdhgtgs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cWlkamdibm1kaWlyZGhndGdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyNTczOTQsImV4cCI6MjA1MDgzMzM5NH0.WOL854LeTbrb1y1TG9YMf2Op0c4z9XqyDOuxACOFTAk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);