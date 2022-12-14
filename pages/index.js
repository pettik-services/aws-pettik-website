import Head from "next/head";
import Image from "next/image";
import Dog from "../public/CategoryImage/Dogs.jpg";
import Cat from "../public/CategoryImage/Cats.jpg";
import Android from "../public/android.png";
import Apple from "../public/apple.png";
import Grooming from "../public/CategoryImage/Home-Grooming.jpg";
import Consulting from "../public/CategoryImage/Vet-Consulting.jpg";
import styles from "../components/Home/Home.module.scss";
import Grid from "@mui/material/Grid";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "@mui/material/Container";
import Link from "next/link";
import Banner1 from "./../public/carouselimages/banner1.jpg";
import Banner2 from "./../public/carouselimages/banner2.jpg";
import Banner3 from "./../public/carouselimages/banner3.jpg";

import Image1 from "./../public/exploreServicesIcons/PET ADOPTION.png";
import Image2 from "./../public/exploreServicesIcons/PET MATING.png";
import Image3 from "./../public/exploreServicesIcons/PET HOSTEL.png";
import Image4 from "./../public/exploreServicesIcons/PET TRAINING.png";
import Image5 from "./../public/exploreServicesIcons/PET INSSURANCE.png";
import Image6 from "./../public/exploreServicesIcons/PET VACCINATION.png";
import Image7 from "./../public/exploreServicesIcons/PET FOOD.png";
import Image8 from "./../public/exploreServicesIcons/PET EVENT.png";


