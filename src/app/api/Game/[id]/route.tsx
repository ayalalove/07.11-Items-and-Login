


import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import  connect  from '../../../libary/db/mongodb'; // מסלול המתאים לחיבור ה-MongoDB
import Game from '../../../libary/models/Game'; // מסלול המתאים למודל שלך

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // התחברות ל-MongoDB
    await connect();

    // שליפת ה-ID מתוך ה-params
    const { id } = params;

    // בדיקה אם ה-ID תקין
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
    }

    // מחיקת הרשומה לפי ה-ID
    const result = await Game.findByIdAndDelete(id);

    // החזרת תגובה מתאימה
    return result
      ? NextResponse.json({ message: `Game with id ${id} deleted successfully!` })
      : NextResponse.json({ message: `No game found with id: ${id}` }, { status: 404 });
  } catch (error: any) {
    console.error('Error in DELETE:', error.message);
    return NextResponse.json({ message: 'Error: ' + error.message }, { status: 500 });
  }
}
