import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { username, email, password, profileImage } = await req.json();

    // Cek apakah email sudah terdaftar
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    // Hash password sebelum disimpan
    const hashedPassword = await hash(password, 10);

    // Simpan user ke database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        profileImage,
      },
    });

    // Buat session untuk user
    const token = uuidv4(); // Token unik untuk session
    await prisma.session.create({
      data: {
        userId: newUser.id,
        token,
      },
    });

    // Buat respons dan set cookies
    const response = NextResponse.json(
      { message: "Registrasi berhasil" },
      { status: 201 }
    );
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60, // 7 hari
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Failed to register user" },
      { status: 500 }
    );
  }
}
