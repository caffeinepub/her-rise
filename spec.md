# HER RISE

## Current State
Multi-page website for "HER Foundation" with Home, About, Programs, Technology, Emergency Help, Report Incident, and Contact pages. Purple/pink OKLCH color palette with vector illustrations.

## Requested Changes (Diff)

### Add
- Home page: Club details/about section + "Meet Our Team" section with member cards (photo, name, role, study background). Photo slots use placeholder avatars that can be swapped.
- About page: Events/Upcoming Workshops section with cards showing event name, date, time, location. Easy to update by editing the events array at top of file.
- Contact page: Centralized config object at top of file for email, phone, social media links so they can be easily updated in one place.

### Modify
- Rename "HER Foundation" → "HER RISE" everywhere: Header, Footer, About page, Home page text, page titles, footer copyright.
- About page: keep existing content, add Events section below the timeline.
- Contact page: refactor to use a config object for all contact details and social links.
- Home page: add Club About section and Meet Our Team section after the hero/stats.

### Remove
- Nothing removed, only additions and renames.

## Implementation Plan
1. Header.tsx: change brand name to "HER RISE"
2. Footer.tsx: change brand name and copyright to "HER RISE"
3. Home.tsx: update name references, add club details section, add Meet Our Team section with sample members array (photo/avatar, name, role, study background)
4. About.tsx: update title, add Events section with updatable events array at top
5. Contact.tsx: extract CONTACT_INFO and SOCIAL_LINKS config objects at top, render from those
