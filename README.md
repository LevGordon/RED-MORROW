This repository marks the beggining of two journeys:

One is my career as a web developer. More specifically, where will I find myself in 2, 5, 10 years? Will I even go on that long or what if go on for the rest of my life? Who knows and surprise is one of life's many pleasures, so all I can do is take it in stride with my arms open. All I know right now - is that this project is the first thing I will accomplish as a solo developer. No academic tutors, no classmates to share answers with, just me and the web. Success within an academic environment does not prove ones capability of achievment, only achievments do and those are earned through actions and effort. This shall be my first.

The second journey is the project itself. Let me talk about it for a second (to perhaps 1-2 people who will have the desire to read this). I, being a proggress-motivated individual with a ever-growing bond to conceiving creative ideas and imlementations, have over-planned this project before it even began, as per usual... 
Whilst many consider overthinking a bad tendency, I think of it as a mere tool. Sorry to get political but this metaphor begs it: A gun is a chunk of metal asssembled in a lethal way and the decisive factor of whether its good or bad is its use. Guns are bad when used to kill people, but good for hunting purposes. 
As always - it is a matter of perspective, and my perspective on the fate of this project is that overthinking is not only acceptable under the circumstances but even encouraged. 

This is a website for my dream. A creative outlet that I am attached to emotionally, like a father is to his child. Music is something I changed my whole life for and it is a gateway to peep inside the most truthful, honest me there is. And if I am so excited for a project that partially represents my dream and a huge part of my identity - why not indulge myself and dive into it headfirst? 

- A chatting screen for fans to discuss songs? Why the hell not?
- The ability to play songs whilst on the website? Lets do it!
- A fully functional/ statistic tracking online shop with merchandise? Lets open YouTube and learn how to do it!

Potential is limitless and in a project where I get to make something for the band I am so deeply invested in - I am my own judge, my own boss and my own god too.
With lightning blasting from my fingertips - this is the place I will attempt the impossible just because I want to.

#UPDATES

8/24/22 - created react app, wrote a heart felt readme (which is likely to change at some point). TLDR - prepared the project for starting when I will be inspired.

8/25/22 - uploaded stock photos of the logo and changed some of the default react app settings. Currently in planning and discussion phase about where to take this as there are a few approaches in my mind.

10/2/22 - Had a team meeting with the lads, we had our disagreements but came to a rough plan of action. Must-have functionality was named and listed, that needs to be developed in a rough form. And then, we can go from there. Simple, yet very artist-esque. We shall see how that goes but this is still, a primarily learning endeavor. 

After some time off I was inspired to start the same day. I laid out a skeletal structure dividing the project into "digestible pieces", to start assembling it bit by bit. Starting with the routes and keeping the virtual "path" a user might take in mind - I created all of the components and worked on routing them. 

Tomorrow, I also plan to contact my designer friend to aid me with a design/styling idea I had for the home page / background images. Will update on that.

10/3/22 - I got in touch with my designer friend but he couldn't talk for long. I briefed him on the ideas and what I need him to do - work will begin tomorrow. Today, I mainly worked on my final capstone for thinkful. But Red Morrow-wise, I mainly focused on getting the routes in order and by the end of the day not quite achieving everything. No biggie - I just need to educate myself on the newer Routes (previously Switch) syntax that came in the newer version of React.

10/5/22 - fixed routing, not enough time for anything else today.

10/6/22 - started working on a NavBar. Made a primitive, yet responsive version. Learned something new today with window.innerWidth and window.innerHeight. I got the design plan laid out, will make the links work tomorrow.

10/9/22 - made a footer with working links. Nothing too fancy, just a simple nav-oriented footer to help redirect people upon scrolling all the way down. I also wanted to add links to places outside of the webiste like "Mourn the living music video". This should potentially add flow to the viewer count. Nothing much to say except for - primitive footer done. 

At this point in time I am developing only the bare structure of the website. I want it to be displayable enough for my non-technical bandmates to give me relevant feedback. Looks first - functionality later. I don't like this, but this is a band website and I have to do what I believe is best for the collective.

10/10/22 - adjusted css of the footer, adjusted css of the navbar. Added an onClick to the "menu" button which triggers a state-change and shows a menu of things to click on. For now the design is the same as the footer, but I will work on that tomorrow.

10/11/22 - created the majority of the /shop page. Since we don't have a way of selling shirts abroad or even nationally - the best we can offer is to showcase what we have and invite the people viewing to purchase these things at our next shows. We also offer deliveries in the LA / San Diego area which were mentioned and a link to /contact was added. I also worked on the footer and fixed a few bugs alongside settling on a simpler design and implementing those changes.

10/12/22 - Today was day 1 of the mounr the living music video shoot and therefore only worked in the morning. This whole week is filming and more filming so I don't have much time to code. I did however, manage to work on the responsiveness of the shop and make it adjust layout dependent on screen width. I have transfered useWindowSize() from the navbar to a newly created "utils" folder, where I can use it over and over without duplicating code.

