import { createClient } from '@supabase/supabase-js';


const URL = "https://bkdcbyazlbjpymtgdnlq.supabase.co";
const API_KEY = "sb_publishable_KcwnmDgBCuyaNoEX-8NWGw_-y5dct5g";




export const supabase = createClient(URL, API_KEY);