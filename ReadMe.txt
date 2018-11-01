Some caveats with regards to this task:

1) As I have no React I had to completely write this assignment in AngularJS, which is what I do know... For me to learn React, and ramp it up to a level that would have been acceptable for me to confidently write this assignment out would have taken weeks. As I did know AngularJS, but hadn't used it for some time, I did have to research one minor thing regarding scope-based functions, for which I couldn't quite remember the syntax.

2) I gave myself 2.5 hours to do this work, and I was strapped for time over this past week due to my wife being in hospital, so looking after her... Couple that with looking after a three year-old makes for a bit of a challenge when it came to finding sufficient time. 2.5 hours was all I had available to me...

3) Unfortunately, I did not have the kind of power on this particular laptop (Running Windows XP, so no NPM, no Node.js, No grunt, etc...) so I've had to write all these files to my GitHub repository. I hope your technical staff reviewing this code take this into consideration...

4) I also would not have been able to have sent through a zip file with this information through GMail as they have set up a policy that prohibits the sending of ZIP files... So the GitHub repo was the best (and probably my only viable option)...

5) I was focusing on the functionality of the task, my main focus when working on an assignment like this is functionality first, format final... In this case, there was no request to make this look pretty. The functionality required that the markers would change color when clicked, that the information display would disappear if the map was clicked, and that the respective information board would apear if a marker was clicked. 

6) There was a minor adjustment to the JSON file, basically setting it up as JavaScript variable; as I wasn't able to set up an AJAX call to the JSON; so I had it fed through by calling the JSON as a separate file.

7) The one thing that did stump me momentarily is the bubble-up effect from clicking on the markers, which in turn passed through to the map, resulting in the map trigger function, hideInfo(). I realized I had to stop the click-event from propagating through using the $event.stopPropagation() function after the marker trigger had activated.