export default function Home() {
  return (
    <div>
      <div className={styles.categoryContent}>
        {/* <div className={styles.petCategoryListRow}>
          <div className={styles.petCategory}>
            <div className={styles.petCategoryImage}>
              <Image src={Dog} alt="dog-image" height={90} width={90} />
            </div>
            <div className={styles.petCategoryName}>Dogs</div>
          </div>
          <div className={styles.petCategory}>
            <div className={styles.petCategoryImage}>
              <Image src={Cat} alt="cat-image" height={90} width={90} />
            </div>
            <div className={styles.petCategoryName}>Cats</div>
          </div>
          <div className={styles.petCategory}>
            <div className={styles.petCategoryImage}>
              <Image
                src={Grooming}
                alt="home-grooming-image"
                height={90}
                width={90}
              />
            </div>
            <div className={styles.petCategoryName}>Home Grooming</div>
          </div>
          <Link href="/vet-consult">
            <div className={styles.petCategory}>
              <div className={styles.petCategoryImage}>
                <Image
                  src={Consulting}
                  alt="Vet-Consulting-image"
                  height={90}
                  width={90}
                />
              </div>
              <div className={styles.petCategoryName}>Vet Consulting</div>
            </div>
          </Link>
        </div> */}
      </div>
      <div className={styles.carouselContent}>
        <Carousel>
          <Carousel.Item>
            <Image
              src={Banner1}
              alt="First slide"
              height={377}
              width={1728}
              priority
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={Banner2}
              alt="Second slide"
              height={377}
              width={1728}
              priority
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={Banner3}
              alt="Third slide"
              height={377}
              width={1728}
              priority
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.downloadOurApps}>Download Our App!</div>
      <div className={styles.googleAppleStoreContent}>
        <div className={styles.googleAppleStore}>
          <Image src={Android} alt="Android-image" height={55} width={190} priority />
        </div>

        <div className={styles.googleAppleStore}>
          <Image src={Apple} alt="Apple-image" height={55} width={190} priority />
        </div>
      </div>
      <div className={styles.discountContent}>
        <Grid container rowSpacing={2} p={2}>
          <Grid item xs={3}>
            <div className={styles.flat}> FLAT</div>
            <span className={styles.priceOff}>??? 150 OFF *</span>
          </Grid>
          <Grid item xs={3}>
            <div className={styles.discountServices}>on services of</div>
            <span className={styles.discountServices}>Rs. 2000 & above</span>
          </Grid>
          <Grid item xs={3}>
            <div className={styles.useCode}>USE CODE : PETTIKNEW</div>
          </Grid>
          <Grid item xs={3}>
            <div className={styles.term}>
              <div>T&C*</div>
              <span>Apply</span>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={styles.exploreServicesHeading}>Explore Services</div>
      <div className={styles.exploreServicesContainer}>
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={6} md={3} lg={3}>
              <div className={styles.exploreServiceslist}>
                <div>
                  <Image
                    src={Image1}
                    alt="dog-image"
                    height={150}
                    width={150}
                    priority
                  />
                </div>
                <div className={styles.exploreServicesListName}>
                  PET ADOPTION
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <div className={styles.exploreServiceslist}>
                <div>
                  <Image
                    src={Image2}
                    alt="dog-image"
                    height={150}
                    width={150}
                    priority
                  />
                </div>
                <div className={styles.exploreServicesListName}>PET MATING</div>
              </div>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <div className={styles.exploreServiceslist}>
                <div>
                  <Image
                    src={Image3}
                    alt="dog-image"
                    height={150}
                    width={150}
                    priority
                  />
                </div>
                <div className={styles.exploreServicesListName}>PET HOSTEL</div>
              </div>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <div className={styles.exploreServiceslist}>
                <div>
                  <Image
                    src={Image4}
                    alt="dog-image"
                    height={150}
                    width={150}
                    priority
                  />
                </div>
                <div className={styles.exploreServicesListName}>
                  PET TRAINING
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <div className={styles.exploreServiceslist}>
                <div>
                  <Image
                    src={Image5}
                    alt="dog-image"
                    height={150}
                    width={150}
                    priority
                  />
                </div>
                <div className={styles.exploreServicesListName}>
                  PET INSURRANCE
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <div className={styles.exploreServiceslist}>
                <div>
                  <Image
                    src={Image6}
                    alt="dog-image"
                    height={150}
                    width={150}
                    priority
                  />
                </div>
                <div className={styles.exploreServicesListName}>
                  PET VACCINATION
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <div className={styles.exploreServiceslist}>
                <div>
                  <Image
                    src={Image7}
                    alt="dog-image"
                    height={150}
                    width={150}
                    priority
                  />
                </div>
                <div className={styles.exploreServicesListName}>PET FOOD</div>
              </div>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <div className={styles.exploreServiceslist}>
                <div>
                  <Image
                    src={Image8}
                    alt="dog-image"
                    height={150}
                    width={150}
                    priority
                  />
                </div>
                <div className={styles.exploreServicesListName}>PET EVENT</div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles.healhTipsHeading}>Health Tips From Experts</div>

      <div className={styles.healhTipsContainer}>
        <div className={styles.healhTipsRow}>
          <div className={styles.healhTipsRowImgae}></div>
          <div className={styles.healhTipsRowSubheading}>
            <div>
              Pet Parenting 101: Stage-Wise Guide To Taking Care Of the Pet
              Mom-To-Be
            </div>
          </div>
          <div className={styles.healhTipsRowReadNow}>READ NOW</div>
        </div>
        <div className={styles.healhTipsRow}>
          <div className={styles.healhTipsRowImgae}></div>
          <div className={styles.healhTipsRowSubheading}>
            <div>How Do You Tell The Difference Between Ticks and Fleas?</div>
          </div>
          <div className={styles.healhTipsRowReadNow}>READ NOW</div>
        </div>
        <div className={styles.healhTipsRow}>
          <div className={styles.healhTipsRowImgae}></div>
          <div className={styles.healhTipsRowSubheading}>
            <div>What To Expert From A Tick And Flea Treatment Package?</div>
          </div>
          <div className={styles.healhTipsRowReadNow}>READ NOW</div>
        </div>
      </div>
    </div>
  );
}