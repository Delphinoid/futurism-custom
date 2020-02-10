# Changelog
## 19/01/2020
* Added more rules to custom games: turn duration and hand size.
* Changed turn duration for long games from 60 seconds to 90 seconds.
* Temporary rebalancing of Bag 'Em and Heroic Sacrifice to prevent lock states.
  * Cards that have been bagged cost no action points to place.
    * Currently, bagged cards must be played first. This will be fixed once hands are able to be shown at any point during a match.
  * Only cards that can attack a hero must attack them.
* Guests have temporarily been given chat privileges.

## 10/02/2020
* Guests no longer have chat privileges due to the advent of a login server.
* Heal no longer increases a card's health if it is poisoned.
* Added the passive abilities Stealth and Dying Breath.


# Notes
The following files are all that are necessary for the custom game rules:
```
futurism-client/scripts/controllers/CustomGameModal.js
futurism-client/views/custom-game-modal.html
futurism-client/views/lobby.html
```
If you would prefer a vanilla experience, we recommend at least using these files.