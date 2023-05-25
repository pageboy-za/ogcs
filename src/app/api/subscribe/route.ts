import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fcilushukbsjpbwedmdi.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient( supabaseUrl, supabaseKey!);


  export async function POST(request:Request) {
    const {name, email} = await request.json();
  
    const {data, error} = await supabase.from("mailingList").insert([{name: name, email: email}]);
    return NextResponse.redirect(new URL('/', request.url));
  }
 
