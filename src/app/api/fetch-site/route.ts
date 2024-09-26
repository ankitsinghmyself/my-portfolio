// app/api/fetch-site/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  // Check if the URL is provided and is a string
  if (!url || typeof url !== 'string') {
    return NextResponse.json({ message: 'Invalid URL' }, { status: 400 });
  }

  try {
    const response = await axios.get(url);

    // Return HTML content as a response
    const htmlContent = response.data;

    return new NextResponse(htmlContent, {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });
  } catch (error) {
    console.error('Error fetching the site:', error);
    return NextResponse.json({ message: 'Error fetching the site' }, { status: 500 });
  }
}
