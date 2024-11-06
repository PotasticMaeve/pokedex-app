# Pokedex App

## Overview

The **Pokedex App** is a React Native mobile application that allows users to browse and search a list of Pokemon using data from [PokeAPI](https://pokeapi.co/). The app provides several key features such as displaying a list of Pokémon with their sprites and names, enabling users to search the list locally, view detailed Pokemon information, and toggle Pokemon items as favorites. Additionally, the app includes local storage functionality for saving favorited Pokemon using **react-native-async-storage**.

### Key Features:

1. **Browse Pokemon List**  
   - Displays a list of Pokemon with their front sprite and name.
   - Infinite scrolling with pagination for efficient browsing (using **React Query** and **Axios** for API fetching).
   
2. **Search Pokemon**  
   - Users can search for Pokemon by their name locally within the list (local search functionality).

3. **Pokemon Detail Screen**  
   - Users can tap a Pokemon in the list to view detailed information:
     - Pokemon name
     - A gallery of Pokemon sprites
     - A list of abilities
   
4. **Favorites**  
   - Users can toggle a Pokemon as a favorite by pressing a heart icon.
   - Favorited Pokemon are saved in local storage on the device using **react-native-async-storage**.
   
5. **View Lists of Favorite Pokemon**  
   - Users can view a list of their favorite Pokemon and tap an item to view its details.

## Installation

To run the app locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/PotasticMaeve/pokedex-app.git
cd pokedex-app
```

### 2. Use the specific Node.js version for the project
Install nvm (if you don't already have it installed): Follow the installation instructions for nvm from the official GitHub repository: [nvm-sh/nvm](https://github.com/nvm-sh/nvm) then run this command :
```bash
nvm install v21.5.0
nvm use v21.5.0
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the app
```bash
npm run android
```