10/13/22 - Theres a lot of filming to be done in the evening, so I worked hastily on this project in the morning. I pretty much finished the contact page (rest will be up to designer and me placing elements in correct spots). It's responsive and shows our contact information. I will need to add links to the images for which I need to view a video tutorial (I want to know how to get access to a link that redirects to an open draft email addressed to Red Morrow. I am also considering adding an email-component from the vast npm selection that will allow users to write an email without leaving the site. (REMEMBER TO DO THIS LEV)

10/14/22 - Investigated an email form service called EmailJS which I intend on using. Not enough time to implement due to mourn the living music video shoot. But - I talked with Caleb, showed him my progress so far and we made swift changes for me to bounce off and continue plowing. Those changes include: a new blog section and articles that support it. CSS changes to footer and navbar, corrections in merch shop, contact. Discussed about page.

10/15/22 - Succesfully learned and implemented the EmailJS contact form add-on. Styled, works and also added a feature using useState() that notifies the user when the email is sent (EmailJS doesn't do that) and also prevents spam-clicking. Upon page reload the user can send another email. As before - I did the bare essentials and all of functionality - the rest is for the designer. Also fixed a few layout issues that occured with the addition of the blog.

10/16/22 - Today I realized that the useState that I implemented earlier actually made EmailJS stop working. I fixed the bug by adding a setTimeout(). I also spent a good 1.5 hours attempting to install and make use of DOTENV but it has become increasingly complicated with newer versions of react. I give up for today but I will attempt again tomorrow. 

10/19/22 - It was a very productive day. I got a lot done and compensated plenty for lost coding time yesterday (video shoot). Here is the list:
- fixed dotenv bug by deleting dotenv and installing react-dotenv instead. 
- found and used a new npm package called "react-expanding-textarea" and it is pretty self explanatory.
- spent this morning studying react spring and animating state-change. Although I don't have a great understanding just yet - I really see the value in knowing how to use this. I have made a spring animation on the contact form, which flips the email card to notify the user that the email was sent. 

TASK FOR TOMORROW: research useRef and find a way to validate emailJS form for empty fields and the @ symbol.

10/20/22 - Task set yesterday successfully accomplished. Form validated for empty fields and proper email format was already enforced by the type="email" atribute of the <input/>. I also animated the navbar menu appearance and fixed a few things here and there. It is a light day. Plans for tomorrow - re-organize the navbar into an actual navbar rather than a copy-pasted footer.

10/21/22 - Plans set yesterday complete! Today I started coding red morrow with the intention of cleaning up the existing navbar and adding an animated mobile navbar menu, yet when I opened up a tutorial to help guide me - the person showcased some cool ideas which I ended up borrowing. Whilst doing so - I realized that the navbar can use some cleanup work and I got to fixing previous poorly written code, as well as utilizing new css styles that I learnt. I also have a generalized idea of what I want it to look like and THAT is my plan for tomorrow.

10/22/22 - I developed a good looking mobile navbar menu that extend upon click and follows the users scroll, sticking to the top of the page. This will only happen in mobile mode, in desktop it is not fixed. I animated the extension onclick and re-organized the navbar menu to fit a mobile layout. All in all - light day. 

10/23/22 - Deployed the app in Heroku to allow the designer free roam over the site and for him to start assimilating the ideas I have in mind to add to them. I also noticed that the navbar menu does not close when the top navbar buttons and logo are clicked - fixed that.

10/26/22 - Worked on fixing the NavBar bug where buttons are still clickable despite being hidden (opacity does not remove the objects). Found three different solutions and tried each one until figuring out the best for this project. Once fixed, I implemented a feature that closes the menu when user clicks anywhere else on screen (implying that they no longer need the menu). Initially committed with faulty logic that clashed with pre-existing menu button onClick logic, which I later fixed and also implemented for the mobile version of the navbar too.

10/28/22 - Fixed that stinky bug where the react app rendered within a screen of the html body. Set margin and padding of body to 0 and fixed. Changed css accordingly.

10/31/22 - Selectively handpicked the best photos that we have and uploaded it to the website and later git. Deleted basic files that were unused since the initial create-react-app. I also started making the skeleton for the photo-gallery page. I have not settled on a design yet - but I know that I want to do the following:
- allow users to browse organized photo collections, organized by event.
- allow users to browse chaotically and with no order.

The issue with this is displaying it on the page in such a manner that won't take away from simplicity and will NOT feel overcrowded. I know that it is best if I spend some time looking at how others accomplish this task and then have another crack at it tomorrow.

11/08/22 - I know I promised to "have a crack" over a week ago, yet so many things came up that I couldn't attend to the website at all. Anyhow, I did the bare minimum today, pretty much just glancing at what already is and thinking how to go forward. I also managed to embed a youtube video which is the whole functionality of the video-gallery, documentary, music video and etc pages. Big day tomorrow :)
