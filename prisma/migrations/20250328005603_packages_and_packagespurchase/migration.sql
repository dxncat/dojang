/*
  Warnings:

  - You are about to drop the `_PackageToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PackageToUser" DROP CONSTRAINT "_PackageToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_PackageToUser" DROP CONSTRAINT "_PackageToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "availableHours" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "_PackageToUser";

-- CreateTable
CREATE TABLE "PackagePurchase" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "packageId" INTEGER NOT NULL,
    "hours" INTEGER NOT NULL,
    "remaining" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PackagePurchase_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PackagePurchase" ADD CONSTRAINT "PackagePurchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackagePurchase" ADD CONSTRAINT "PackagePurchase_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
