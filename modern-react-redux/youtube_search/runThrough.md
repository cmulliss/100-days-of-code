# Youtube Search

* In App, we define a function that has one purpose, it just updates app state.

```javascript
 onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
```

* it takes a video and updates the selected video
* We pass this as a property into VideoList and VideoList takes that property and passes it into videoListItem
* videoListItem takes that property and says whenever I get clicked call that function with the video I was passed
* and since each videoListItem has a different video, it ends up with the correct video
* Doing callbacks like this, passing callbacks down from some parent component to some more child is rare, to go more than 2 levels deep.
* We went from App, to videoList to VideoListItem
* Great way to do small communication between a parent component and a child component passing it all the way from index, to videoListItem.

## Search for new videos

* Going to pass a callback down into the SearchBar, it's going to take a string, a search term and make a new YTSearch.
* When the search is complete it will set the state of the new list of videos
* The first thing we did we to refactor the youtube search into it's own method and the method just takes a single string, a search term
* We took this method, videoSearch, and we passed it down into searchBar under the property onSearchTermChange
* So all the searchBar has to do is call props.onSearchTermChange, with the new search term, and that will call our searching function which will go ahead and fetch a new list of videos.
* Then inside of searchBar we refactor the onChange event, so whenever the content of the input changed now calls onInputChange with the newinput value, and onInputChange in turn has 2 functions or purposes, first it sets the state on this component, secondly, it fires off the callback function onSearchTermChange.

## Throttling search term input

* Using lodash to debounce
* install npm install --save lodash
* import \_ from 'lodash';
*
