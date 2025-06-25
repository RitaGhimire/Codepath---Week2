# Web Development Project 3 - *Psychology Flashcard App*

Submitted by: **Rita Ghimire**

This web app: **is an interactive flashcard learning tool for psychology that helps users test their memory and reinforce knowledge through one-word questions. It provides instant visual feedback, tracks performance streaks, and allows shuffling of the card order.**

Time spent: **12** hours spent in total

---

## Required Features

The following **required** functionality is completed:

- ✅ **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  - Clicking on the submit button with a **correct** answer shows visual feedback that it is correct

- ✅ **The user can navigate through an ordered list of cards**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons have visual indications (e.g., graying out) when at the beginning or end of the list, and do not allow wrap-around navigation

---

## Optional Features

- ✅ **Users can use a shuffle button to randomize the order of the cards**
  - Cards remain in the same sequence unless the shuffle button is clicked 
  - Cards change to a random sequence once the shuffle button is clicked

- ✅ **A user’s answer may be counted as correct even when it is slightly different from the target answer**
  - Answers are considered correct if case-insensitive and whitespace-tolerant
  - Logic can be expanded to allow partial text matches

- ✅ **A counter displays the user’s current and longest streak of correct responses**
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak and updates if the current streak exceeds it

- ❌ **A user can mark a card that they have mastered and have it removed from the pool of displayed cards**
  - This feature was not implemented in this version

---

## Additional Features

- ✅ Flip card animation on click
- ✅ Reset input and color feedback when navigating cards
- ✅ `localStorage` used to persist longest streak across sessions
- ✅ Image rendering support if an answer is a visual cue
- ✅ Clean and intuitive user interface with feedback styles

---

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' alt='Video Walkthrough' />

GIF created with https://imgur.com/a/E1Y6B9M

## Notes

**Challenges Encountered:**

- Resetting the form and feedback color on card navigation
- Ensuring streak counters update logically without bugs
- Maintaining state separation between question navigation and user input
- Learning to use `useEffect` properly with `localStorage`

---

## License

    Copyright [2025] [Rita Ghimire]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

