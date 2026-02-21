import type { Metadata } from "next";
import Gallery from "@/components/media/Gallery";
// import VideoSection from "@/components/media/VideoSection";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Media Gallery - Construction Photos & Videos | Dmaan Group",
  description:
    "Browse photos and videos of our construction projects, modular kitchens, and architectural designs in Ambala, Haryana.",
  keywords: [
    "construction gallery",
    "project photos Haryana",
    "construction videos",
    "modular kitchen images",
  ],
  openGraph: {
    title: "Media Gallery - Dmaan Group",
    url: "https://dmaangroup.com/media",
  },
  alternates: {
    canonical: "https://dmaangroup.com/media",
  },
};

export default function MediaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MediaGallery",
    name: "Dmaan Group Media Gallery",
    description:
      "A visual gallery of construction photos and videos by Dmaan Group in Ambala and Haryana.",
    hasPart: [
      // Image objects
      {
        "@type": "ImageObject",
        name: "Project Gallery Photo 1",
        contentUrl: "https://dmaangroup.com/images/gallery/img-1.jpg",
        thumbnailUrl: "https://dmaangroup.com/images/gallery/img-1.jpg",
      },
      {
        "@type": "ImageObject",
        name: "Project Gallery Photo 2",
        contentUrl: "https://dmaangroup.com/images/gallery/img-2.jpg",
        thumbnailUrl: "https://dmaangroup.com/images/gallery/img-2.jpg",
      },
      // Video objects
      {
        "@type": "VideoObject",
        name: "Construction Process Overview",
        description: "Construction process at one of our project sites",
        thumbnailUrl: "https://dmaangroup.com/images/video-thumb-1.jpg",
        embedUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
        uploadDate: "2025-01-01T08:00:00+00:00",
      },
      {
        "@type": "VideoObject",
        name: "Modular Kitchen Installation",
        description: "Modular kitchen installation walkthrough",
        thumbnailUrl: "https://dmaangroup.com/images/video-thumb-2.jpg",
        embedUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
        uploadDate: "2025-01-05T08:00:00+00:00",
      },
    ],
  };

  return (
    <>
      {/* JSON‑LD Structured Data for Media Gallery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Page Header */}
      <div className="text-center relative bg-black/10 py-16 mt-[-3vh]">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/bg.png"
            alt="background"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
        </div>
        <h1 className="text-3xl text-primary-600 font-bold">Media Gallery</h1>
        <p className="text-gray-300">
          Visual journey through our construction excellence
        </p>
      </div>
      <section className="media-page container max-w-5xl mx-auto px-4 py-8 space-y-6">
        {/* Photos Gallery */}
        <Gallery />

        {/* Video Gallery Section */}
        {/* <VideoSection /> */}
      </section>
    </>
  );
}
