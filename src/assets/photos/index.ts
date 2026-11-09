/**
 * Site photography. All images are from Pexels (https://www.pexels.com/license/):
 * free for commercial use, no attribution required. Self-hosted as WebP.
 */
import hero from './hero.webp'
import serviceCar from './service-car.webp'
import serviceHome from './service-home.webp'
import homeBefore from './home-before.webp'
import homeAfter from './home-after.webp'
import carSuvDuring from './car-suv-during.webp'
import carSuvAfter from './car-suv-after.webp'
import carSaleDuring from './car-sale-during.webp'
import carSaleAfter from './car-sale-after.webp'
import carPetDuring from './car-pet-during.webp'
import carPetAfter from './car-pet-after.webp'
import homeRugDuring from './home-rug-during.webp'
import homeRugAfter from './home-rug-after.webp'
import homeSofaDuring from './home-sofa-during.webp'
import homeSofaAfter from './home-sofa-after.webp'
import homeBedDuring from './home-bed-during.webp'
import homeBedAfter from './home-bed-after.webp'

export const PHOTOS = {
  hero,
  services: [serviceCar, serviceHome],
  homeBefore,
  homeAfter,
  /** Same order as `work.carJobs` / `work.homeJobs` in translations. */
  carJobs: [
    [carSuvDuring, carSuvAfter],
    [carSaleDuring, carSaleAfter],
    [carPetDuring, carPetAfter],
  ],
  homeJobs: [
    [homeRugDuring, homeRugAfter],
    [homeSofaDuring, homeSofaAfter],
    [homeBedDuring, homeBedAfter],
  ],
} as const
