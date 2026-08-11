export const site = {
  name: "The Pentecostals of Manhattan",
  shortName: "POM",
  description:
    "A Spirit-filled, Apostolic church in Manhattan, Kansas. Sundays at 10:30 AM at 530 Richards Dr.",
  url: "https://pomchurch.life",
  address: "530 Richards Dr., Manhattan, KS 66502",
  serviceTime: "Sundays at 10:30 AM",
  phone: "(316) 755-8767",
  phoneHref: "tel:+13167558767",
  email: "rev.dillon@pomchurch.life",
  maps: "https://maps.app.goo.gl/LU4FXKtguP14iGb58",
  instagram: "https://www.instagram.com/thepomks/",
  facebook:
    "https://www.facebook.com/p/The-Pentecostals-of-Manhattan-100093150242478/",
  live: "https://www.facebook.com/profile.php?id=100093150242478&sk=live_videos",
  recentMessage:
    "https://www.facebook.com/100093150242478/videos/2283765182467459/",
  giving: "https://tithe.ly/give_new/www/",
} as const;

export const nav = [
  { href: "/visit", label: "Visit" },
  { href: "/connect", label: "Connect" },
  { href: "/watch", label: "Watch" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/give", label: "Give" },
] as const;

export const ministries = [
  {
    title: "Kids",
    kicker: "Ages 2–11",
    body: "Safe, joyful environments where children learn the Bible and discover that Jesus is for them too.",
    image: "/images/kids-tug.jpg",
  },
  {
    title: "Youth",
    kicker: "Ages 12–18",
    body: "Real friendships, practical teaching, worship, and room for students to build a faith of their own.",
    image: "/images/community-wide.jpg",
  },
  {
    title: "Young Adults",
    kicker: "College + twenties",
    body: "Community for the decisions, questions, friendships, and calling that shape young adulthood.",
    image: "/images/community-couple.jpg",
  },
  {
    title: "Families",
    kicker: "Every season",
    body: "A church family that strengthens marriages, parents, children, and homes around the life of Jesus.",
    image: "/images/welcome-team.jpg",
  },
  {
    title: "Connection Groups",
    kicker: "Life beyond Sunday",
    body: "Smaller spaces for food, conversation, prayer, encouragement, and walking through life together.",
    image: "/images/conversation.jpg",
  },
  {
    title: "Bible Study",
    kicker: "Open the Word",
    body: "Personal and group Bible studies for anyone who wants to understand Scripture more clearly.",
    image: "/images/pastor-chat.jpg",
  },
] as const;

export const beliefs = [
  {
    title: "The Bible",
    body: "The Bible is the infallible Word of God and the authority for salvation and Christian living.",
    refs: "2 Timothy 3:15–17",
  },
  {
    title: "One God",
    body: "There is one God, revealed as Father, through His Son in redemption, and as the Holy Spirit. Jesus Christ is God manifested in flesh, both God and man.",
    refs: "Deuteronomy 6:4 · Ephesians 4:4–6 · Colossians 2:9 · 1 Timothy 3:16",
  },
  {
    title: "Salvation",
    body: "Everyone has sinned and needs salvation. Salvation comes by grace through faith, based on the atoning sacrifice of Jesus Christ.",
    refs: "Romans 3:23–25 · Romans 6:23 · Ephesians 2:8–9",
  },
  {
    title: "The Gospel Response",
    body: "The saving gospel is the good news that Jesus died, was buried, and rose again. We respond through repentance, water baptism in the name of Jesus Christ, and the baptism of the Holy Spirit.",
    refs: "1 Corinthians 15:1–4 · Acts 2:4, 37–39 · Romans 6:3–4",
  },
  {
    title: "Christian Living",
    body: "Christians are called to love God and others, live holy lives inwardly and outwardly, worship joyfully, and make room for the gifts of the Spirit in the church today.",
    refs: "Mark 12:28–31 · 2 Corinthians 7:1 · Hebrews 12:14 · 1 Corinthians 12:8–10",
  },
  {
    title: "The Return of Jesus",
    body: "Jesus Christ is coming again for His church. Scripture teaches a final resurrection, final judgment, eternal life for the righteous, and eternal death for the unrighteous.",
    refs: "1 Thessalonians 4:16–17 · Revelation 20:11–15",
  },
] as const;
