"use client";
import React from 'react';
import { Timeline } from './ui/timeline';

const allMyEventsData = [
  {
    id: 'CTF-EVENT',
    title: 'DEFCON Capture The Flag',
    description: 'Attended keynotes on AI ethics, quantum computing, and sustainable tech.',
    date: '31 March, 2024',
    type: 'event',
    eventRole: 'Keynote Speaker',
    location: 'Audotorium, Campus-17, KIIT, Bhubaneswar',
    images: ['/images/IMG_4108.jpg', '/images/IMG_4401.jpg', '/images/IMG_4439.jpg', '/images/IMG_4490.jpg'],
    attendees: '2000+'
  },
  {
    id: 'Project Wing 2025',
    title: 'Project Wing 2025',
    description: 'Presented a lightning talk on "State Management with Zustand in React".',
    date: '12 Jan 2025',
    type: 'Orientation',
    eventRole: 'keynote speaker',
    location: 'Auditorium, Central Library, KIIT, Bhubaneswar',
    images: ['/images/IMG_4101.jpg', '/images/IMG_4102.jpg', '/images/IMG_4103.jpg'],
    attendees: '1500+'
  },

];

export function Events() {
  const timelineEvents = allMyEventsData.map(event => ({
    title: event.title,
    content: (
      <div className="text-neutral-700 dark:text-neutral-300">
        <p className="mb-2">
          <span className="font-semibold">Date:</span> {event.date}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Role:</span> {event.eventRole}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Location:</span> {event.location}
        </p>
        <p className="mb-2"> {/* Added attendee info */}
          <span className="font-semibold">Attendees:</span> {event.attendees || 'N/A'}
        </p>
        <p className="mb-4">{event.description}</p>


        {event.images && event.images.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-4">
            {event.images.map((imageSrc, imgIndex) => (
              <img
                key={`${event.id}-img-${imgIndex}`}
                src={imageSrc}
                alt={`${event.title} image ${imgIndex + 1}`}
                className="rounded-md object-cover max-w-full h-48 sm:h-auto sm:max-w-xs"
              />
            ))}
          </div>
        )}
      </div>
    ),
  }));

  return (
    <section className="relative py-20">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-b from-black to-gray-300 bg-clip-text text-transparent dark:from-white dark:to-black">
        My Journey & Events
      </h2>
      <p className="text-center text-lg md:text-xl mb-12 text-gray-600 dark:text-gray-400">
        Explore my journey through key events, talks, and milestones.
      </p>
      <Timeline data={timelineEvents} />
    </section>
  );
}