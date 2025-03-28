/*
  Warnings:

  - The primary key for the `HistoryRange` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `HistoryRange` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `HoursRange` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `HoursRange` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `rangoActualId` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to drop the `Asistencia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Horario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Asistencia" DROP CONSTRAINT "Asistencia_alumnoId_fkey";

-- DropForeignKey
ALTER TABLE "Asistencia" DROP CONSTRAINT "Asistencia_horarioId_fkey";

-- DropForeignKey
ALTER TABLE "Horario" DROP CONSTRAINT "Horario_rangoId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_rangoActualId_fkey";

-- AlterTable
ALTER TABLE "HistoryRange" DROP CONSTRAINT "HistoryRange_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "HistoryRange_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "HoursRange" DROP CONSTRAINT "HoursRange_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "HoursRange_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Range" ADD COLUMN     "minHours" INTEGER NOT NULL DEFAULT 100;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "rangoActualId",
ADD COLUMN     "currentRangeId" INTEGER,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "image" SET DEFAULT 'https://res.cloudinary.com/...';

-- DropTable
DROP TABLE "Asistencia";

-- DropTable
DROP TABLE "Horario";

-- CreateTable
CREATE TABLE "Package" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hours" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" SERIAL NOT NULL,
    "rangeId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "scheduleId" INTEGER NOT NULL,
    "attended" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PackageToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PackageToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PackageToUser_B_index" ON "_PackageToUser"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_currentRangeId_fkey" FOREIGN KEY ("currentRangeId") REFERENCES "Range"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "Range"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PackageToUser" ADD CONSTRAINT "_PackageToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Package"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PackageToUser" ADD CONSTRAINT "_PackageToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
