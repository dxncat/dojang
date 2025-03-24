/*
  Warnings:

  - You are about to drop the column `claseId` on the `Asistencia` table. All the data in the column will be lost.
  - You are about to drop the `Clase` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Asistencia" DROP CONSTRAINT "Asistencia_claseId_fkey";

-- DropForeignKey
ALTER TABLE "Clase" DROP CONSTRAINT "Clase_rangoId_fkey";

-- AlterTable
ALTER TABLE "Asistencia" DROP COLUMN "claseId";

-- DropTable
DROP TABLE "Clase";
