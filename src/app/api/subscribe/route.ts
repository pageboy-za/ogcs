import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient( supabaseUrl!, supabaseKey!);
const supaTable = process.env.NEXT_PUBLIC_SUPABASE_TABLE!;

  export async function POST(request:Request) {
    const {fullname, email} = await request.json();
    // console.log(fullname);
    // console.log(email);
    const timestamp = new Date().toISOString();
    const {data, error} = await supabase.from(supaTable).insert([{created_at: timestamp, name: fullname, email: email}]);
    // console.log(data);
    // console.log(error);
    console.log('Success!');
    return NextResponse.json({ res: 'Success!' });

  }