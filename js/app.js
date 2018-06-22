// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.
details.addEventListener('click', notAvailable);

function notAvailable() {
    alert('Not Available In Hawaii');
};

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.
name1.addEventListener('mouseover', mouseOverHideShow);

function mouseOverHideShow() {
    var description = document.getElementById('descrip1');
    if(description.style.display === 'block') {
        description.style.display = 'none';
    } else {
        description.style.display = 'block';
    }
};

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'

var descripElem = document.createElement('div');
descripElem.id = 'descript2';
descripElem.innerHTML = "The instantly recongnizable Jumpman silhouette made its debut with the Air JOrdan 3 during Michael Jordan's 1987-88 NBA season.";
descripElem.style.display = 'none';
name2.appendChild(descripElem);

name2.addEventListener('click', clickHideShow);

function clickHideShow() {
    var description2 = document.getElementById('descript2');
    if (description2.style.display === 'block') {
        description2.style.display = 'none';
    } else {
        description2.style.display = 'block';
    }
}



//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 


//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.


//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.


//6. Add an event to the minus icon that will decrement the price of the Air Jordan V shoe each time the icon is clicked on.


//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 


//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.