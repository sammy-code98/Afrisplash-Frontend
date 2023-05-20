/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import InfoCard from "components/InfoCard/InfoCard";
import GeneralLayout from "layouts/generalLayout";
import styles from "styles/Hire-talent.module.scss";
import AppleLogo from "assets/hire-talent-assets/apple-logo.svg";
import ArrowLeft from "assets/hire-talent-assets/arrow-left.svg";
import BlockQuote from "assets/hire-talent-assets/blockquote-xl.svg";
import CheckBox from "assets/hire-talent-assets/round-bold-check.svg";
import CallIcon from "assets/hire-talent-assets/call_calling.svg";
import FillForm from "assets/hire-talent-assets/fill-the-form.svg";
import GetSchedule from "assets/hire-talent-assets/get-matched.svg";
import GoogleLogo from "assets/hire-talent-assets/google-logo.svg";
import Img1 from "assets/hire-talent-assets/img_1.png";
import Img2 from "assets/hire-talent-assets/img_2.png";
import Img3 from "assets/hire-talent-assets/img_3.png";
import Img4 from "assets/hire-talent-assets/img_4.png";
import Img5 from "assets/hire-talent-assets/img_5.png";
import Img6 from "assets/hire-talent-assets/img_6.png";
import Img7 from "assets/hire-talent-assets/img_7.png";
import Img8 from "assets/hire-talent-assets/img_8.png";
import Metalogo from "assets/hire-talent-assets/Meta-Logo.svg";
import MicrosoftLogo from "assets/hire-talent-assets/Microsoft-logo.svg";
import BookIllustrator from "assets/hire-talent-assets/pana.svg";
import ReviewProfile from "assets/hire-talent-assets/review-profile.png";
import ReviewProfile2 from "assets/hire-talent-assets/review_profile2.png";
import ReviewProfile3 from "assets/hire-talent-assets/review_profile3.png";
import ScheduleCall from "assets/hire-talent-assets/schedule-call.svg";
import TwitterLogo from "assets/hire-talent-assets/twitter-logo.svg";

