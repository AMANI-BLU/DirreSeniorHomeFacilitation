const now = () => new Date().toISOString();

export const defaultContent = {
  version: 3,
  site: {
    logo: "/assets/docx-media/image6.png",
    logoAlt: "Dirre Seniors Home Facilitation logo",
    socialLinks: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61590348581465",
      },
    ],
  },
  posts: [
    {
      id: "post-1",
      title: "May 2026 Launch Workshop",
      slug: "may-2026-launch-workshop",
      status: "draft",
      author: "Admin",
      excerpt: "Inauguration program and Dubuluk Care Center workshop.",
      content:
        "The May 2026 launch introduced the Dirre Seniors Home Facilitation project to the community in Afaan Oromo and English, emphasizing local ownership and shared responsibility for elder care.",
      updatedAt: "2026-05-20T10:00:00.000Z",
    },
    {
      id: "post-2",
      title: "First Elders Welcomed Home",
      slug: "first-elders-welcomed-home",
      status: "published",
      author: "Admin",
      excerpt: "The first residents moved into prepared rooms at the Dubuluk Care Center.",
      content:
        "The project welcomed its first elders into safe, respectful spaces designed for rest, daily support, and community connection.",
      updatedAt: "2026-04-12T10:00:00.000Z",
    },
    {
      id: "post-3",
      title: "Dubuluk Care Center Opens",
      slug: "dubuluk-care-center-opens",
      status: "published",
      author: "Admin",
      excerpt: "The care center site is ready to serve elders.",
      content:
        "Prepared rooms, outdoor gathering areas, and visible project signage mark a new chapter for elder care in Borana.",
      updatedAt: "2026-03-08T10:00:00.000Z",
    },
    {
      id: "post-4",
      title: "Community Gathering Report",
      slug: "community-gathering-report",
      status: "published",
      author: "Admin",
      excerpt: "Elders, families, and local leaders gathered to celebrate the project vision.",
      content:
        "Community gatherings connect families, local leaders, and supporters around a shared commitment to dignified elder care.",
      updatedAt: "2026-02-02T10:00:00.000Z",
    },
  ],
  pages: {
    home: {
      meta: {
        title: "Dirre Seniors Home Facilitation",
        description:
          "Dirre Seniors Home Facilitation supports elders in Borana, Ethiopia through a respectful home and community care project.",
      },
      hero: {
        image: "/assets/photos/photo-23.jpg",
        imageAlt: "Community members gathered at the May 2026 launch workshop",
        eyebrow: "Dhaabbata Kunuunsa Maangudoota Dirree",
        title: "Dirre Seniors Home Facilitation",
        lead:
          "A community care project in Borana, Ethiopia—creating a safe, respectful home for elders affected by drought, hardship, and displacement. Together, we are building a future where every elder is cared for with dignity and belonging.",
        metaTags: ["Borana, Ethiopia", "May 2026 workshop", "Dignity-first elder care"],
        motto: "Elders: Our Pillars of Respect · Borana",
      },
      visionMission: {
        eyebrow: "Our Foundation",
        heading: "Vision & Mission",
        visionTitle: "Our Vision",
        vision: "An Ethiopia where every senior thrives with dignity, security, and vibrant community, fully recognized as a cherished pillar of the nation's heritage.",
        missionTitle: "Our Mission",
        mission: "Empowering vulnerable Ethiopian seniors through compassionate, holistic care that secures their health, dignity, and psychological well-being within safe, intergenerational communities.",
      },
      about: {
        eyebrow: "Why This Home Matters",
        heading: "Built from a lasting responsibility to elders.",
        paragraphs: [
          "Dirre Seniors Home Facilitation was established by Samuel Galgalo Dadacha, a local resident who later became a refugee in Canada and worked as a professional social worker. His connection to his homeland shaped a practical mission: help elders who have been overlooked and left to meet basic needs on their own.",
          "The Borana region is primarily pastoralist, and drought from 2020 to 2023 severely affected livelihoods. As many families lost livestock, older community members became especially vulnerable. The Senior Citizens Home Project responds with shelter, daily support, dignity, and a shared culture of compassion across generations.",
        ],
        image: "/assets/photos/photo-19.jpg",
        imageAlt: "Elders seated near the living quarters at the care center",
        figcaption: "Elders gathered outside the living quarters at the care center.",
      },
      founderPreview: {
        eyebrow: "Founder",
        heading: "Samuel Galgalo Dadacha connects social work with homeland responsibility.",
        body:
          "Samuel was raised with the values of Borana community life, later resettled in Canada as a refugee, and worked as a professional social worker. His experience shaped a practical belief: elders need care systems that protect dignity while responding to real daily needs.",
        image: "/assets/photos/founder-samuel.png",
      },
      care: {
        eyebrow: "Dubuluk Care Center",
        heading: "A place for shelter, gathering, and belonging.",
        accentLabel: "See the care center",
      },
      supportBand: {
        eyebrow: "Support the Mission",
        heading: "Help expand respectful care for elders in Borana.",
        body:
          "The project is built on compassion, responsibility, and practical care. Partnership support can help the home continue meeting elders' basic needs while strengthening a culture of respect across generations.",
      },
      news: {
        eyebrow: "Project News",
        heading: "Updates from the care center and community.",
      },
    },
    about: {
      meta: {
        title: "About | Dirre Seniors Home Facilitation",
        description: "Learn why Dirre Seniors Home Facilitation was created to support elders in Borana, Ethiopia.",
      },
      hero: {
        image: "/assets/photos/photo-07.jpg",
        imageAlt: "Entrance to the Dirre Seniors Home Facilitation site",
        eyebrow: "About the Project",
        title: "About Dirre Seniors Home Facilitation",
        deck:
          "Respectful care for elders in Borana—shelter, basic support, and dignity for community members affected by drought and hardship.",
      },
      visionMission: {
        eyebrow: "Our Foundation",
        heading: "Vision & Mission",
        visionTitle: "Our Vision",
        vision: "An Ethiopia where every senior thrives with dignity, security, and vibrant community, fully recognized as a cherished pillar of the nation's heritage.",
        missionTitle: "Our Mission",
        mission: "Empowering vulnerable Ethiopian seniors through compassionate, holistic care that secures their health, dignity, and psychological well-being within safe, intergenerational communities.",
      },
    },
    founder: {
      meta: {
        title: "Founder | Dirre Seniors Home Facilitation",
        description: "Founder story for Samuel Galgalo Dadacha and Dirre Seniors Home Facilitation.",
      },
      hero: {
        image: "/assets/photos/photo-08.jpg",
        imageAlt: "Samuel Galgalo Dadacha featured on OBN",
        eyebrow: "Founder",
        title: "Samuel Galgalo Dadacha",
        deck:
          "A Borana community member, refugee, and professional social worker whose commitment to elders shaped this home.",
        className: "page-hero--founder",
      },
    },
    careCenter: {
      meta: {
        title: "Care Center | Dirre Seniors Home Facilitation",
        description: "Explore the rooms, gathering spaces, and first elders of the Dubuluk Care Center.",
      },
      hero: {
        image: "/assets/photos/photo-20.jpg",
        imageAlt: "Elders seated outside the living quarters at the care center",
        eyebrow: "Dubuluk Care Center",
        title: "Dubuluk Care Center",
        deck:
          "A prepared place for elders to sleep, gather, and receive practical support in a respectful environment.",
      },
    },
    gallery: {
      meta: {
        title: "Gallery | Dirre Seniors Home Facilitation",
        description:
          "Photo gallery for Dirre Seniors Home Facilitation, Dubuluk Care Center, project launch, and first elders.",
      },
      hero: {
        image: "/assets/photos/photo-18.jpg",
        imageAlt: "Elders gathered outdoors at the Dirre Seniors Home site",
        eyebrow: "Gallery",
        title: "Project photo gallery",
        deck:
          "Facilities, launch moments, and elder care in action across the site, care center, and community gatherings.",
      },
    },
    support: {
      meta: {
        title: "Support | Dirre Seniors Home Facilitation",
        description: "Support options for Dirre Seniors Home Facilitation and elder care in Borana, Ethiopia.",
      },
      hero: {
        image: "/assets/photos/photo-22.jpg",
        imageAlt: "Community leaders seated at the May 2026 launch workshop",
        eyebrow: "Support the Mission",
        title: "Support the mission",
        deck:
          "Partnership support helps the care center meet basic needs and welcome more elders into a safe, respectful environment.",
      },
      contact: {
        person: "Samuel Galgalo",
        position: "Founder & Executive Director",
        address: "P.O. Box 220 Yaballo, Ethiopia",
        tel: "+251 954 72 93 00",
        email: "dirreseniorhomefacilitation@gmail.com",
      },
    },
  },
};

export const pageList = [
  { key: "home", name: "Home", path: "/" },
  { key: "about", name: "About", path: "/about" },
  { key: "founder", name: "Founder", path: "/founder" },
  { key: "careCenter", name: "Care Center", path: "/care-center" },
  { key: "gallery", name: "Gallery", path: "/gallery" },
  { key: "support", name: "Support", path: "/support" },
];

export function createEmptyPost() {
  const date = now();
  return {
    id: `post-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    title: "Untitled post",
    slug: `post-${Date.now()}`,
    status: "draft",
    author: "Admin",
    excerpt: "",
    content: "",
    updatedAt: date,
  };
}
