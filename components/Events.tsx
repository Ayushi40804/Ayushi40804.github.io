"use client";
import { ParallaxScroll } from './ui/parallax-scroll';

const allMyEventsData = [
    {
      id: 'event-tech-summit-2023',
      title: 'Global Tech Summit',
      description: 'Attended keynotes on AI ethics, quantum computing, and sustainable tech.',
      date: 'Dec 15-17, 2023',
      type: 'event',
      eventRole: 'Participant',
      location: 'Virtual Event',
      link: 'https://globaltechsummit.org/2023',
      thumbnail: '/images/IMG_4106.jpg',
    },
    {
      id: 'event-dev-meetup',
      title: 'Web Dev Community Meetup',
      description: 'Presented a lightning talk on "State Management with Zustand in React".',
      date: 'Jan 20, 2024',
      type: 'event',
      eventRole: 'Speaker',
      location: 'Community Hall, Delhi',
      link: 'https://your-blog.com/zustand-talk',
      thumbnail: '/images/IMG_4108.jpg',
    },
    {
      id: 'event-ai-conf',
      title: 'AI & Data Science Conf.',
      description: 'Explored latest trends in generative AI and big data analytics.',
      date: 'April 5-6, 2024',
      type: 'event',
      eventRole: 'Participant',
      location: 'Bengaluru, India',
      link: 'https://www.aiconference.org/',
      thumbnail: '/images/IMG_4401.jpg',
    },
    {
      id: 'event-code-clinic',
      title: 'Open Source Code Clinic',
      description: 'Mentored newcomers in contributing to open source projects.',
      date: 'Feb 10, 2024',
      type: 'event',
      eventRole: 'Mentor',
      location: 'Online',
      link: 'https://github.com/events/oss-clinic',
      thumbnail: '/images/IMG_4439.jpg',
    },
    {
      id: 'event-ux-design',
      title: 'UX Design Workshop',
      description: 'Hands-on session on user research and prototyping.',
      date: 'March 2, 2024',
      type: 'event',
      eventRole: 'Participant',
      location: 'Design Studio, Mumbai',
      link: 'https://www.uxworkshop.com/',
      thumbnail: '/images/IMG_4490.jpg',
    },
    {
      id: 'event-nextjs-conf',
      title: 'Next.js Conf 2024',
      description: 'Attended keynotes and workshops on the latest Next.js features.',
      date: 'April 20, 2024',
      type: 'event',
      eventRole: 'Participant',
      location: 'Online',
      link: 'https://nextjs.org/conf',
      thumbnail: '/images/IMG_4101.jpg',
    },
    {
      id: 'event-local-hack-day',
      title: 'Local Hack Day',
      description: 'Participated in a 24-hour coding sprint, building a small web app.',
      date: 'May 5, 2024',
      type: 'event',
      eventRole: 'Participant',
      location: 'Local Community Hub',
      link: '#',
      thumbnail: '/images/IMG_4102.jpg',
    },
    {
      id: 'event-design-sprint',
      title: 'Product Design Sprint',
      description: 'Collaborated on a rapid prototyping session for a new product feature.',
      date: 'June 1, 2024',
      type: 'event',
      eventRole: 'Team Member',
      location: 'Innovation Lab',
      link: '#',
      thumbnail: '/images/IMG_4103.jpg',
    },
    {
      id: 'event-cybersecurity-webinar',
      title: 'Cybersecurity Best Practices Webinar',
      description: 'Learned about modern threats and defense strategies in cybersecurity.',
      date: 'May 15, 2024',
      type: 'event',
      eventRole: 'Participant',
      location: 'Online',
      link: '#',
      thumbnail: '/images/IMG_4104.jpg',
    },
];

export function Events() {
  const eventImages = allMyEventsData.map(item => item.thumbnail);

  return (
    <section className="relative py-20">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-b from-black to-gray-300 bg-clip-text text-transparent dark:from-white dark:to-black">
        Event Highlights
      </h2>
      <p className="max-w-2xl text-base md:text-xl text-center mx-auto mb-10 dark:text-neutral-200">
        Here are some of the notable events I&#39;ve participated in or spoken at.
      </p>

      <ParallaxScroll images={eventImages} className="w-full" />
    </section>
  );
}