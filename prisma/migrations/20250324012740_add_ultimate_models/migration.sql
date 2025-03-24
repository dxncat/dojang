-- AlterTable
ALTER TABLE "User" ADD COLUMN     "rangoActualId" INTEGER;

-- CreateTable
CREATE TABLE "Range" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Range_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HistoryRange" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rangeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" TIMESTAMP(3),

    CONSTRAINT "HistoryRange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HoursRange" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rangeId" INTEGER NOT NULL,
    "hours" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "HoursRange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clase" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "duracion" INTEGER NOT NULL,
    "rangoId" INTEGER NOT NULL,

    CONSTRAINT "Clase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asistencia" (
    "id" SERIAL NOT NULL,
    "alumnoId" TEXT NOT NULL,
    "claseId" INTEGER NOT NULL,
    "asistio" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Asistencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Horario" (
    "id" SERIAL NOT NULL,
    "rangoId" INTEGER NOT NULL,
    "diaSemana" TEXT NOT NULL,
    "horaInicio" TEXT NOT NULL,
    "horaFin" TEXT NOT NULL,

    CONSTRAINT "Horario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Range_nombre_key" ON "Range"("nombre");

-- AddForeignKey
ALTER TABLE "HistoryRange" ADD CONSTRAINT "HistoryRange_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoryRange" ADD CONSTRAINT "HistoryRange_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "Range"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HoursRange" ADD CONSTRAINT "HoursRange_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HoursRange" ADD CONSTRAINT "HoursRange_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "Range"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rangoActualId_fkey" FOREIGN KEY ("rangoActualId") REFERENCES "Range"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clase" ADD CONSTRAINT "Clase_rangoId_fkey" FOREIGN KEY ("rangoId") REFERENCES "Range"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_claseId_fkey" FOREIGN KEY ("claseId") REFERENCES "Clase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horario" ADD CONSTRAINT "Horario_rangoId_fkey" FOREIGN KEY ("rangoId") REFERENCES "Range"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
