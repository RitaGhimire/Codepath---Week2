# Web Development Project 2 - *Psychology Flashcard App*

Submitted by: **Rita Ghimire**

This web app: **A flashcard-based learning tool designed to help users memorize psychological questions and answers. Users can flip cards to reveal answers and navigate through a set of cards, some of which use images for enhanced learning.**

Time spent: **12** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)

- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time

- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front

- [x] **Clicking on the next button displays a random new card**

## Optional Features

- [x] Cards contain images in addition to or in place of text
  - [x] Some cards use relevant images as the answer side to reinforce visual memory

- [ ] Cards have different visual styles such as color based on their category
  - [ ] (Not implemented)

## Additional Features

* [x] Cards flip vertically (bottom-to-top) for a more dynamic user experience
* [x] Responsive design for different screen sizes
* [x] Smooth animations for card transitions

## Video Walkthrough

Here's a walkthrough of implemented required features:
Source: https://imgur.com/a/6JeBUfR 
<img src='https://imgur.com/a/6JeBUfR ' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap for macOS

## Notes

Some challenges I faced:
- Positioning the flip card animation to stay in the same place on both sides
- Aligning the image-based answer cards to fit and scale properly across different screen sizes
- Ensuring state management worked smoothly when navigating between cards

## License

    Copyright 2025 Rita Ghimire

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

