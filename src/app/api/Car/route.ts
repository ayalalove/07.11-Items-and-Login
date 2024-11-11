

import { NextRequest, NextResponse } from "next/server";

import Cars from '@/app/libary/models/Car'

import connect from "../../libary/db/mongodb";
import Car from "@/app/libary/models/Car";







//car

export async function GET() {
    try {
      await connect();
      const data = await Car.find();
      return NextResponse.json({ message: "successfull", data });
    } catch (error) {
      return NextResponse.json("Error in fetching " + error);
    }
}


  export async function POST(req: NextResponse) {
    try {
      await connect();
      const { carName, num, year_of_manufacture } = await req.json();
      const cars = new Cars({  carName, num, year_of_manufacture });
      await cars.save();
      return NextResponse.json({ newCar: cars });
    } catch (error) {
      return NextResponse.json("messege" + error);
    }
  }






  










