/*
  Warnings:

  - You are about to drop the column `descripcion` on the `Range` table. All the data in the column will be lost.
  - Added the required column `description` to the `Range` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Range" DROP COLUMN "descripcion",
ADD COLUMN     "description" TEXT NOT NULL;
