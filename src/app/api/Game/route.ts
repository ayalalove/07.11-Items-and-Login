

import { NextRequest, NextResponse } from "next/server";
import Game from '@/app/libary/models/Game'
import connect from "../../libary/db/mongodb";
import mongoose from 'mongoose';



//game


export async function GET() {
    try {
      await connect();
      const data = await Game.find();
      return NextResponse.json({ message: "successfull", data });
    } catch (error) {
      return NextResponse.json("Error in fetching " + error);
    }
}


  export async function POST(req: NextResponse) {
    try {
      await connect();
      const { gameName, num_of_participants, age } = await req.json();
      const game = new Game({ gameName, num_of_participants, age });
      await game.save();
      return NextResponse.json({ newGame: game });
    } catch (error) {
      return NextResponse.json("messege" + error);
    }
  }






  

  










