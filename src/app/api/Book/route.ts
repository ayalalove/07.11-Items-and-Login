

import { NextRequest, NextResponse } from "next/server";
import Book from '@/app/libary/models/Book'
import connect from "../../libary/db/mongodb";






//book

export async function GET() {
    try {
      await connect();
      const data = await Book.find();
      return NextResponse.json({ message: "successfull", data });
    } catch (error) {
      return NextResponse.json("Error in fetching " + error);
    }
}



  export async function POST(req: NextResponse) {
    try {
      await connect();
      const { bookName, writer} = await req.json();
      const book = new Book({ bookName, writer });
      await book.save();
      return NextResponse.json({ newBook: book });
    } catch (error) {
      return NextResponse.json("messege" + error);
    }
  }






  










