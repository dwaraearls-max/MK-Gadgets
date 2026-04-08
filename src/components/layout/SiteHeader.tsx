import { AnnouncementBar } from "./AnnouncementBar";
import { Header } from "./Header";

/** Sticky announcement + navigation */
export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50">
      <AnnouncementBar />
      <Header />
    </div>
  );
}
