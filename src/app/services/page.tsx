import styles from "./page.module.css";
import VideoTitle from "@/components/Container/VideoTitleSection";
import SubscribeSection from "@/components/Container/SubscribeSection";
import TileContainer from "@/components/Container/TileLayout";
import { facility_data } from "@/mock_data/service_data";
import FacilityCard from "@/components/Container/FacilityCard";

export default function Home() {
  return (
    <main>
      <section className={styles.service_main_section}>
        <div className={`container ${styles.service_container}`}>
          <div className={styles.service_main_inner}>
            <VideoTitle
              video="https://colabs.yourcreative.com.au/wp-content/uploads/2023/06/Lab-Vortex_1.mp4"
              title="Co-Labs gives people a place to experiment and create"
            />
          </div>
        </div>
      </section>
      <section className={styles.content_section}>
        <div className="container">
          <div className={styles.content_main}>
            <h3>
              By facilitating systems innovation we believe we can generate
              social, economic and environmental outcomes that will benefit the
              health and well-being of people and the planet.
            </h3>
          </div>
        </div>
      </section>
      <section className={styles.facility_section}>
        <TileContainer category="Why Colabs">
          {facility_data.map((data, index) => (
            <FacilityCard
              key={`facilty-${index}`}
              title={data.title}
              description={data.description}
              icon={data.icon}
            />
          ))}
        </TileContainer>
      </section>
      <SubscribeSection image="https://colabs.yourcreative.com.au/wp-content/uploads/2024/03/Co-Labs-Member-2-scaled.jpg" />
    </main>
  );
}