const HireTalent: NextPage = () => {
  return (
    <div className={styles.hireTalent}>
      <Head>
        <title>Afrisplash</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GeneralLayout>
        {/* <section className={styles.section1}>
          <article className={styles.article1}>
            <h1>
              <span className={styles.green}>
                F<span className={styles.red}>in</span>d
              </span>
              ,
              <span className={styles.green}>
                At<span className={styles.red}>trac</span>t
              </span>{" "}
              and <span className={styles.green}> H</span>
              <span className={styles.red}>ire </span>
              <span className={styles.downH3}>AFRICAN TECH TALENTS </span>
              <br />
              <span>🌍</span>
            </h1>
            <p>
              Get matched with remote-ready African talents from Africa&apos;s
              #1 remote work community🌍.
            </p>
          </article>
          <section className="flex flex-col items-center justify-center w-full">
            <div className="flex  flex-wrap items-center justify-center ">
              <Image src={Img1} alt="" />
              <Image src={Img2} alt="" />
              <Image src={Img3} alt="" />
              <Image src={Img4} alt="" />
            </div>
            <div className="flex flex-wrap items-center justify-center">
              <Image src={Img5} alt="" />
              <Image src={Img6} alt="" />
              <Image src={Img7} alt="" />
              <Image src={Img8} alt="" />
            </div>
          </section>
          <article className={styles.book}>
            <div className={styles.bookIllustrator}>
              <Image src={BookIllustrator} alt="Book Ilustrator" />
            </div>
            <div className={styles.bookContent}>
              <h3>Get the best candidate profiles straight to your inbox</h3>
              <ul>
                <li>
                  Connect with your next remote-ready African talent for
                  full-time or project-based employment.
                </li>
                <li>
                  Reduce time-to-hire 55% by filling your direct sourcing
                  pipeline with ready-to-work candidates.
                </li>
                <li>
                  Increase the quality of your hires by matching with skills,
                  experience and personality traits pre-screening.
                </li>
              </ul>
              <button className={styles.bookBtn}>
                <Image src={CallIcon} alt="" />
                <span className={styles.bookbtncontent}>Book a call now</span>
              </button>
            </div>
          </article>
        </section> */}
        {/* <section className={styles.section2}>
          <h3>
            Hire directly from a pool of remote-ready tech talents from various
            parts of Africa.
          </h3>
          <div>
            <button className={styles.viewTalentBtn}>
              View Talent Directory
            </button>
            <button className={styles.requestTalentBtn}>
              Request Talent Match
            </button>
          </div>
        </section> */}
        {/* <section className={styles.infoSection}>
          <h3>Get matched with the best talents</h3>
          <div className={styles.cardContainer}>
            <InfoCard
              image={FillForm}
              header={"Fill the form"}
              content={`Request for talent (s) by request above with the necessary details.
          Our team will reach out to you or your team in 3 business days`}
            />
            <InfoCard
              image={ScheduleCall}
              header={"Schedule call"}
              content={`Have a strategy session to discuss the desired skills, experience, and personality traits youre looking for. 
            This also includes the project budget or salary range plus any other matters related to your ideal talent. `}
            />
            <InfoCard
              image={GetSchedule}
              header={"Get matched"}
              content={`We do the heavy lifting. Our AIpowered platform evaluates your preference against the best candidates to match you with the top 1%.`}
            />
          </div>
          <p className={styles.infoPara}>We’re here to assist you:</p>
          <form>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.email}
              placeholder="hiretalent@afrisplash.com"
            />
            <button className={styles.emailBtn}>
              Talk to us <Image src={ArrowLeft} alt="" />
            </button>
          </form>
        </section> */}
        <section className={styles.reviewSection}>
          <h3>
            What remote-first companies say about the AfriSplash Remotely
            community
          </h3>
          <div className={styles.reviewContainer}>
            <article>
              <p>
                “Afrisplash Remotely is a great community, the team is super
                fantastic and helped me to find the best talent matching our
                expectations. We would love to keep engaging with the team and
                contribute as much as we can to grow this community.”
              </p>
              <div className={styles.profile}>
                <Image src={ReviewProfile} alt="" />
                <div className={styles.profileDetails}>
                  <p>Luis Alfonso Barroso</p>
                  <p>Founder @ Rootlo</p>
                </div>
              </div>
            </article>
            <article className={styles.centerArticle}>
              <div className={styles.blockQuote}>
                <div className={styles.blockQuoteContainer}>
                  <Image src={BlockQuote} alt="" />
                </div>
              </div>
              <p>
                “Afrisplash Remotely is a great community, the team is super
                fantastic and helped me to find the best talent matching our
                expectations. We would love to keep engaging with the team and
                contribute as much as we can to grow this community.”
              </p>
              <div className={styles.profile}>
                <Image src={ReviewProfile2} alt="" />
                <div className={styles.profileDetails}>
                  <p>Ujjwal Singh</p>
                  <p>Founder @ Haulify</p>
                </div>
              </div>
            </article>
            <article className={styles.lastArticle}>
              <p>
                “Afrisplash Remotely is a great community, the team is super
                fantastic and helped me to find the best talent matching our
                expectations. We would love to keep engaging with the team and
                contribute as much as we can to grow this community.”
              </p>
              <div className={styles.profile}>
                <Image src={ReviewProfile3} alt="" />
                <div className={styles.profileDetails}>
                  <p>Ujjwal Singh</p>
                  <p>Founder @ Haulify</p>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className={styles.industrySection}>
          <h3>
            Work with talents who learn how to do remote work from industry
            leaders
          </h3>
          <div className={styles.industryImgContainer}>
            <Image src={MicrosoftLogo} alt="" />
            <Image src={TwitterLogo} alt="" />
            <Image src={Metalogo} alt="" />
            <Image src={AppleLogo} alt="" />
            <Image src={GoogleLogo} alt="" />
          </div>
        </section>
        <section className={styles.remarkSections}>
          <div className={styles.remarkContainer}>
            <div className={styles.remarks}>
              <Image src={CheckBox} alt="" />
              <p>
                More remote talents within the community have access to global
                remote leaders.
              </p>
            </div>
            <div className={styles.remarks}>
              <Image src={CheckBox} alt="" />
              <p>
                We don&apos;t just offer you the top 1% of talent. We offer you
                grit, skill, creativity and the right fit.
              </p>
            </div>
            <div className={styles.remarks}>
              <Image src={CheckBox} alt="" />
              <p>
                We build on mutual trust to promote the remote working culture.
              </p>
            </div>
          </div>
        </section>
      </GeneralLayout>
    </div>
  );
};

export default HireTalent;
