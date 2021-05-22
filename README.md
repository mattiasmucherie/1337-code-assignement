# 1337 Code Assignment

## Running the application locally
Start with  installing the dependencies with 
```
yarn
```
Then you need to add an env variable called `REACT_APP_SECRET_KEY` located in a `.env` file.
It should look something like this:
```
REACT_APP_SECRET_KEY="secret api key that you can totally not see when running inspector in the browser ;)"
```

Then you can run 
```
yarn start
```
To run test run: `yarn test` and to build the project you can run `yarn build` which will build in a `/build` folder.
## Chosen points
I have chosen to focus on these points:

| Design/access | Functionality | Testing/QA  |
| ------------- |-------------| -----|
| Responsive design, works on mobile and tablets **(2pt)**      | Sort by name and office **(1pt)** | Works in Chrome, Firefox, Edge **(1pt)** |
| No UI framework used (such as Bootstrap, Ant) **(1pt)**      | Filter by name and office **(1pt)**      |   Unit tests for existing functionality (reasonable coverage) **(2pt)** |
|  | Enable switch between a grid and a different view (such as list) **(1pt)**      |    |
| | Available on a free public url (suck as Azure, Heroku) **(1pt)** | |

This sums up to: **10 points**

## Points explanation
Below I will do a small explanation of the points that were chosen.

### Responsive design, works on mobile and tablets
Using grid layout and flex layout, the site is fully responsive.

I chose this because this is must in my opinion, and I usually use a mobile first approach when creating applications.

### No UI framework used (such as Bootstrap, Ant)
No framework was used. However, I used `styled-components` a CSS-in-JS library which I really enjoy using.

Since no framework or other design libraries was used, I decided not to put any time into designing the `radio` buttons since that can be a bit of a time sink.

I chose not to use any external framework because I prefer writing my own css most of the time. 

### Filter by name and office
By entering your search query in the input box, it filters by name and office at the same time. 
I also added a debounce function to reduce the computational calculation.

A drawback is that the list can be quite long, and it then can take a moment to render out all the items. 
This could be mitigated by adding either pagination or infinite scrolling.

The implementation is using an `Array.prototype.includes()` in order to check if a part of the text is included in the name or office. 
Both input and name/office is converted to `lowerCase` in order to ignore capitalization.

I chose this feature because it would improve the existing page and fun to see how many people are named Andersson.
### Sort by name and office
By clicking the radio buttons Name or Office, the list of employees is sorted by either name or office.
This also works while you are filtering.

A caveat here is the `Array.prototype.sort()` method. It is both sorting in place and also returning the sorted array.
Therefore, you have to pass a copy of `filteredEmployees` in order not to change the state directly and then pass the returned value to the `setFilteredEmployees` that is allowed to change the state.

`useMemo` was used here also to ensure when we are sorting when we have a change to `filteredEmployees` or `sortMethod` and it's not ran when we have a change to `displayMethod`.

I chose this feature because it would also improve the existing page. 
### Enable switch between a grid and a different view (such as list)
By clicking the radio buttons Grid or List, the list of employees is displayed in a list or a grid.

This changes `displayMethod` that is then passed to some `styled-components` in order change the style.

I chose this feature because I wanted to have a list of users which is easier to see then having a bunch of cards.

### Available on a free public url (suck as Azure, Heroku)
Hosted on Netlify [here](https://clever-visvesvaraya-1c1003.netlify.app).
It connects to the GitHub repo and deploys on changes to code base.

I chose this feature so that it's easier for people to see my solution and that you don't have to run it locally all the time.
### Works in Chrome, Firefox, Edge
It works on Chrome, Firefox and Edge thanks to the use of `browserslist`.
It connects with babel under the hood of `create-react-app` in order to polyfill to the correct browsers.

The `browserslist` parameter was set to `defaults` which includes the latest Chrome, Firefox and more. 
You can run ` npx browserslist "defaults"` in order to see which browsers are supported with the `defaults` parameter.

With that parameter it should also work for IE 11, however I do not own a Windows machine and therefore I decided not to include it in the supported browsers.

I chose this feature because I am myself is using Firefox and I know that most people use Chrome so ensuring that is work well for both is important.
### Unit tests for existing functionality (reasonable coverage)
Unit test written with `Jest` and `testing-library`.
The api call was also mocked with the help of `Mock Service Worker (msw)`
I wrote the test in one file in order to read them easier since this is a small application but if this was to be developed further, the tests should be more component based and divided in different files.

I chose this feature because it is key in my opinion to have a well covered code base.
## Conclusion
This was a fun task that I enjoyed making.
Looking forward to talk with you more about my solution.