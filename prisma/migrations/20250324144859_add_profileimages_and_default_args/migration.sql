/*
  Warnings:

  - Made the column `rangoActualId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_rangoActualId_fkey";

-- AlterTable
ALTER TABLE "Horario" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT DEFAULT 'https://res.cloudinary.com/dixjvn0t7/image/upload/v1742827190/d1h6jxvbw8lkofag5sy6.jpg',
ALTER COLUMN "rangoActualId" SET NOT NULL,
ALTER COLUMN "rangoActualId" SET DEFAULT 1;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rangoActualId_fkey" FOREIGN KEY ("rangoActualId") REFERENCES "Range"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
