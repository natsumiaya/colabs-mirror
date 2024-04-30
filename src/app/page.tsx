import styles from "./page.module.css";

import ButtonArrow from "@/components/ButtonArrow";
import FlickerStats from "@/components/StatisticSection/FlickerStats";
import LinkCard from "@/components/LinkCards";
import CommunitySummaryCard from "@/components/CommunitySummaryCard";
import SwiperServiceShowcase from "@/components/ServiceSection/SwiperServiceShowcase";

import {
  blog_data,
  community_summary_data,
  principle_data,
  service_showcase_data,
  statistic_data,
} from "@/mock_data/home_data";

import LeftCorner from "@/assets/icons/left-corner.svg";
import RightCorner from "@/assets/icons/right-corner.svg";
import ArrowIcon from "@/assets/icons/arrow";
import ServiceShowCaseCard from "@/components/ServiceSection/ServiceShowCaseCard";
import { formatTitleToLowerCase } from "./utils/formatter";
import CircleImageCard from "@/components/CircleImageCard";
import ClientJarallax from "@/components/ParallaxComponent/client_index";
import BlogImageSlider from "@/components/BlogSliderSection/ImageSlider";
import BlogContentSlider from "@/components/BlogSliderSection/BlogContentSlider";
import BlogShowCaseCard from "@/components/BlogShowCaseCard";
import SubscribeSection from "@/components/SubscribeSection";

export default function Home() {
  return (
    <main>
      <section className={styles.main_section}>
        <div className="container">
          <div className={styles.main_inner}>
            <div className={styles.main_content}>
              <video
                playsInline
                autoPlay
                muted
                loop
                src="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/colabs-hero.mp4"
              ></video>
              <div className={styles.main_title}>
                <LeftCorner />
                <h1>
                  Making
                  <br /> space for transformative innovation
                </h1>
                <div>
                  <ButtonArrow type="light" />
                </div>
                <RightCorner />
              </div>
            </div>
            <div className={styles.details_container}>
              <FlickerStats data={statistic_data} />
              <div className={styles.home_links}>
                <LinkCard
                  url="/contact"
                  title="Join the Lab"
                  image="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/dragonfly-1.jpg"
                />
                <CommunitySummaryCard data={community_summary_data} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.purpose}>
        <div className={`container narrow ${styles.purpose_content}`}>
          <h2>
            We design, build and run collaborative spaces where bio-led science,
            technology and people can thrive
          </h2>
        </div>
      </section>
      <section className={`ServicesShowcase ${styles.service_showcase}`}>
        <div className={`container narrow ${styles.service_continue}`}>
          <div className={styles.service_intro}>
            <div className="pill">Our Services</div>
          </div>
        </div>
        <div className={styles.service_showcase_content}>
          <SwiperServiceShowcase>
            {service_showcase_data.map((datum, index) => (
              <ServiceShowCaseCard
                key={`service-showcase-card-${index}`}
                title={datum.title}
                className={`service-${formatTitleToLowerCase(datum.title)}`}
                image={`serviceShowcase/${index + 1}.jpg`}
              />
            ))}
          </SwiperServiceShowcase>
        </div>
      </section>
      <section>
        <div className={`container ${styles.principle_feature_container} `}>
          <div className={styles.principle_feature_inner}>
            <div className={styles.principle_feature_bg}>
              <video
                src="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/homepage-cells.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className={styles.principle_feature_copy_container}>
              <ul>
                <li>
                  <h4>Reposition Science</h4>
                </li>
                <li>
                  <h4>Redefine our Approach</h4>
                </li>
                <li>
                  <h4>Rethink Entrepreneurship</h4>
                </li>
                <li>
                  <h4>Regenerate our Planet</h4>
                </li>
              </ul>
              <a
                href="https://colabs.com.au/our-principles"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <span>
                  <div className={styles.principle_feature_button}>
                    <span>Our Principles</span>
                    <div>
                      <ArrowIcon />
                    </div>
                  </div>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.cta_grid}>
        <div className="container">
          <div className={styles.ctas}>
            {principle_data.map((datum, index) => (
              <div className={styles.cta} key={`principles-${index}`}>
                <a
                  href={datum.link}
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <span>
                    <h4>{datum.title}</h4>
                    <div className={styles.cta_image_container}>
                      {index > 0 ? (
                        <ClientJarallax
                          image={datum.image}
                          className={styles.cta_image}
                        />
                      ) : (
                        <CircleImageCard
                          alt={`${formatTitleToLowerCase(datum.title)}-icon`}
                          image={datum.image}
                          className={styles.cta_image}
                        />
                      )}
                    </div>
                    <div className={styles.cta_button_container}>
                      <div className={styles.cta_button}>
                        <span>
                          <ButtonArrow
                            href={datum.link}
                            target="_blank"
                            referrerPolicy="no-referrer"
                          />
                        </span>
                      </div>
                    </div>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.blog_slider_container}>
        <div className="container">
          <div className={styles.blog_slider_post}>
            <div className={styles.blog_slider_image}>
              <div className={styles.blog_slider}>
                <BlogImageSlider data={blog_data} />
              </div>
            </div>
            <div className={styles.blog_slider_details}>
              <div className={styles.blog_slider_content}>
                <BlogContentSlider data={blog_data} />
              </div>
              <div className={styles.blog_slider_button}>
                <ButtonArrow
                  href={blog_data[0].uri}
                  type="dark"
                  spanText="Read More"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.write_content_container}>
        <div className={`container narrow ${styles.write_content}`}>
          <h2>Space for big thinking, problem-solvers and bio-innovators</h2>
        </div>
      </section>
      <section className={styles.blog_showcase_container}>
        <div className={`container narrow ${styles.blog_showcase}`}>
          <div className={styles.blog_showcase_intro}>
            <div className="pill">Community</div>
          </div>
          <div className={styles.blog_showcase_posts}>
            {blog_data.slice(0, 3).map((data, index) => (
              <BlogShowCaseCard
                key={index}
                title={data.title}
                description={data.description}
                tag={data.tag}
                image={data.image}
                url={data.uri}
              />
            ))}
          </div>
        </div>
      </section>
      <SubscribeSection image="https://colabs.yourcreative.com.au/wp-content/uploads/2024/03/CoLabs-IWD-22-scaled-e1711597962490.jpg" />
    </main>
  );
}
