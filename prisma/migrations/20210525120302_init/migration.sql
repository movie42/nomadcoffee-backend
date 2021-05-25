-- CreateTable
CREATE TABLE "Coffee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "production" INTEGER NOT NULL,
    "country" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
