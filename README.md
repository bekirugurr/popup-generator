# Popup Generator App
<a href="https://www.typescriptlang.org/" rel="nofollow"><img src="https://user-images.githubusercontent.com/94041207/199342867-cdda2871-0051-411f-aa73-f357f2852502.png" height="30" alt="Typescript" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" style="max-width: 100%;"></a>
<a href="https://reactjs.org/" rel="nofollow"><img src="https://user-images.githubusercontent.com/94041207/199342992-af36d9e7-8dc7-4329-a635-33b6702dff18.png" height="30" alt="React" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="max-width: 100%;"></a>
<a href="https://nextjs.org/docs" rel="nofollow"><img src="https://user-images.githubusercontent.com/94041207/199343314-ca25b2c5-2801-48ef-9aa0-ff5c3b8126b0.png" height="30" alt="NextJs" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" style="max-width: 100%;"></a>
<a href="https://redux.js.org/" rel="nofollow"><img src="https://user-images.githubusercontent.com/94041207/199343229-b52eb0bd-2173-4b31-8205-457eb907cf36.png" height="30" alt="Redux" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" style="max-width: 100%;"></a>
<a href="https://tailwindcss.com/" rel="nofollow"><img src="https://user-images.githubusercontent.com/94041207/199343872-4e273c81-b9dc-4be1-9271-06b8a5324c81.png" height="30" alt="TailwindCSS" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" style="max-width: 100%;"></a>
<a href="https://vercel.com/" rel="nofollow"><img src="https://user-images.githubusercontent.com/94041207/199351014-f893e89f-84ab-4207-96a5-a36f077f23f5.png"  height="30" alt="Vercel" style="max-width: 100%;"></a>
<a href="https://www.figma.com/" rel="nofollow"><img src="https://user-images.githubusercontent.com/94041207/199347184-f5ff8490-ad77-4ac0-993c-d1a3e34f0d96.png"  height="30" alt="Figma" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" style="max-width: 100%;"></a>

<p>Eslint & Prettier & React-Dropzone </p>

## Demo

<a href="https://popup-generator.vercel.app/" target="_blank"> Live link 🚀 </a>
## Description 
This app creates modular popups/modals that users can use them into their webpages without knowing coding. Users can customize size, content, position, color of modals. They can add image if chosen modal allows. They can determine in which kind of device (desktop, mobile or both) modal will appear, how many seconds after site opened or after what percentage of the page scrolled the modal will appear. Users can also allow to modal to appear for whom only come with links from certain sites and who have certain browser languages. Finally users can allow modal to apper when visitor moves out the mouse cursor to close tab. After these customization process, users get a short code snippet. After just pasting this snippet to a body of an html file the modal will work. Only requirement is tailwind must be installed to the html.

## How users customize modals and use them in their site:  
1- Users choose a modal template from 12 template (I'll make it to 36) according to his need. 

2- Users choose the size of modal. Size change is not reflect to my site. But it will be setted and seen in user’s website when they use

3- Users can determine position of modal in their webpage. There are 9 different position alternatives for modals. Again, this regulation is not reflect to my website. But it will work in users websites.

4- Users can change the color of certain parts of modals. This colored certain parts change from modal to modal. It may be color of whole modal, color of a one or twe button, color of a icon or image background, text color. When users change color, it will be reflected on my page synchronously. There are 5 color alternatives. 

5- If model contain an image or logo/icon, users can change default image or logo with by drag drop or clicking ‘upload’ link. If the modal contains an image or logo, the image upload feature will appear, otherwise the image upload feature will not. Some modals contains both image and logo, so when users select them both image upload feature and logo upload feature will appear in my site. 

6- All text content are customizable regardless text is in header, paragraph, placeholder, button, link or subtext . Users can change them what they want. 

7- Users can determine in which kind of device modal will appear. If they choose desktop, it won’t appear in mobile browsers or vice versa. Default value is both, that means modals will appear both mobile and desktop browsers. If users close this feature with checkbox, value will be both

8- Users can determine how many seconds after their webpage is opened, the selected model will appear. If users close this feature with checkbox, there won’t be a waiting time

9- Users can determine after what percentage of the page scrolled, the selected model will appear. If users close this feature with checkbox, modal will appear immediately. 

** If user customize both “After X Seconds” and “After % Scroll” features, whichever is triggered first the modal will appear and the other will be disabled for this session

10- Users can allow to modal to appear for whom only come with links from certain sites. For example, if facebook is selected as the traffic source, the modal will appear only to those who come by clicking the links on facebook. If users turn off this feature with checkbox or do not specify any site, the modal will appear to all users, regardless of where they came from.

11- Users can allow to modal to appear for who have certain browser languages. For example, if the user selects French and Portuguese as the allowed browser language, the modal will appear only to those whose browser language is French or Portuguese, and not to those whose browser language is English, German or Turkish. By default modals appear in all languages. 

12- Modals should only be appeard once and should not be opened after closing. The only exception is the "Exit Targeting" feature. With this feature, even if the visitor closes the modal on first opening, after navigating the page, the modal will appear again when dragging the mouse cursor to the top of the browser to close the tab. But this feature only works once. The modal does not reappear when the user drags the mouse cursor up again. By default this feature is active unless users close it by checkbox radio button

13- After all these customization, clicking the two required checkboxes and "Get your Code" button, a short code snippet appears in the down section.

14- The only requirements for users to use modals is that tailwind must be installed on their website. If this requirement was met, users should paste the copied code snippet just before the "</body>" tag in the html file where they want the Modal to run. 

15- Now users have a working modal on their website that they set up entirely by themselves. Most importantly, without writing any code.
