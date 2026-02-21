import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';

export async function GET() {
  try {
    // Try to connect
    await connectDB();
    
    return NextResponse.json({ 
      success: true,
      message: "✅ Database connected successfully!",
      timestamp: new Date().toISOString()
    });
    
  } catch (error: any) {
    return NextResponse.json({ 
      success: false,
      error: error.message,
      details: "❌ Database connection failed"
    }, { status: 500 });
  }
}