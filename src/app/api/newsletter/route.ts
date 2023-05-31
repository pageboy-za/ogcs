import { NextResponse } from 'next/server';
import fetch from 'node-fetch';


export async function POST(request: { json: () => PromiseLike<{ fullname: any; email: any; }> | { fullname: any; email: any; }; }) {
  const { fullname, email } = await request.json();

  // Define your ConvertKit API endpoint and API key
  const convertKitURL = process.env.CONVERT_KIT_API_URL!
  const convertKitApiKey = process.env.CONVERT_KIT_API_KEY!;
  const convertKitFormId = process.env.CONVERT_KIT_FORM_ID!;
  const convertKitEndpoint = convertKitURL + convertKitFormId + '/subscribe';

  console.log('convertKitEndpoint:', convertKitEndpoint);

  try {
    const response = await fetch(convertKitEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: convertKitApiKey,
        email: email,
        first_name: fullname,
      }),
    });

    if (response.ok) {
      console.log('Successfully subscribed to ConvertKit');
      return NextResponse.json({ res: 'Success!' });
    } else {
      console.error('Failed to subscribe to ConvertKit');
      return NextResponse.error(new Error('Failed to subscribe'));
    }
  } catch (error) {
    console.error('Error occurred while subscribing to ConvertKit:', error);
    return NextResponse.error(new Error('Error occurred while subscribing'));
  }
}
