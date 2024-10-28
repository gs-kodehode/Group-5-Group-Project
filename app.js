const topSellers = [
  {
    title: "Grand Theft Auto V",
    developer: "Rockstar Games",
    releaseYear: 2013,
    categories: ["Action", "Adventure", "RPG"],
    description:
      "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, set within the fictional state of San Andreas. The single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals.",
    platforms: ["PC", "Playstation", "X-Box"],
    logo: "gtav-logo.jpg",
  },
  {
    title: "Minecraft",
    developer: "Mojang",
    releaseYear: 2011,
    categories: ["Sandbox", "Survival"],
    description:
      "Minecraft is a sandbox video game developed and published by Mojang. In Minecraft, players can build and explore virtual worlds made up of blocks. The game has various modes, including survival mode where players must acquire resources and maintain health, and creative mode where players have unlimited resources and can create elaborate structures.",

    platforms: ["PC", "Playstation", "X-Box", "Nintendo"],
    logo: "minecraft-logo.jpg",
  },
  {
    title: "Tetris",
    developer: "Various",
    releaseYear: 1984,
    categories: ["Puzzle"],
    description:
      "Tetris is a tile-matching puzzle video game originally designed and programmed by Alexey Pajitnov. In Tetris, geometric shapes called Tetriminos fall from the top of the screen, and the player must rotate and arrange them to create horizontal lines without any gaps. When a line is completed, it disappears, and the player earns points.",

    platforms: ["Various"],
    logo: "tetris-logo.jpg",
  },
  {
    title: "Wii Sports",
    developer: "Nintendo",
    releaseYear: 2006,
    categories: ["Sports"],
    description:
      "Wii Sports is a sports video game developed and published by Nintendo. It was designed as a launch title for the Nintendo Wii console and features a collection of five sports simulations, including tennis, baseball, bowling, golf, and boxing. The game utilizes the Wii Remote controller's motion-sensing capabilities for immersive gameplay.",

    platforms: ["Nintendo Wii"],
    logo: "wii-sports-logo.png",
  },
  {
    title: "PlayerUnknown's Battlegrounds (PUBG)",
    developer: "PUBG Corporation",
    releaseYear: 2017,
    categories: ["Battle Royale"],
    description:
      "PlayerUnknown's Battlegrounds (PUBG) is an online multiplayer battle royale game developed and published by PUBG Corporation. In PUBG, up to 100 players parachute onto an island, scavenge for weapons and equipment, and fight to be the last person or team standing. The game's map size gradually decreases over time, forcing players into closer proximity and increasing the intensity of the battles.",

    platforms: ["PC", "Playstation", "X-Box", "Mobile"],
    logo: "pubg-logo.jpg",
  },
  {
    title: "Super Mario Bros.",
    developer: "Nintendo",
    releaseYear: 1985,
    categories: ["Platformer"],
    description:
      "Super Mario Bros. is a platform game developed and published by Nintendo. It follows Mario and Luigi as they embark on a quest to rescue Princess Toadstool from the villainous King Bowser. The game is renowned for its side-scrolling gameplay, power-ups like the Super Mushroom and Fire Flower, and the iconic characters that have become staples of the Nintendo franchise.",

    platforms: ["Nintendo Entertainment System (NES)"],
    logo: "super-mario-logo.png",
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    developer: "Nintendo",
    releaseYear: 2017,
    categories: ["Action", "Adventure"],
    description:
      "The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo. Set in a vast open world, players control Link as he explores the kingdom of Hyrule, battles enemies, solves puzzles, and embarks on a quest to defeat the ancient evil Calamity Ganon. The game is praised for its immersive gameplay and attention to detail.",

    platforms: ["Nintendo Switch", "Wii U"],
    logo: "zelda-botw-logo.jpg",
  },
  {
    title: "Garry's Mod",
    developer: "Facepunch Studios",
    releaseYear: 2004,
    categories: ["Sandbox"],
    description:
      "Garry's Mod is a sandbox game developed by Facepunch Studios. It allows players to manipulate objects and experiment with physics in a virtual environment. Garry's Mod has a diverse and active community that creates a wide range of user-generated content, including game modes, maps, and modifications using the Source engine.",

    platforms: ["PC"],
    logo: "garrys-mod-logo.jpg",
  },
  {
    title: "Red Dead Redemption 2",
    developer: "Rockstar Games",
    releaseYear: 2018,
    categories: ["Action", "Adventure"],
    description:
      "Red Dead Redemption 2 is an action-adventure game developed by Rockstar Games. Set in the late 1800s, the game follows Arthur Morgan, a member of the Van der Linde gang, as he navigates the changing American frontier. The game features an expansive open world, immersive storytelling, and a mix of action, exploration, and interaction with a rich cast of characters.",

    platforms: ["Playstation", "X-Box", "PC"],
    logo: "red-dead-logo.jpg",
  },
  {
    title: "Mario Kart 8 Deluxe",
    developer: "Nintendo",
    releaseYear: 2017,
    categories: ["Racing"],
    description:
      "Mario Kart 8 Deluxe is a kart racing game developed by Nintendo. It is the enhanced version of Mario Kart 8 for the Nintendo Switch console. Players race against each other on various tracks, using power-ups and items to gain an advantage. The game features a diverse roster of characters from the Mario series and introduces new elements such as anti-gravity racing.",

    platforms: ["Nintendo Switch"],
    logo: "mario-kart-logo.jpg",
  },
];

const gameContainer = document.querySelector("#video-games");

for (let games of topSellers) {
  //Lage en div for Card
  const container = document.createElement("div");
  container.classList.add("container-card");
  container.style.backgroundColor = "rgb(50, 211, 50)";

  //Lage logo
  const image = document.createElement("img");
  image.classList.add("images");
  image.src = `./logos/${games.logo}`;
  image.style.width = "100px";
  image.style.height = "100px";
  image.style.borderRadius = "10px";
  image.style.boxShadow = "0 5px 10px rgb(19, 19, 63)";

  // Lage title
  const titleG = document.createElement("h2");
  titleG.textContent = games.title;
  titleG.classList.add("title-game");

  // Lage beskrivelse
  const descrip = document.createElement("p");
  descrip.textContent = games.description;
  descrip.classList.add("descrip");

  // lage Platforms
  const platform = document.createElement("p");
  platform.textContent = games.platforms;
  platform.classList.add("platform");

  // Lage en div for info av game card
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");

  // Lage Utvikler
  const develop = document.createElement("p");
  develop.textContent = `Developer: ${games.developer}`;
  develop.classList.add("information");

  //Lage år
  const year = document.createElement("p");
  year.textContent = `Year: ${games.releaseYear}`;
  year.classList.add("information");

  //Lage kategori
  const catagory = document.createElement("p");
  catagory.textContent = `Catagories: ${games.categories}`;

  catagory.classList.add("information");

  //Append til div
  infoContainer.append(develop, year, catagory);
  container.append(image, titleG, descrip, platform, infoContainer);

  // Append til section
  gameContainer.append(container);
}

//  Liste av video game
const containerList = document.querySelector("#video-List");
// ved brukt av ordered list
const containrist = document.createElement("ol");
// append til list
document.body.append(containrist);

// lagt loop for list
for (let i = 0; i < topSellers.length; i++) {
  // Lage list
  const listCons = document.createElement("li");
  listCons.textContent = `${topSellers[i].title}`;
  containrist.prepend(listCons);
}
// legge class for list
containrist.classList.add("Games-video");
containrist.style.margin = "1rem 3rem";
// append til list
containerList.append(containrist);
