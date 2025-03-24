/*
  Warnings:

  - You are about to drop the column `duracion` on the `Clase` table. All the data in the column will be lost.
  - You are about to drop the column `diaSemana` on the `Horario` table. All the data in the column will be lost.
  - Added the required column `horarioId` to the `Asistencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Clase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha` to the `Horario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Asistencia" DROP CONSTRAINT "Asistencia_claseId_fkey";

-- AlterTable
ALTER TABLE "Asistencia" ADD COLUMN     "horarioId" INTEGER NOT NULL,
ALTER COLUMN "claseId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Clase" DROP COLUMN "duracion",
ADD COLUMN     "duration" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Horario" DROP COLUMN "diaSemana",
ADD COLUMN     "fecha" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_horarioId_fkey" FOREIGN KEY ("horarioId") REFERENCES "Horario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_claseId_fkey" FOREIGN KEY ("claseId") REFERENCES "Clase"("id") ON DELETE SET NULL ON UPDATE CASCADE;
