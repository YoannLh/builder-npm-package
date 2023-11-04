# A simple modal for react

## How to have it

Download this package in your react project:

- yarn add final-project-react-modal

or

- npm install final-project-react-modal

## How to use it

This component only needs 2 props (not optionnals) for working:

- A boolean to display the overlay containing the modal or not (note it's display: 'flex' or 'none', not opacity or others)

visibleBool: boolean

example: visibleBool={true}

- The text of the modal (note it's just a simple p)

injectedText: string

example: injectedText="This is my text"

## How to style it

There are 4 classes CSS, that you can overcharge for yours personals needs :

actually:

.overlay {
position: absolute;
display: flex;
width: 100%;
height: 100%;
background: rgba(80, 80, 80, 0.3);
z-index: 666;
}

.modal {
position: relative;
display: flex;
width: 33%;
max-width: 600px;
height: 200px;
margin: auto;
background: white;
border-radius: 5px;
}

.cross {
position: absolute;
top: 10px;
right: 15px;
height: 30px;
}

.text {
font-size: 1.3em;
margin: auto;
color: black;
}
