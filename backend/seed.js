// import movieSchema from "./models/Movies.js";
// import connectDB from "./config/db.js";

// import dotenv from "dotenv";

// dotenv.config();
// const movies = [
//   {
//     title: "Ang Tanging Ina Mo (Last na 'To!)",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/8/2/1/9/8219-your-only-mother-this-is-the-last--0-1000-0-1500-crop.jpg?v=8430ec1350",

//     description:
//       "Mother of the year. A few months after Ina left the position as the President of the Philippines, she is back in the media limelight as she releases a book of her life in her journey as a mother to her children and as a mother to the people of the Philippines. Ina now lives a simple life with her beloved children, together with her long-time best friend, Rowena.",

//     genre: ["Dramedy"],

//     releaseDate: "2010-12-25",

//     rating: ["6.1"],

//     awards: [
//       "Best Picture",
//       "Best Director",
//       "Best Actress",
//       "Best Supporting Actress",
//       "Best Child Performer",
//       "Best Original Story",
//       "Best Screenplay",
//       "Best Musical Score",
//       "Most Gender-Sensitive Film",
//     ],

//     link: "https://www.youtube.com/watch?v=8szDVEEzsjc",
//   },

//   {
//     title: "Enteng ng Ina Mo",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/7/2/4/7/6/72476-enteng-ng-ina-mo-0-1000-0-1500-crop.jpg?v=8a86a4b3a1",

//     description:
//       "Enteng wants to retire as the hero of Engkantasya and have a normal life with his family without the magical elements. Ina longs to have the right partner to be with her for the rest of her life. One day, Enteng is placed under a powerful evil spell by the evil witch Satana to fall in love with another woman. And when he meets Ina, he exerts all the effort Ina to fall for him. Ina, on the other hand, slowly opens her heart for this new opportunity of love. Enteng then tries his best to be a father to Ina’s children even if they are not fully supportive of him. But when their relationship gets serious, Ina discovers the truth – Enteng already has a family.",

//     genre: ["Action Fantasy/Adventure Comedy-Drama"],

//     releaseDate: "2011-12-25",

//     rating: ["3.5"],

//     awards: ["Best Make-up"],

//     link: "https://www.youtube.com/watch?v=8oJVxXmL9cU",
//   },

//   {
//     title: "My House Husband: Ikaw Na!",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/8/0/4/2/2/80422-my-house-husband-ikaw-na--0-1000-0-1500-crop.jpg?v=f432147a22",

//     description:
//       "Nothing prepared ROD (Ryan Agoncillo) and MIA ALVAREZ (Judy Ann Santos) for the major changes that took place in their lives. ROD worked as a manager of a bank while MIA opted to remain a housewife taking care of their two children — MIGO and KAYE — with an occasional sideline of selling insurance. MIA gave up her promising career in sales because ROD wanted to be the padre de familia. For ROD, it was the role of the man to provide for his wife and children … in the same manner that there was a clear-cut delineation as to what are the duties of a husband from that of the wife.",

//     genre: ["Comedy-Drama"],

//     releaseDate: "2011-12-25",

//     rating: ["7.4"],

//     awards: ["Best Supporting Actress", "Most Gender-Sensitive Film"],

//     link: "https://www.youtube.com/watch?v=gJHvpnFbWYk",
//   },

//   {
//     title: "Ang Panday 2",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/7/6/3/6/7/76367-the-blacksmith-2-0-1000-0-1500-crop.jpg?v=d111520de2",

//     description:
//       "Ang Panday 2 begins with Flavio/Panday (Revilla) and Maria settling in the peaceful and quiet town of Matandang Kahoy. All is well until Lizardo returns and captures Maria. On his quest to save his lady love, Flavio crosses paths with Ariana whose father had been killed by Lizardo. As the two join forces, Ariana finds herself falling for Flavio. All this happens in a magical world filled with dragons, fairies and other mythical beings. According to Director Carlo J. Caparas who penned the story, the King of Philippine Movies himself, the late Fernando Poe Jr., would be impressed with the production of Ang Panday 2. FPJ had starred in the original Panday films, and had long been associated with the beloved Pinoy komiks character.",

//     genre: ["Action Fantasy/Adventure"],

//     releaseDate: "2011-12-25",

//     rating: ["5.4"],

//     awards: ["Best Visual Effects", "Best Float"],

//     link: "https://www.youtube.com/watch?v=yTjhqoo5KY0",
//   },

//   {
//     title: "Manila Kingpin: The Asiong Salonga Story",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/7/6/3/6/3/76363-manila-kingpin-0-1000-0-1500-crop.jpg?v=41e3ffaa22",

//     description:
//       "The Untold Story of Asiong Salonga Mobster Asiong Salonga (ER Ejercito) rules the mean streets of Manila with an iron fist—until he is betrayed by a trusted friend. Manila Kingpin is based on the story of the notorious Tondo, Manila, gang leader Nicasio “Asiong” Salonga, whose true-to-life accounts had been portrayed in several movie versions since 1961 (starring Joseph Estrada). It is also the first Filipino major film produced in black-and-white in the 21st century as well as the returning action genre movie. Before the film was shown, Tikoy Aguiluz requested the producers, through his lawyers, that his directorial credits in the film and promotional tools be removed because the final version of the film can no longer be described as his after the producers made a reedit, re-shoot and music mixing without his involvement. He also demanded that he be allowed to make a director’s cut of the film.",

//     genre: ["Action, Drama"],

//     releaseDate: "2011-12-25",

//     rating: ["6.5"],

//     awards: [
//       "Best Picture",
//       "Best Director",
//       "Best Supporting Actor",
//       "Best Screenplay",
//       "Best Production Design",
//       "Best Editing",
//       "Best Musical Score",
//       "Best Sound Recording",
//       "Best Original Theme Song",
//       "Best Cinematography",
//       "Gatpuno Antonio J. Villegas Cultural Award",
//     ],

//     link: "https://www.youtube.com/watch?v=sm7ide3GfDM",
//   },

//   {
//     title: "Segunda Mano",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/8/0/1/0/0/80100-segunda-mano-0-1000-0-1500-crop.jpg?v=81efcd88b5",

//     description:
//       "Mabel Domingo (Kris Aquino), the owner of a high-class, but creepy, antique shop, only wants herself and her mother to move on from the tragic past of losing her sister as she carries the guilt of causing her death. She meets Ivan Galvez (Dingdong Dantes), a rich and successful architect who only wants to find the perfect wife and mother for his young daughter Angel to finally have a complete and happy family after his ex-wife left for him for another man.",

//     genre: ["Horror/Suspense"],

//     releaseDate: "2011-12-25",

//     rating: ["4.6"],

//     awards: ["Best Actor"],

//     link: "https://www.youtube.com/watch?v=qjyMV_LMxTU",
//   },

//   {
//     title: "Shake, Rattle & Roll 13",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/8/2/0/0/6/82006-shake-rattle-roll-13-0-1000-0-1500-crop.jpg?v=0a90c2ad99",

//     description:
//       "An old man Lando (Ronnie Lazaro) has buried something under his house. When he is finished, he encounters a group of white people. The chieftain (Manu Respall) demands Lando to give back something that belongs to them which he refuses. Angered, he and his tribesmen savagely killed him.",

//     genre: ["Horror"],

//     releaseDate: "2011-12-25",

//     rating: ["6.2"],

//     awards: ["Best Child Performer", "Best Original Story"],

//     link: "https://www.youtube.com/watch?v=w4j4Qx8mAGI",
//   },

//   {
//     title: "Yesterday, Today, Tomorrow",

//     poster:
//       "https://upload.wikimedia.org/wikipedia/en/4/44/Yesterday%2C_Today%2C_Tomorrow_%28film%29.jpg",

//     description:
//       "a 2011 Filipino drama film directed by Jun Lana. The film stars Maricel Soriano, Gabby Concepcion, Jericho Rosales, Dennis Trillo, Paulo Avelino, Lovi Poe, Carla Abellana, Solenn Heussaff, Ronaldo Valdez, Agot Isidro and Eula Caballero. It is an official entry for the 2011 Metro Manila Film Festival. It was released on 25 December 2011.",

//     genre: ["Drama"],

//     releaseDate: "2011-12-25",
//     rating: ["5.4"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=Ei5e1oUz_q4",
//   },

//   {
//     title: "Si Agimat, si Enteng Kabisote at si Ako",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/2/8/3/3/2/6/283326-si-agimat-si-enteng-kabisote-at-si-ako-0-1000-0-1500-crop.jpg?v=64fcbcc338",

//     description:
//       "The story begins with the establishment of the three different worlds apart, bound to meet for an adventure like no other. The humble family-oriented story of Enteng Kabisote, a low-profile technician married to the beautiful fairy princesss of Encantasia, Faye; The battles of the Agimat, the brave village Warrior Hero of Amuleto; and the high tech-yuppie Kingdom of Diwatara ruled by Princess Angelina Kalinisan-Orteza, also known in the world as “AKO” where she leads an environmental advocacy\u00A0organization.",

//     genre: ["Fantasy, comedy, action"],

//     releaseDate: "2012-12-25",

//     rating: 6.2,

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=L9zLiATErGo",
//   },

//   {
//     title:
//       "El Presidente: General Emilio Aguinaldo Story and the First Philippine Republic",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/3/1/3/9/0/131390-el-presidente-0-1000-0-1500-crop.jpg?v=bbfc237e9c",

//     description:
//       "The film begins with his capture by Philippine and US forces under Frederick Funston’s command in 1901, then flashes back to 1886, when an old woman gives Aguinaldo and his childhood friend Candido Tirona cryptic prophecies. Ten years later, Aguinaldo is inducted into the Katipunan and later assumes leadership of its Cavite chapter while becoming mayor of Cavite El Viejo. When the trouble breaks out in Manila in late August 1896, Aguinaldo tries to assure the Spanish provincial government of non-interference and covertly marshals his forces despite a lack of weapons. Learning that the Spanish mostly put their forces in Manila, Aguinaldo finally mobilizes his troops and take the command of the Katipunan forces in\u00A0Cavite",

//     genre: ["Action, historical drama, thriller"],

//     releaseDate: "2012-12-25",

//     rating: 6,

//     awards: [
//       "Best Supporting Actor",
//       "Best Musical Score",
//       "Best Sound Recording",
//       "Best Original Theme Song",
//       "Best Make-up",
//       "Best Float",
//     ],

//     link: "https://www.youtube.com/watch?v=CO4olsAlBcc",
//   },

//   {
//     title: "One More Try",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/1/7/3/6/3/117363-one-more-try-0-1000-0-1500-crop.jpg?v=6c60a19101",

//     description:
//       "A woman and her ex consider pregnancy to create a donor for their sick\u00A0child.",

//     genre: ["Drama"],

//     releaseDate: "2012-12-25",

//     rating: 6.1,

//     awards: [
//       "Best Picture",
//       "Best Actor",
//       "Best Child Performer",
//       "Best Screenplay",
//       "Best Editing",
//       "Fernando Poe Jr. Memorial Award for Excellence",
//     ],

//     link: "https://www.youtube.com/watch?v=vnkIE6pkKXY",
//   },

//   {
//     title: "Shake, Rattle and Roll Fourteen: The Invasion",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/2/8/0/4/4/128044-shake-rattle-and-roll-fourteen-the-invasion-0-1000-0-1500-crop.jpg?v=f2ddeb3d30",

//     description:
//       "Shake, Rattle and Roll 14 : The Invasion is a 2012 science fiction horror film directed by Chito S. Roño. The film stars an ensemble casts including Janice de Belen, Herbert Bautista, Dennis Trillo, Lovi Poe, Paulo Avelino, Martin Escudero and Vhong Navarro. The film was produced by Regal Entertainment, Inc. The film is an official entry in the Metro Manila Film Festival and the film’s scheduled release is on December 25, 2012 in Philippine Cinemas nationwide. This fourteenth installment also serves as the Most Independent throughout the entire series for its sole director, Chito S. Roño.",

//     genre: ["Horror, science fiction"],

//     releaseDate: "2012-12-25",

//     rating: 5.1,

//     awards: ["Best Visual Effects"],

//     link: "https://www.youtube.com/watch?v=906FkWac33Q",
//   },

//   {
//     title: "Sisterakas",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/2/1/6/1/2/121612-sisterakas-0-1000-0-1500-crop.jpg?v=f0c149a4ee",

//     description:
//       "A man takes revenge on his sister by hiring her as his personal\u00A0assistant.",

//     genre: ["Comedy"],

//     releaseDate: "2012-12-25",

//     rating: 5.2,

//     awards: ["Best Supporting Actress"],

//     link: "https://www.youtube.com/watch?v=ajsCQyTJZE4",
//   },

//   {
//     title: "Sosy Problems",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/1/6/7/9/2/116792-sosy-problems-0-1000-0-1500-crop.jpg?v=95b1f5032e",

//     description:
//       "It girls just wanna have\u00A0fun!\nThe problems of 4 rich, beautiful women from\u00A0Manila.",

//     genre: ["Comedy"],

//     releaseDate: "2012-12-25",

//     rating: 5.4,

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=tJ205HEaTdU",
//   },

//   {
//     title: "The Strangers",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/1/6/7/9/1/116791-the-strangers-0-1000-0-1500-crop.jpg?v=554478c2cf",

//     description:
//       "A family becomes trapped in a village full of mysterious people and transforms into black\u00A0dogs.",

//     genre: ["Horror"],

//     releaseDate: "2012-12-25",

//     rating: 6,

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=UejUdcc6oSo",
//   },

//   {
//     title: "Thy Womb",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/9/6/1/1/0/96110-thy-womb-0-1000-0-1500-crop.jpg?v=93d32b4a25",

//     description:
//       "A Bajau midwife copes with the irony of her own infertility amid the deprivations of her gypsy community in Tawi-Tawi. A saga of island life stuck between the devil of passion and the deep blue sea of\u00A0tradition.",

//     genre: ["Drama"],

//     releaseDate: "2012-12-25",

//     rating: 6.9,

//     awards: [
//       "Best Director",
//       "Best Actress",
//       "Best Original Story",
//       "Best Production Design",
//       "Best Cinematography",
//       "Most Gender-Sensitive Film",
//       "Gatpuno Antonio J. Villegas Cultural Award",
//     ],

//     link: "https://www.youtube.com/watch?v=ZquCWWIjzO0",
//   },

//   {
//     title: "10,000 Hours",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/7/3/3/4/8/173348-10000-hours-0-1000-0-1500-crop.jpg?v=87c47d1311",

//     description:
//       "How far will you go for\u00A0justice?\nSenator Gabriel Alcaraz is preparing to deliver a privilege speech alleging corruption in the highest levels of government. On his way to the Senate, he gets wind of a plot against him. The police seek to arrest him for his part in an operation decades ago. Suspecting that the administration isn’t willing to give him a fair trial, Alcaraz goes into hiding abroad, hoping to find a way to clear his name and eventually return to his family. Back home, an old colleague is put in charge of finding him, and his family suffers under the pressure of public\u00A0scrutiny.",

//     genre: ["Action, drama, thriller"],

//     releaseDate: "2013-12-25",

//     rating: 6,

//     awards: [
//       "Best Picture",
//       "Best Director",
//       "Best Actor",
//       "Best Supporting Actor",
//       "Gatpuno Antonio J. Villegas Cultural Award",
//       "Fernando Poe Jr. Memorial Award for Excellence",
//       "Best Cinematography",
//       "Best Editor",
//       "Best Production Design",
//       "Best Visual Design",
//       "Best Musical Score",
//       "Best Sound Engineer",
//     ],

//     link: "https://www.youtube.com/watch?v=Kq37kyT28Dg",
//   },

//   {
//     title: "Boy Golden",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/7/2/0/8/9/172089-boy-golden-shoot-to-kill-0-1000-0-1500-crop.jpg?v=32415c3b10",

//     description:
//       "Based on the Arturo Porcuna\u00A0Story\nThe film is very, very loosely based on the life of Arturo Porcuna (Jeorge Estregan). Once upon a time, he was known as Boy Anino, notorious leader of the Bahala Na gang. But rival gangster Tony Razon (John Estrada) attacked him in his home, leaving his entire gang and his family dead in the ruins. But Porcuna survived, and now he returns under a new alias, Boy Golden, and he seeks revenge against those that did him wrong. Along the way, he meets Marla D (KC Concepcion), a dancer who also has a bone to pick with Razon. Together, the two carry out a dangerous plan to take on Manila’s toughest\u00A0gangsters.",

//     genre: ["Action, drama"],

//     releaseDate: "2013-12-25",

//     rating: 6.4,

//     awards: ["Best Float"],

//     link: "https://www.youtube.com/watch?v=lq_M7346um0",
//   },

//   {
//     title: "Girl, Boy, Bakla, Tomboy",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/7/3/3/1/8/173318-girl-boy-bakla-tomboy-0-1000-0-1500-crop.jpg?v=c24fa3c78f",

//     description:
//       "Quadruplet siblings (two boys and two girls) played by Vice Ganda were separated after birth when their grandmother steals two of the siblings (a boy and a girl) away from their mother. The stolen siblings lived a comfortable life in the US, not knowing that their mother and siblings, a gay and a lesbian, struggled to make ends meet in the Philippines. When the boy develops hepatitis that requires him to have a liver transplant from a compatible donor, their father tells them about their siblings in the Philippines, who may be possible candidates as donors. But once the siblings finally meet, pent up resentment and animosity between the girl and the gay siblings, has threatened the chances of the boy sibling’s\u00A0survival.",

//     genre: ["Comedy"],

//     releaseDate: "2013-12-25",

//     rating: 5.4,

//     awards: ["Best Actress", "Gender Sensitivity Award"],

//     link: "https://www.youtube.com/watch?v=Z3_yxBQeat8",
//   },

//   {
//     title: "Kaleidoscope World",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/2/0/8/8/1/6/208816-kaleidoscope-world-0-1000-0-1500-crop.jpg?v=dffe3a927e",

//     description:
//       "One Dream. One Passion. One\u00A0Love.\nA hip hop dance film featuring Filipino world class dance champions and inspired by the music of Francis\u00A0Magalona.",

//     genre: ["Romance, dance film"],

//     releaseDate: "2013-12-25",

//     rating: 6.9,

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=nIM9ssUBTyM",
//   },

//   {
//     title: "Kimmy Dora: Ang Kiyemeng Prequel",

//     poster:
//       "https://upload.wikimedia.org/wikipedia/en/4/4c/Kimmy_Dora_Ang_Kiyemeng_Prequel.png",

//     description:
//       "a 2013 Filipino\u00A0action-comedy\u00A0film, directed by Chris Martinez, starring Eugene Domingo\u00A0and\u00A0Sam Milby. It is the prequel and third and final installment of the\u00A0Kimmy Dora\u00A0film series.",

//     genre: ["Comedy, action"],

//     releaseDate: "2013-12-25",

//     rating: 5.5,

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=t7FKmsGHiT0",
//   },

//   {
//     title: "My Little Bossings",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/7/2/8/8/5/172885-my-little-bossings-0-1000-0-1500-crop.jpg?v=53479c92c8",

//     description:
//       "Torky is a bookkeeper working for Baba a millionaire cash management specialist. Because of some conflict in her business that puts her life in danger, Baba entrusts the safety of her son Justin to Torky who takes him home to meet his daughter Ice and Ching the street urchin that the latter took under her wing. Given that Justin is not particularly fond of Torky, how all four of them would get along under one roof becomes the focus of the\u00A0story.",

//     genre: ["Comedy"],

//     releaseDate: "2013-12-25",

//     rating: 2.7,

//     awards: [
//       "Best Supporting Actress",
//       "Best Original Theme Song",
//       "Best Child Performer",
//     ],

//     link: "https://www.youtube.com/watch?app=desktop&v=HVpuXWvE1VY",
//   },

//   {
//     title: "Pagpag: Siyam na Buhay",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/8/0/3/8/9/180389-pagpag-nine-lives-0-1000-0-1500-crop.jpg?v=d3d083bc2b",

//     description:
//       "The movie follows a group of teenagers that are terrorized by an evil spirit. The film revolves around the traditional Filipino belief that one should never go home directly after visiting a wake since it risks bringing evil spirits or the deceased to one’s\u00A0home.",

//     genre: ["Horror, suspense, thriller"],

//     releaseDate: "2013-12-25",

//     rating: 5.3,

//     awards: ["Best Make-up Artist", "Youth Choice Award"],

//     link: "https://www.youtube.com/watch?v=AkAEzQ33hGQ",
//   },

//   {
//     title: "Pedro Calungsod: Batang Martir",

//     poster:
//       "https://m.media-amazon.com/images/M/MV5BMmVmYWY4MDQtMjc2MC00YWJjLWEyZGYtNjRkN2M0Mzk2ZTJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",

//     description:
//       "a 2013 Philippine biographical film depicting the life and martyrdom\u00A0of\u00A0Pedro Calungsod. Written and directed by Francis O. Villacorta and produced by HPI Synergy Group and Wings Entertainment, it was released on December 25, 2013, as an official entry to the\u00A039th Metro Manila Film Festival.",

//     genre: ["Biography, epic"],

//     releaseDate: "2013-12-25",

//     rating: 4.4,

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=1KCmcqhxTNw",
//   },

//   {
//     title: "The Amazing Praybeyt Benjamin",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/2/4/3/4/9/7/243497-the-amazing-praybeyt-benjamin-0-1000-0-1500-crop.jpg?v=da540c852c",

//     description:
//       "A soldier who once saved the entire country is assigned to guard a genius child whose intellect is needed to foil the plans of an evil\u00A0villain.",

//     genre: ["Comedy, action"],

//     releaseDate: "2014-12-25",

//     rating: 4.3,

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=lDUa2_yewHY",
//   },

//   {
//     title: "Bonifacio: Ang Unang Pangulo",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/2/4/4/1/9/4/244194-bonifacio-the-first-president-0-1000-0-1500-crop.jpg?v=d2d41f2819",

//     description:
//       "The revolution is not yet\u00A0finished\nThe true story of Andres Bonifacio, a man who rose as a leader in the fight against the Spanish oppressors, and would gain the enmity of even those fighting for the same\u00A0cause.",

//     genre: ["Historical drama, action"],

//     releaseDate: "2014-12-25",

//     rating: 6.5,

//     awards: [
//       "Best Picture",
//       "Best Cinematography",
//       "Best Original Theme Song",
//       "Best Musical Score",
//       "Best Sound Engineering",
//       "Gatpuno Antonio J. Villegas Cultural Award",
//       "Best Float",
//       "Fernando Poe Jr. Memorial Award for Excellence",
//       "Youth Choice Award",
//     ],

//     link: "https://www.youtube.com/watch?v=oY2szxw-Dr8",
//   },

//   {
//     title: "English Only, Please",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/2/4/2/6/4/1/242641-english-only-please-0-1000-0-1500-crop.jpg?v=7fe61348e5",

//     description:
//       "A Filipino-American man hires a translator to help translate a letter he wrote for the woman that broke his\u00A0heart.",

//     genre: ["Romantic comedy"],

//     releaseDate: "2014-12-25",

//     rating: 7.1,

//     awards: [
//       "Best Director",
//       "Best Actor",
//       "Best Actress",
//       "Best Screenplay",
//       "Best Original Story",
//       "Best Editing",
//     ],

//     link: "https://www.youtube.com/watch?v=saSCtoEBpeI",
//   },

//   {
//     title: "Feng Shui 2",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/2/4/2/8/5/3/242853-feng-shui-2-0-1000-0-1500-crop.jpg?v=17660cb65e",

//     description:
//       "It focuses on Lester who, upon getting the cursed bagua, starts to get all the luck and prosperity he could get in his life, but with deadly\u00A0consequences.",

//     genre: ["Horror"],

//     releaseDate: "2014-12-25",

//     rating: 5.3,

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=mi4oHxfGc40",
//   },

//   {
//     title: "Kubot: The Aswang Chronicles 2",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/2/7/3/3/5/0/273350-kubot-the-aswang-chronicles-2-0-1000-0-1500-crop.jpg?v=63ddee0a86",

//     description:
//       "A family of bloodthirsty monsters descends on the city to take revenge on the man that caused the death of so many of their\u00A0own.",

//     genre: ["Comedy, horror, action"],

//     releaseDate: "2014-12-25",

//     rating: 6.4,

//     awards: [
//       "Best Supporting Actor",
//       "Best Supporting Actress",
//       "Best Production Design",
//       "Best Visual Effects",
//       "Best Make-up Artist",
//     ],

//     link: "https://www.youtube.com/watch?v=vTNWUEno6-s",
//   },

//   {
//     title: "Muslim Magnum .357: To Serve and Protect",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/3/0/5/6/3/4/305634-muslim-magnum-357-0-1000-0-1500-crop.jpg?v=e35e4231b4",

//     description:
//       "To Serve and\u00A0Protect\nWhen the Muslim princess Ameera is kidnapped by a local crime syndicate, undercover cop Lt. Jamal Razul a.k.a Magnum is given the task of getting her back. Aided by fellow officer Joselito Ibanez, Razul discovers that there’s more to the kidnapping than mere\u00A0ransom.",

//     genre: ["Action"],

//     releaseDate: "2014-12-25",

//     rating: 6.2,

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=iqX3k1qxEbQ",
//   },

//   {
//     title: "My Big Bossing",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/2/8/3/5/0/3/283503-my-big-bossing-0-1000-0-1500-crop.jpg?v=3bb3e2a7d5",

//     description:
//       "Three stories that focus on a precocious child who keeps getting into trouble, and the weary guardian who’s along for the\u00A0ride.",

//     genre: ["Comedy, Fantasy"],

//     releaseDate: "2014-12-25",

//     rating: 4.7,

//     awards: ["Best Child Performer"],

//     link: "https://www.youtube.com/watch?v=00ktt8WsWZI",
//   },

//   {
//     title: "Shake, Rattle & Roll XV",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/2/7/3/5/7/4/273574-shake-rattle-roll-xv-0-1000-0-1500-crop.jpg?v=cdc22b1f56",

//     description:
//       "A snake creature secretly lurks inside a shopping mall. A family is fed a meal that turns them into monsters. An airplane hijacking is interrupted by the birth of a\u00A0tiyanak.",

//     genre: ["Horror anthology"],

//     releaseDate: "2014-12-25",

//     rating: 5.4,

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=lS8Re0XZudY",
//   },

//   {
//     title: "All You Need Is Pag-ibig",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/3/0/9/4/3/0/309430-all-you-need-is-pag-ibig-0-1000-0-1500-crop.jpg?v=e4680b4d84",

//     description:
//       "The movie features varied forms of love: family love, sibling love, puppy love, unrequited love, ruined love, prospering love, in denial love, jaded love, and true love, among others. After all,what the world needs now is\u00A0love.",

//     genre: ["Romantic comedy"],

//     releaseDate: "2015-12-25",

//     rating: 6.3,

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=gvX58XGqnT8",
//   },

//   {
//     title: "Beauty and the Bestie",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/3/0/9/0/7/5/309075-beauty-and-the-bestie-0-1000-0-1500-crop.jpg?v=25b432b10a",

//     description:
//       "For an important case, a policeman needs the help of his former best friend to impersonate the daughter of a foreign dignitary in a beauty\u00A0pageant.",

//     genre: ["Comedy, action"],

//     releaseDate: "2015-12-25",

//     rating: 4.7,

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=qh5VWtX3muw",
//   },

//   {
//     title: "Buy Now, Die Later",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/3/0/9/1/9/4/309194-buy-now-die-later-0-1000-0-1500-crop.jpg?v=718b5ff34f",

//     description:
//       "Story about five people who wanted something so badly that they’ll do anything, even to deal with the devil. As they finally get what they want, no one has mentioned that their dream will cost them their\u00A0lives.",

//     genre: ["Horror, Comedy"],

//     releaseDate: "2015-12-25",

//     rating: 5,

//     awards: ["Best Production Design", "Best Float"],

//     link: "https://www.youtube.com/watch?v=59dUJs2S4Ps",
//   },

//   {
//     title: "Haunted Mansion",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/3/0/9/4/3/1/309431-haunted-mansion-0-1000-0-1500-crop.jpg?v=3349fad036",

//     description:
//       "A group of high school students who are spending the night in a old mansion. When they learn that the house is haunted they set to look out for ghosts just for fun , but they find out soon enough that the urban legends are\u00A0real.",

//     genre: ["Horror, suspense, thriller"],

//     releaseDate: "2015-12-25",

//     rating: 4.4,

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=-Oy3Pwb-Isg",
//   },

//   {
//     title: "Honor Thy Father",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/2/8/9/9/6/4/289964-honor-thy-father-0-1000-0-1500-crop.jpg?v=82877b24e6",

//     description:
//       "Edgar’s family is caught in a financial ruin after being involved in a Ponzi scheme. With their church’s bishop refusing to return their donation, and his daughter subsequently kidnapped, he seeks the aid of his criminally inclined\u00A0family.",

//     genre: ["Action, drama"],

//     releaseDate: "2015-12-25",

//     rating: 7.5,

//     awards: [
//       "Best Director",
//       "Best Supporting Actor",
//       "Best Child Performer",
//       "Best Make-up Artist",
//       "Best Original Theme Song",
//     ],

//     link: "https://www.youtube.com/watch?v=4DCCw9Qs1fc",
//   },

//   {
//     title: "My Bebe Love: #KiligPaMore",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/3/0/9/3/8/0/309380-my-bebe-love-kiligpamore-0-1000-0-1500-crop.jpg?v=f7fcb012b0",

//     description:
//       "Dondi is a nerd and an obedient nephew to his aunt Cora who makes decisions for him. Meanwhile, Anna is a stubborn and rebellious girl who seeks the attention of her father Vito. Dondi and Anna cross path and their different personalities collide. They eventually fall in love with each other and solve their own problems. Vito and Cora are bitter business competitors and because of their rivalry, they disapproved the romantic relationship between Dondi and\u00A0Anna.",

//     genre: ["Romantic comedy"],

//     releaseDate: "2015-12-25",

//     rating: 3.9,

//     awards: [
//       "Best Supporting Actress",
//       "Gatpuno Antonio J. Villegas Cultural Award",
//     ],

//     link: "https://www.youtube.com/watch?v=gXX2VWVN9_U",
//   },

//   {
//     title: "Nilalang",

//     poster: "https://upload.wikimedia.org/wikipedia/en/8/8c/Nilalang.jpg",

//     description:
//       "a 2015\u00A0Filipino\u00A0action\u00A0horror\u00A0film directed by Pedring Lopez starring\u00A0Cesar Montano\u00A0and\u00A0Maria Ozawa. It is an official entry to the\u00A02015\u00A0Metro Manila Film Festival\u00A0and was released on December 25, 2015.  Nilalang\u00A0is about a local\u00A0forensic expert\u00A0who teams up with an heiress to a transnational\u00A0organized crime syndicate\u00A0originating from\u00A0Japan.",

//     genre: ["Horror, action, thriller, crime"],

//     releaseDate: "2015-12-25",

//     rating: 4.3,

//     awards: [
//       "Best Cinematography",
//       "Best Editing",
//       "Best Visual Effects",
//       "Best Musical Score",
//       "Best Sound Engineering",
//     ],

//     link: "https://www.youtube.com/watch?v=sXknY6eX1ZE",
//   },

//   {
//     title: "#Walang Forever",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/3/0/9/1/9/3/309193--walang-forever-0-1000-0-1500-crop.jpg?v=a20133b6ae",

//     description:
//       "Mia, a celebrated writer of romantic-comedy films, is at a turning point in her life which makes it difficult for her to believe that love could last. Everything comes to a head when Ethan returns, only for her to find out that he has become a cynic of lasting love because she broke his\u00A0heart.",

//     genre: ["Romantic comedy"],

//     releaseDate: "2015-12-25",

//     rating: 7,

//     awards: [
//       "Best Picture",
//       "Best Actor",
//       "Best Actress",
//       "Best Screenplay",
//       "Fernando Poe Jr. Memorial Award for Excellence",
//     ],

//     link: "https://www.youtube.com/watch?v=ZaI9xmSgmG8",
//   },

//   {
//     title: "Ang Babae sa Septic Tank 2: #ForeverIsNotEnough",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/3/6/4/0/5/5/364055-ang-babae-sa-septic-tank-2-foreverisnotenough-0-1000-0-1500-crop.jpg?v=a841c94703",

//     description:
//       "Eugene prepares for her comeback vehicle after a long sabbatical from movie making. Rainier proposes “The Itinerary,” a heartbreaking anatomy of a crumbling marriage as told through a couple’s trip to Baguio, their former honeymoon location.",

//     genre: ["Comedy"],

//     releaseDate: "2016-12-25",

//     rating: ["6.6"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=sDLFK9YxJq0",
//   },

//   {
//     title: "Die Beautiful",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/3/5/2/1/8/7/352187-die-beautiful-0-1000-0-1500-crop.jpg?v=fe9ff53d34",

//     description:
//       "A Glamorous Life Deserves a Fabulous Death. Trisha, a Filipino transgender woman, suddenly dies while being crowned in a beauty pageant. Her last wish was to be presented as a different celebrity on each night of her wake, but her conservative father wants to bury her as a man.",

//     genre: ["Comedy"],

//     releaseDate: "2016-12-25",

//     rating: ["7.5"],

//     awards: [
//       "Best Actor",
//       "Best Supporting Actor",
//       "Best Float",
//       "My Most Favorite Film",
//     ],

//     link: "https://www.youtube.com/watch?v=FJ0ERN2rZ7g",
//   },

//   {
//     title: "Kabisera",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/3/6/4/0/5/6/364056-the-seat-0-1000-0-1500-crop.jpg?v=e572c7128f",

//     description:
//       "A Filpino family deals with hooded people who are involved in extra-judicial killings and other abuses in Philippine society.",

//     genre: ["Drama"],

//     releaseDate: "2016-12-25",

//     rating: ["7.7"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=F70wBicTZsk",
//   },

//   {
//     title: "Oro",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/3/6/4/0/5/7/364057-oro-0-1000-0-1500-crop.jpg?v=100f60ca0e",

//     description:
//       "When nature becomes an excuse for violence, everything that is gold turns into blood. The film is about the lives of simple folk caught between the crossfire of Kapitana accused of political patronage, and Patrol Kalikasan using the environment as a front for their own political and economic interests on the small mining community.",

//     genre: ["Political, thriller"],

//     releaseDate: "2016-12-25",

//     rating: ["4.7"],

//     awards: [
//       "Best Actress",
//       "Best Ensemble Cast",
//       "Fernando Poe Jr. Memorial Award for Excellence",
//     ],

//     link: "https://www.youtube.com/watch?v=6LWZUO3QxRQ",
//   },

//   {
//     title: "Saving Sally",

//     poster:
//       "https://upload.wikimedia.org/wikipedia/en/9/9a/Savingsallyposter.jpg",

//     description:
//       'a 2016 Philippine surreal romantic comedy-drama film directed by Avid Liongoren in his directorial debut. Combining live action and animation, the film revolves around Marty (Enzo Marcos), an amateur comic book artist who falls for Sally (Rhian Ramos), a gadget inventor, and has since become her loyal protector and hero from the "monsters": her abusive parents, and her obnoxious boyfriend Nick (TJ Trinidad).',

//     genre: ["Live-action/animation, Romance, Sci-fi"],

//     releaseDate: "2016-12-25",

//     rating: ["7.1"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=4Ke6GpEhLyE",
//   },

//   {
//     title: "Seklusyon",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/3/6/4/0/5/8/364058-seclusion-0-1000-0-1500-crop.jpg?v=41062a1c20",

//     description:
//       "Are your prayers enough to fight the temptations of the devil? In 1947, those aspiring to be priest are sent to a remote convent to live in seclusion on the last day of their training. The purpose is to shield them from evil of the world. The plot thickens when a mysterious young girl comes to the convent but the question is whether she is really sent by God or by the Evil.",

//     genre: ["Horror"],

//     releaseDate: "2016-12-25",

//     rating: ["6.1"],

//     awards: [
//       "Best Director",
//       "Best Supporting Actress",
//       "Best Screenplay",
//       "Best Cinematography",
//       "Best Production Design",
//       "Best Sound Design",
//       "Best Original Theme Song",
//       "Special Jury Prize",
//     ],

//     link: "N/A",
//   },

//   {
//     title: "Sunday Beauty Queen",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/3/6/3/9/0/1/363901-sunday-beauty-queen-0-1000-0-1500-crop.jpg?v=219b6561d8",

//     description:
//       "Beneath Hong Kong’s glittering facade, Filipina domestic helpers work in relative anonymity and for near-slave wages. In a beauty pageant like no other, five helpers give themselves makeovers for a day and gleefully reclaim their dignity.",

//     genre: ["Documentary, drama"],

//     releaseDate: "2016-12-25",

//     rating: ["7.8"],

//     awards: [
//       "Best Picture",
//       "Best Editing",
//       "Gatpuno Antonio J. Villegas Cultural Award",
//     ],

//     link: null,
//   },

//   {
//     title: "Vince & Kath & James",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/3/6/4/0/5/9/364059-vince-kath-james-0-1000-0-1500-crop.jpg?v=9f13e21567",

//     description:
//       "The story of two lovestruck teens, Vince and Kath, through text messages.",

//     genre: ["Romantic, comedy"],

//     releaseDate: "2016-12-25",

//     rating: ["6.8"],

//     awards: ["Children’s Choice Award"],

//     link: "https://www.youtube.com/watch?v=gukQ1AkP1Us",
//   },

//   {
//     title: "All of You",

//     poster:
//       "https://upload.wikimedia.org/wikipedia/en/f/f7/All_of_You_2017_movie_poster.jpg",

//     description:
//       "A 2017 Philippine romantic comedy film directed by Dan Villegas and starring Jennylyn Mercado and Derek Ramsay. It is produced and released by Quantum Films, MJM Productions and serves as an official entry to the 2017 Metro Manila Film Festival.",

//     genre: ["Romance, Comedy"],

//     releaseDate: "2017-12-25",

//     rating: ["7.3"],

//     awards: ["Best Actor", "Best Screenplay"],

//     link: "https://www.youtube.com/watch?v=jr6ctauQ0GA",
//   },

//   {
//     title: "Gandarrapiddo: The Revenger Squad",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/4/2/3/5/0/8/423508-gandarrapiddo-the-revenger-squad-0-1000-0-1500-crop.jpg?v=6bfb1d4abb",

//     description:
//       "A story about Gandarra, Rapiddo, and Kweenie, who are all trying to attain and protect what is most precious to them. Family is the only thing that binds them, but as they stick to their separate missions, dark secrets arise and threaten to destroy everything they hold dear.",

//     genre: ["Action, Comedy"],

//     releaseDate: "2017-12-25",

//     rating: ["3.5"],

//     awards: ["People's Choice Award"],

//     link: "https://www.youtube.com/watch?v=EA0bkY7anNQ",
//   },

//   {
//     title: "Meant to Beh",

//     poster:
//       "https://upload.wikimedia.org/wikipedia/en/4/4b/Meant_to_Beh_poster.jpg",

//     description:
//       "A 2017 Philippine family comedy film directed by Chris Martinez and starring Vic Sotto and Dawn Zulueta.",

//     genre: ["Family, Comedy"],

//     releaseDate: "2017-12-25",

//     rating: ["3.9"],

//     awards: ["Best Child Performer"],

//     link: "https://www.youtube.com/watch?v=cXzbzn0diP8",
//   },

//   {
//     title: "Ang Panday",

//     poster:
//       "https://upload.wikimedia.org/wikipedia/en/8/81/Ang_Panday_%282017_film%29_Official_Poster.jpeg",

//     description:
//       "a 2017 Filipino superhero fantasy action film based on the eponymous comic book character created by Carlo J. Caparas along with his co-creator Steve Gan. Serving as the seventh installment of the  Panday  series, the film is co-written, directed and produced by Coco Martin, who also stars in the title role.",

//     genre: ["Action, Fantasy"],

//     releaseDate: "2017-12-25",

//     rating: ["5.5"],

//     awards: [
//       "Best Visual Effects",
//       "Fernando Poe Jr. Memorial Award for Excellence",
//       "Special Jury Prize",
//       "Children's Choice Award",
//     ],

//     link: "https://www.youtube.com/watch?v=_reOR71wzJ4",
//   },

//   {
//     title: "Deadma Walking",

//     poster: "https://upload.wikimedia.org/wikipedia/en/2/24/Deadma_Walking.jpg",

//     description:
//       "A 2017 Philippine comedy - drama musical film, directed by Julius Alfonso. The film is about a terminally ill gay man who fakes his own death to attend his own wake to hear his friend’s views on him.",

//     genre: ["Comedy, Drama, Musical"],

//     releaseDate: "2017-12-25",

//     rating: ["7.8"],

//     awards: ["Best Supporting Actor", "Best Float"],

//     link: "https://www.youtube.com/watch?v=THSg4aONLKM",
//   },

//   {
//     title: "Haunted Forest",

//     poster:
//       "https://upload.wikimedia.org/wikipedia/en/e/e2/Haunted_Forest_2017_movie_poster.jpg",

//     description:
//       'a 2017 Filipino supernatural horror film directed by Ian Loreños, and starring Jane Oineza, Maris Racal, Jameson Blake and Jon Lucas. It tells the story of a teenager who is forced to leave her life behind when her estranged policeman father is reassigned to the province. The film deals with supernatural mythical creatures, among them is the "sitsit," a creature that preys on women at night and is believed to be the cause of sudden disappearances and deaths of women in the subject town.',

//     genre: ["Horror, Thriller"],

//     releaseDate: "2017-12-25",

//     rating: ["3.7"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=LFfaiwWuDGg",
//   },

//   {
//     title: "Ang Larawan",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/4/2/1/5/4/2/421542-the-portrait-0-1000-0-1500-crop.jpg?v=182aa3bd29",

//     description:
//       "A musical tale about two impoverished sisters’ anguish over whether or not to sell the final masterpiece of their recluse father days before the second world war, in Manila.",

//     genre: ["Musical"],

//     releaseDate: "2017-12-25",

//     rating: ["7.1"],

//     awards: [
//       "Best Picture",
//       "Best Actress",
//       "Best Production Design",
//       "Best Musical Score",
//       "Gatpuno Antonio J. Villegas Cultural Award",
//       "Special Jury Prize",
//     ],

//     link: "https://www.youtube.com/watch?v=JNobetTyezY",
//   },

//   {
//     title: "Siargao",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/4/2/5/0/6/0/425060-siargao-0-1000-0-1500-crop.jpg?v=32950bad21",

//     description:
//       "Fresh from a breakup caused by her fear of settling down, video blogger Laura embarks on a solo trip to Siargao hoping to move on and find a new adventure. Here she meets rock singer Diego who is caught between uncertainties of the future and baggages of the past. This fateful encounter stirs up what local entrepreneur Abi thought were long lost feelings for a long-lost love, i.e. Diego. In this unlikely triangle, is there room for second chances? Or should they move on to something(one) new?",

//     genre: ["Romance, Drama"],

//     releaseDate: "2017-12-25",

//     rating: ["5.9"],

//     awards: [
//       "Best Director",
//       "Best Supporting Actress",
//       "Best Cinematography",
//       "Best Editing",
//       "Best Sound",
//       "Best Original Theme Song",
//     ],

//     link: "https://www.youtube.com/watch?v=DxhjUt0F8is",
//   },

//   {
//     title: "Aurora",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/4/6/2/7/5/6/462756-aurora-0-1000-0-1500-crop.jpg?v=4775ca5396",

//     description:
//       "The dead will find their way home The passenger ship Aurora mysteriously collides into the rocky sea threatening an entire island. A young woman and her sister must both survive by finding the missing dead for a bounty.",

//     genre: ["Horror, Thriller, Suspense"],

//     releaseDate: "2018-12-25",

//     rating: ["4.4"],

//     awards: [
//       "Best Child Performer",
//       "Best Cinematography",
//       "Best Sound",
//       "Best Visual Effects",
//     ],

//     link: "https://www.youtube.com/watch?v=jqZ4GevLeeg",
//   },

//   {
//     title: "Fantastica",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/4/9/4/0/1/3/494013-fantastica-0-1000-0-1500-crop.jpg?v=df5edd8b1c",

//     description:
//       "Belat, her mother Fec and adopted siblings Daks, Pepe and Junjun face the possibility of being evicted from their land as they struggle to save their carnival. Hoping to prevent the carnival from closing, they turn to Prince, a man from Belat`s past, for help. He promises to give them a hand if they first help him look for the lost princesses Rapunselya, Maulan and Ariella so they can save the magical land, Fantastica.",

//     genre: ["Fantasy, Comedy"],

//     releaseDate: "2018-12-25",

//     rating: ["3.7"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=-3Ig4PrrqbY",
//   },

//   {
//     title: "The Girl in the Orange Dress",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/4/9/4/6/2/0/494620-the-girl-in-the-orange-dress-0-1000-0-1500-crop.jpg?v=927198cb40",

//     description:
//       "What would you do if you wake up with a stranger next to you? Anna, a conservative girl wakes up in a hotel room with the biggest actor in the country. Having no memory on how she got there, she must figure her way out of the hotel to avoid the fans and media swarming the hotel.",

//     genre: ["Romance, Comedy"],

//     releaseDate: "2018-12-25",

//     rating: ["6.6"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=xBfF21v-sz4",
//   },

//   {
//     title: "Jack Em Popoy: The Puliscredibles",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/4/9/8/8/4/0/498840-jack-em-popoy-the-puliscredibles-0-1000-0-1500-crop.jpg?v=74ae946850",

//     description:
//       "It revolves about a team of “puliscredibles”, consisting of three charismatic and adventurous police officers named Jack, Emily, and Popoy, who embark on a mission to stop crimes from occurring within their vicinity.",

//     genre: ["Action, Thriller, Comedy"],

//     releaseDate: "2018-12-25",

//     rating: ["6"],

//     awards: [
//       "Best Editing",
//       "Best Float",
//       "Fernando Poe Jr. Memorial Award for Excellence",
//     ],

//     link: "https://www.youtube.com/watch?v=7VlapkXVdb8",
//   },

//   {
//     title: "Mary, Marry Me",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/4/9/4/2/0/4/494204-mary-marry-me-0-1000-0-1500-crop.jpg?v=4c23eee009",

//     description:
//       "Don’t be a mistress! Sisters Mary Jane and Mary Anne find themselves at odds with each other over a groom-to-be",

//     genre: ["Romantic, comedy"],

//     releaseDate: "2018-12-25",

//     rating: ["6"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=_EP2nhHLQZ4",
//   },

//   {
//     title: "One Great Love",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/4/9/8/8/4/1/498841-one-great-love-0-1000-0-1500-crop.jpg?v=b44e6080fb",

//     description:
//       "The story revolves around Zyra Paez, whose relationship with Carl Mauricio has failed. She decides to give their relationship one more try, but soon finds herself filled with doubt over her life choices. The situation gets even more complex when she meets and befriends Ian Arcano, a heart doctor who later become her confidante, leaving her trying to decide whether he may be “the one”.",

//     genre: ["Romance, Drama"],

//     releaseDate: "2018-12-25",

//     rating: ["6.5"],

//     awards: ["Best Actor", "Best Musical Score"],

//     link: "https://www.youtube.com/watch?v=9XQP8asTI6Y",
//   },

//   {
//     title: "Otlum",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/4/9/8/8/3/7/498837-otlum-0-1000-0-1500-crop.jpg?v=253c118098",

//     description:
//       "Llor & Elttar, Ekahs. A group of friends dare each other to stay in a haunted house.",

//     genre: ["Horror"],

//     releaseDate: "2018-12-25",

//     rating: ["2.8"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=76zmkqJ2UxQ",
//   },

//   {
//     title: "Rainbow's Sunset",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/4/9/4/2/1/1/494211-rainbow-s-sunset-0-1000-0-1500-crop.jpg?v=1c14a54be7",

//     description:
//       "Ramon, an 84-year-old retired politician, shocks his family with his decision to live with and take care of his gay, childhood best friend, Fredo, who’s dying of cancer. As it turns out, the two men are romantically in love.",

//     genre: ["Family, drama"],

//     releaseDate: "2018-12-25",

//     rating: ["7.3"],

//     awards: [
//       "Best Picture",
//       "Best Director",
//       "Best Actress",
//       "Best Supporting Actor",
//       "Best Supporting Actress",
//       "Best Screenplay",
//       "Best Production Design",
//       "Best Original Theme Song",
//       "Gatpuno Antonio J. Villegas Cultural Award",
//       "Special Jury Prize",
//     ],

//     link: "https://www.youtube.com/watch?v=NNqgK53nbvU",
//   },

//   {
//     title: "Miracle in Cell No. 7",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/6/4/2/0/9/564209-miracle-in-cell-no-7-0-1000-0-1500-crop.jpg?v=2ea25ce3ab",

//     description:
//       "Joselito is a mentally-challenged man who is wrongfully charged with sexually assaulting and murdering a little girl. In prison, he becomes friends with his fellow inmates and together they form a plan to smuggle his young daughter inside the cell! Years after, his daughter becomes a lawyer and is determined to prove her father’s innocence.",

//     genre: ["Drama, Comedy"],

//     releaseDate: "2019-12-25",

//     rating: ["7.5"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=fqfTgujsMAE",
//   },

//   {
//     title: "Mission Unstapabol: The Don Identity",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/6/4/2/1/1/564211-mission-unstapabol-the-don-identity-0-1000-0-1500-crop.jpg?v=4ffc031861",

//     description:
//       "After being released from prison for a crime he didnt commit, the smoothest and classiest master thief is back in town, Don Robert Fortun, the robber whos always in style! Now hes set on taking revenge on the man who framed him for murder, his brother Don Benjie.",

//     genre: ["Comedy"],

//     releaseDate: "2019-12-25",

//     rating: ["4"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=YuYT755_rfs",
//   },

//   {
//     title: "The Mall, The Merrier",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/6/4/2/1/0/564210-the-mall-the-merrier-0-1000-0-1500-crop.jpg?v=5698e70763",

//     description:
//       "After the death of their parents, two estranged sisters must come together to save their family mall from ending up on evil hands.",

//     genre: ["Family, Comedy, Musical"],

//     releaseDate: "2019-12-25",

//     rating: ["3.4"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=Ot8B8ZsMSg8",
//   },

//   {
//     title: "Sunod",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/6/4/2/0/7/564207-sunod-0-1000-0-1500-crop.jpg?v=12e7f4b8b9",

//     description:
//       "A woman is desperate to find the cure to her daughter’s illness. She takes a job at a call center, only to be haunted by the ghost in it.",

//     genre: ["Horror"],

//     releaseDate: "2019-12-25",

//     rating: ["5.7"],

//     awards: ["Best Cinematography", "Best Production Design"],

//     link: "https://www.youtube.com/watch?v=NJrCsWp1Dxs",
//   },

//   {
//     title: "3pol Trobol: Huli Ka Balbon!",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/6/4/2/1/2/564212-3pol-trobol-huli-ka-balbon-0-1000-0-1500-crop.jpg?v=37f80f1eab",

//     description:
//       "After discovering an anomaly in his agency, the Executive Director is ambushed but he manages to pass on what he knows to Apollo. Before Apollo could report to the authorities, he becomes the primary suspect in killing his former boss",

//     genre: ["Action, Comedy, Romance"],

//     releaseDate: "2019-12-25",

//     rating: ["3.4"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=4RYAFV0j83U",
//   },

//   {
//     title: "Culion",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/6/4/2/0/5/564205-culion-0-1000-0-1500-crop.jpg?v=170ffb00df",

//     description:
//       "This is as much the story of three women as it is the story of Culion. In the 1940s, Anna, Doris, and Ditas are patients afflicted with Hansen’s Disease (or widely known as leprosy) who live in Culion at a time when the disease is practically a life sentence. No cure has yet been found, and no one is allowed to leave.",

//     genre: ["Historical, drama"],

//     releaseDate: "2019-12-25",

//     rating: ["5.9"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=ghjQazS2hHA",
//   },

//   {
//     title: "Mindanao",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/5/5/4/1/7/555417-mindanao-0-1000-0-1500-crop.jpg?v=09abaeeccc",

//     description:
//       "Saima, is the mother of a cancer-stricken kid and the wife of a medic deployed in a conflict of aggression in southern Philippines.",

//     genre: ["Drama, Animation"],

//     releaseDate: "2019-12-25",

//     rating: ["6.4"],

//     awards: [
//       "Best Picture",
//       "Best Director",
//       "Best Actor",
//       "Best Actress",
//       "Best Child Performer",
//       "Best Sound",
//       "Best Visual Effects",
//       "Best Float",
//       "Gatpuno Antonio J. Villegas Cultural Award",
//       "Fernando Poe Jr. Memorial Award for Excellence",
//       "Gender Sensitivity Award",
//     ],

//     link: "https://www.youtube.com/watch?v=eqx_6UPFSLM",
//   },

//   {
//     title: "Write About Love",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/7/4/7/9/2/574792-write-about-love-0-1000-0-1500-crop.jpg?v=f10de5f7c9",

//     description:
//       "The story of a young female writer who teams up with a seasoned male writer. Both must work together to rewrite the script of an unfinished love story.",

//     genre: ["Romance"],

//     releaseDate: "2019-12-25",

//     rating: ["4.7"],

//     awards: [
//       "Best Supporting Actor",
//       "Best Supporting Actress",
//       "Best Screenplay",
//       "Best Editing",
//       "Special Jury Prize",
//     ],

//     link: "https://www.youtube.com/watch?v=yYSvq3gTYEw",
//   },

//   {
//     title: "Coming Home",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/6/8/7/7/9/9/687799-coming-home-0-1000-0-1500-crop.jpg?v=5e5eb0cdd9",

//     description:
//       "It is Salve’s dream for her children to live happily after working hard to raise them alone. Now in her daughter Sally’s wedding, she feels she has accomplished that seeing her children giving tribute to her. Unknown to her, a big surprise awaits when they arrived home. An unconscious man is in their gate. Salve is quite familiar who the man is. She can never forget him – he is the man who left him years ago for another woman – her husband Benny.",

//     genre: ["Family, drama"],

//     releaseDate: "2020-12-25",

//     rating: ["3.7"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=omf_rvm68ms",
//   },

//   {
//     title: "Fan Girl",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/5/2/1/6/4/552164-fan-girl-0-1000-0-1500-crop.jpg?v=078f5be48a",

//     description:
//       "Never meet your hero. A starstruck girl sneaks into an actor’s house and discovers a horrifying truth about her idol.",

//     genre: ["Drama"],

//     releaseDate: "2020-12-25",

//     rating: ["6.6"],

//     awards:
//       "Best Picture, Best Director, Best Actor, Best Actress, Best Screenplay, Best Cinematography, Best Editing, Best Sound",

//     link: "https://www.youtube.com/watch?v=YImtIvhq1xM",
//   },

//   {
//     title: "Isa Pang Bahaghari",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/6/4/2/0/6/564206-one-more-rainbow-0-1000-0-1500-crop.jpg?v=0c5b6d2d35",

//     description:
//       "A former seaman long presumed dead returns to the Philippines and tries to reconnect with his wife and three children with the help of his gay best friend.",

//     genre: ["Family, drama"],

//     releaseDate: "2020-12-25",

//     rating: ["4.2"],

//     awards: ["None"],

//     link: "N/A",
//   },

//   {
//     title: "Magikland",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/6/5/9/7/6/8/659768-magikland-0-1000-0-1500-crop.jpg?v=2697c57123",

//     description:
//       "On Christmas eve, four lonely kids are chosen to save Magikland, a fantastic and magical world where all the world’s toys and games come from.",

//     genre: ["Fantasy, Adventure"],

//     releaseDate: "2020-12-25",

//     rating: ["5.4"],

//     awards:
//       "Best Production Design, Best Musical Score, Best Visual Effects, Best Virtual Float, Fernando Poe Jr. Memorial Award for Excellence",

//     link: "https://www.youtube.com/watch?v=QvAvn1w_0x8",
//   },

//   {
//     title: "Mang Kepweng: Ang Lihim ng Bandanang Itim",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/6/8/7/8/0/4/687804-mang-kepweng-the-mystery-of-the-dark-kerchief-0-1000-0-1500-crop.jpg?v=b2a1d51c9a",

//     description:
//       "Determined to save the world from the evil plans of a powerful “engkanto” who has the magical black bandana, Mang Kepweng, together with his friends, embarks on an exciting adventure to complete the magic ingredients needed to revive the powers of his magical red bandana to defeat the enemy.",

//     genre: ["Comedy"],

//     releaseDate: "2020-12-25",

//     rating: ["7.7"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=jEYZiVncPzY",
//   },

//   {
//     title: "Pakboys Takusa",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/9/2/6/2/7/592627-pakboys-takusa-0-1000-0-1500-crop.jpg?v=b43e6a1367",

//     description:
//       "Kung Ang Hapon May Yakuza, Ang Pinoy May Takusa! Four married men living in a condominium often go out with women who are not their wives. Their wives try to catch them red-handed but often rather fail as they think of ingenious ways to hide their cheating. In the end all took a toll to them as their lives were put in danger that they needed their wives to save them.",

//     genre: ["Comedy"],

//     releaseDate: "2020-12-25",

//     rating: ["7.3"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=xOcwse9SOV8",
//   },

//   {
//     title: "Suarez: The Healing Priest",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/6/8/7/8/0/3/687803-suarez-the-healing-priest-0-1000-0-1500-crop.jpg?v=e531b8081d",

//     description:
//       "When Fernando was given the gift of healing at 16, he hid it for many years until he became a priest only to find himself in scandals and squabbles with the Catholic Church. Unfazed, he challenged head on but pauses when faced with the question - what if the gift is taken away from him? Based on the true to life story of Fr. Fernando Suarez.",

//     genre: ["Biopic"],

//     releaseDate: "2020-12-25",

//     rating: ["7.3"],

//     awards: "Gatpuno Antonio J. Villegas Cultural Award",

//     link: "https://www.youtube.com/watch?v=5DtiwgR3o6k",
//   },

//   {
//     title: "Tagpuan",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/6/2/7/1/1/6/627116-crossroads-0-1000-0-1500-crop.jpg?v=a72d5b53fc",

//     description:
//       "In a world where people wander all over the globe for survival and no home can any longer be called home, three rootless lonely souls try to connect.",

//     genre: ["Romance"],

//     releaseDate: "2020-12-25",

//     rating: ["3.6"],

//     awards: "Best Supporting Actress",

//     link: "https://www.youtube.com/watch?v=yStF1jihyB8",
//   },

//   {
//     title: "The Boy Foretold by the Stars",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/9/8/3/9/0/598390-the-boy-foretold-by-the-stars-0-1000-0-1500-crop.jpg?v=fab7cc6dae",

//     description:
//       "The Boy Foretold By the Stars is a romantic comedy movie about two senior high school boys who, through the help of a fortune-teller, find each other at an optional school retreat called Journey with the Lord.",

//     genre: ["Romantic, comedy"],

//     releaseDate: "2020-12-25",

//     rating: ["6.7"],

//     awards: "Best Original Theme Song, Gender Sensitivity Award",

//     link: "https://www.youtube.com/watch?v=AwiKXKwMDIU",
//   },

//   {
//     title: "The Missing",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/6/1/9/2/9/8/619298-the-missing-0-1000-0-1500-crop.jpg?v=dfec1e3baf",

//     description:
//       "Every house has a story; some have secrets waiting to haunt you. In the pursuit of a contractual work in Japan, Iris became the victim of a curse that haunted her during her engagement as an architect of an over 100-year-old house.",

//     genre: ["Horror"],

//     releaseDate: "2020-12-25",

//     rating: ["3.8"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=_Imt6MmPibY",
//   },

//   {
//     title: "A Hard Day",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/9/2/6/2/5/592625-a-hard-day-0-1000-0-1500-crop.jpg?v=5a3f63c49d",

//     description:
//       "Today, only one survives. After trying to cover up a car accident that left a man dead, a crooked homicide detective is stalked by a mysterious man claiming to have witnessed the event.",

//     genre: ["Action"],

//     releaseDate: "2021-12-25",

//     rating: ["6.1"],

//     awards:
//       "Best Editing, Best Sound, Fernando Poe Jr. Memorial Award for Excellence",

//     link: "https://www.youtube.com/watch?v=BqwwQaPmKXE",
//   },

//   {
//     title: "Big Night!",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/9/4/8/8/1/594881-big-night-0-1000-0-1500-crop.jpg?v=48fc11c516",

//     description:
//       "My name is Dharna. Dharna with an H! A gay beautician is determined to clear his name after learning he’s included in a drug watchlist.",

//     genre: ["Black Comedy"],

//     releaseDate: "2021-12-25",

//     rating: ["7"],

//     awards:
//       "Best Picture, Best Director, Best Actor, Best Supporting Actor, Best Screenplay, Best Cinematography, Best Musical Score, Gender Sensitivity Award",

//     link: "https://www.youtube.com/watch?v=TeyApgeB2Mg",
//   },

//   {
//     title: "Huling Ulan sa Tag-Araw",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/8/0/8/1/6/4/808164-huling-ulan-sa-tag-araw-0-1000-0-1500-crop.jpg?v=75cbe9f136",

//     description: "An exotic dancer falls in love with a priest-to-be.",

//     genre: ["Romance, Comedy"],

//     releaseDate: "2021-12-25",

//     rating: ["5.1"],

//     awards: "Best Original Theme Song",

//     link: "https://www.youtube.com/watch?v=wnDFTax8hNA",
//   },

//   {
//     title: "Huwag Kang Lalabas",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/7/6/4/0/9/0/764090-huwag-kang-lalabas-0-1000-0-1500-crop.jpg?v=17ac60dacf",

//     description:
//       "Three stories of haunting secrets, folklore, and urban legends.",

//     genre: ["Horror, Anthology"],

//     releaseDate: "2021-12-25",

//     rating: ["3.2"],

//     awards: "Best Float",

//     link: "https://www.youtube.com/watch?v=PvxDHd9NaRo",
//   },

//   {
//     title: "Kun Maupay Man it Panahon",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/7/1/3/1/7/571317-whether-the-weather-is-fine-0-1000-0-1500-crop.jpg?v=df22dcda61",

//     description:
//       "Against the backdrop of the Typhoon Yolanda, a mother and her son struggle for survival and deal with absurdity of fate, sustained by the hope that they carry, and what is lost and gained.",

//     genre: ["Drama"],

//     releaseDate: "2021-12-25",

//     rating: ["6"],

//     awards:
//       "Best Actress, Best Supporting Actress, Best Production Design, Best Visual Effects, Gatpuno Antonio J. Villegas Cultural Award, Special Jury Prize",

//     link: "https://www.youtube.com/watch?v=SKuQ_m_tS_M",
//   },

//   {
//     title: "Love at First Stream",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/7/6/3/3/2/2/763322-love-at-first-stream-0-1000-0-1500-crop.jpg?v=5b3a2cf8f5",

//     description:
//       "It revolves around the story of four people a streamer, a student, a breadwinner, and a heartthrob who will explore love and friendships online to escape their realities offline.",

//     genre: ["Romantic, Comedy"],

//     releaseDate: "2021-12-25",

//     rating: ["5.6"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=KDhJTG8749w",
//   },

//   {
//     title: "Nelia",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/8/0/8/1/6/7/808167-nelia-0-1000-0-1500-crop.jpg?v=851c19ef20",

//     description:
//       "The Nurse will see you know. A nurse whose womanly instincts and gut feel are aroused because of the mysterious cases happening in the hospital where she work. To what revelations her curiosity will lead her to uncover?",

//     genre: ["Suspense, Drama"],

//     releaseDate: "2021-12-25",

//     rating: ["5.8"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=vi-Ez6XHPZs",
//   },

//   {
//     title: "The Exorsis",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/6/5/9/7/6/9/659769-the-exorsis-0-1000-0-1500-crop.jpg?v=feca0b1dc3",

//     description:
//       "The film follows Gina, who must find an exorcist after her younger sister gets possessed by a dead woman’s spirit.",

//     genre: ["Horror, Comedy"],

//     releaseDate: "2021-12-25",

//     rating: ["3.9"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=ILw0ccN3Wpg",
//   },

//   {
//     title: "Labyu with an Accent",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/8/9/8/8/6/1/898861-labyu-with-an-accent-0-1000-0-1500-crop.jpg?v=e409bcc08f",

//     description:
//       "Love hides in the most unexpected places… and people! Trisha spent about 20 years living and working in the US, while Gabo has been working in different jobs to make ends meet in the Philippines. The two will cross paths when Trish returns to the country.",

//     genre: ["Romance, Comedy"],

//     releaseDate: "2022-12-25",

//     rating: ["4.3"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=SHyO5Q36iTI",
//   },

//   {
//     title: "Nanahimik ang Gabi",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/8/9/8/8/6/2/898862-nanahimik-ang-gabi-0-1000-0-1500-crop.jpg?v=9ce8fa6e66",

//     description:
//       "The film revolves around the covert relationship of a woman with a corrupt police officer and “sugar daddy.”",

//     genre: ["Horror, Thriller, Action"],

//     releaseDate: "2022-12-25",

//     rating: ["6"],

//     awards:
//       "Best Actor, Best Supporting Actor, Best Production Design, Best Musical Score",

//     link: "https://www.youtube.com/watch?v=W1QkufWBIiQ",
//   },

//   {
//     title: "Partners in Crime",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/8/9/8/8/6/3/898863-partners-in-crime-0-1000-0-1500-crop.jpg?v=6994942080",

//     description:
//       "A pair of partners-turned-rivals compete to interview the richest man in the Philippines, only to find themselves at the scene of a baffling crime.",

//     genre: ["Action, Comedy"],

//     releaseDate: "2022-12-25",

//     rating: ["4.4"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=SJp1bfBENmQ",
//   },

//   {
//     title: "My Teacher",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/8/9/8/8/6/4/898864-my-teacher-0-1000-0-1500-crop.jpg?v=10ff14e718",

//     description:
//       "A high school teacher returns to her hometown and learns life’s most valuable lesson from her unconventional student — a 70-year-old man.",

//     genre: ["Drama, Family"],

//     releaseDate: "2022-12-25",

//     rating: ["3.9"],

//     awards: "Gender Sensitivity Award",

//     link: "https://www.youtube.com/watch?v=VAkK0npdG60",
//   },

//   {
//     title: "Deleter",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/8/9/9/5/3/0/899530-deleter-0-1000-0-1500-crop.jpg?v=8dc7623e96",

//     description:
//       "Don’t delete the dead. An online content moderator deletes a suicide video made by her co-worker. But the otherwise desensitized woman cannot escape from either her own troubled past or from a mysterious vengeful presence.",

//     genre: ["Techno-horror, Psychological thriller"],

//     releaseDate: "2022-12-25",

//     rating: ["5.2"],

//     awards:
//       "Best Picture, Best Director, Best Actress, Best Cinematography, Best Editing, Best Sound, Best Visual Effects",

//     link: "https://www.youtube.com/watch?v=qgiSlTPj1Ic",
//   },

//   {
//     title: "Family Matters",

//     poster:
//       "https://upload.wikimedia.org/wikipedia/en/4/4a/Family_Matters_2022_MMFF.jpg",

//     description:
//       "A 2022 Philippine drama film directed by Nuel Naval and produced under Cineko Productions and Top Story. It was released theatrically on December 25, 2022 as an entry to the 2022 Metro Manila Film Festival.",

//     genre: ["Drama, Family"],

//     releaseDate: "2022-12-25",

//     rating: ["6.6"],

//     awards: "Gatpuno Antonio J. Villegas Cultural Award",

//     link: "https://www.youtube.com/watch?v=nf6VTo0GqZE",
//   },

//   {
//     title: "Mamasapano: Now It Can Be Told",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/9/3/5/4/0/3/935403-mamasapano-now-it-can-be-told-0-1000-0-1500-crop.jpg?v=8dd798b71f",

//     description:
//       "The story of the Mamasapano clash where 44 Special Action Force officers of the Philippine National Police (PNP) died on their mission from the point of view of then-PNP Deputy Chief of Operations Major General Benjamin Magalong as he was heading the investigation.",

//     genre: ["Action, Drama"],

//     releaseDate: "2022-12-25",

//     rating: ["4.8"],

//     awards:
//       "Best Screenplay, Best Original Theme Song, Fernando Poe Jr. Memorial Award for Excellence, Special Jury Prize",

//     link: "https://www.youtube.com/watch?v=EpwcYvgfEHw",
//   },

//   {
//     title: "My Father, Myself",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/9/3/5/4/0/0/935400-my-father-myself-0-1000-0-1500-crop.jpg?v=12caa38ae0",

//     description:
//       "Robert and his wife have a daughter and an adopted son, Matthew, whose biological father is Robert’s deceased best friend and former lover, Domeng. Conflict ensues as Robert becomes sexually attracted to a teenage Matthew while Matthew impregnates his stepsister much to the shame of the family matriarch.",

//     genre: ["Drama"],

//     releaseDate: "2022-12-25",

//     rating: ["4.4"],

//     awards: "Best Supporting Actress, Best Child Performer, Best Float",

//     link: "https://www.youtube.com/watch?v=TyDpsaWsF58",
//   },

//   {
//     title: "Family of Two",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/0/3/7/0/1/8/1037018-family-of-two-a-mother-and-son-s-story--0-1000-0-1500-crop.jpg?v=4ad53e0e61",

//     description:
//       "The story of Maricar whose world revolves around her son, Mateo, who she raised singlehandedly. When Mateo is moving to Singapore to pursue his career ambition and his girlfriend, he devised a plan to find a good man who can look after her mother while he is gone. At first, this made Maricar furious but eventually she saw the pure intention of her son.",

//     genre: ["Drama, Family"],

//     releaseDate: "2023-12-25",

//     rating: ["6.2"],

//     awards: "Best Supporting Actress",

//     link: "https://www.youtube.com/watch?v=PkJIUqqT8F0",
//   },

//   {
//     title: "Kampon",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/0/3/7/0/2/0/1037020-kampon-0-1000-0-1500-crop.jpg?v=f922ed0029",

//     description:
//       "A blessing in disguise turned evil surprise After 8 years of marriage, a childless couple named Clark and Eileen meet a little girl who one day, came knocking at their door claiming to be Clark’s child. Despite the unexpected situation, the wife accepts the child and temporarily fosters her while figuring the next steps. Meanwhile, Clark investigates the child’s history while Eileen begins to develop an odd and eerie relation with the child.",

//     genre: ["Horror, Thriller"],

//     releaseDate: "2023-12-25",

//     rating: ["4.7"],

//     awards: "Best Editing",

//     link: "https://www.youtube.com/watch?v=hDOBQqfAPto",
//   },

//   {
//     title: "Penduko",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/5/6/9/8/1/3/569813-penduko-0-1000-0-1500-crop.jpg?v=490ac7737a",

//     description:
//       "Pedro Penduko, son of a powerful traditional healer, rejects his destiny and becomes a wastrel in the big city. He is recruited by Midnight, an organization that sends healers out to people in need in exchange for money.",

//     genre: ["Superhero"],

//     releaseDate: "2023-12-25",

//     rating: ["5.5"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=IJMz2MehomY",
//   },

//   {
//     title: "Rewind",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/0/3/0/3/8/5/1030385-rewind-0-1000-0-1500-crop.jpg?v=9436191f8f",

//     description:
//       "Do you make time for what matters most? Mary loves John for as long as she can remember. But after years of marriage, John’s priorities shift, leading to a strained relationship with Mary, which causes a tragic accident that takes away Mary’s life. Until one day, John gets an extraordinary proposition - to rewind time and save the life of the woman he loves.",

//     genre: ["Romance, Drama"],

//     releaseDate: "2023-12-25",

//     rating: ["4.6"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=_31Tod1VvLM",
//   },

//   {
//     title: "Becky & Badette",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/0/6/7/7/4/1/1067741-becky-and-badette-0-1000-0-1500-crop.jpg?v=37b2ba2046",

//     description:
//       "Two broke best friends unexpectedly find themselves in the center of attention after pretending to be lovers at their school reunion. However, an old flame threatens to tear them apart.",

//     genre: ["Comedy"],

//     releaseDate: "2023-12-25",

//     rating: ["6.4"],

//     awards: "Best Original Theme Song, Gender Sensitivity Award",

//     link: "https://www.youtube.com/watch?v=8AYzfGVYO8w",
//   },

//   {
//     title: "Broken Hearts Trip",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/0/7/7/9/5/6/1077956-broken-hearts-trip-0-1000-0-1500-crop.jpg?v=d999c999be",

//     description:
//       "Can you stand a chance to win at the “game” of life and love? What if you had to choose between a million pesos or a chance at moving on? Five brokenhearted LGBTQ individuals will be given a chance to heal in the most beautiful places, and there’s a million-peso prize at the end. Can they stay single and prove to everyone that their lives will still go on? Or will their hearts open up to loving once more?",

//     genre: ["Comedy, Drama"],

//     releaseDate: "2023-12-25",

//     rating: ["3.8"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=rIBbKudebUM",
//   },

//   {
//     title: "Firefly",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/0/4/9/9/8/0/1049980-firefly-0-1000-0-1500-crop.jpg?v=e479bb1640",

//     description:
//       "The film follows a young boy’s search for the mythical island of fireflies described in his mother’s bedtime stories. Using the “clues” he believes his mother left behind in an old notebook, the boy makes the long journey to the magical island to wish her back to life.",

//     genre: ["Fantasy, Drama"],

//     releaseDate: "2023-12-25",

//     rating: ["7.4"],

//     awards: "Best Picture, Best Screenplay, Best Child Performer",

//     link: "https://www.youtube.com/watch?v=Jirj0dfEUR4",
//   },

//   {
//     title: "GomBurZa",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/0/7/3/6/1/4/1073614-gomburza-0-1000-0-1500-crop.jpg?v=47852493c6",

//     description:
//       "A powerful and moving historical drama that tells the courageous story of three Filipino Catholic priests: Mariano Gomez, José Burgos, and Jacinto Zamora",

//     genre: ["Historical, Biopic"],

//     releaseDate: "2023-12-25",

//     rating: ["7.5"],

//     awards:
//       "Best Director, Best Actor, Best Cinematography, Best Production Design, Best Sound, Gatpuno Antonio J. Villegas Cultural Award",

//     link: "https://www.youtube.com/watch?v=lXnZ6FiRdJ4",
//   },

//   {
//     title: "Mallari",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/0/0/8/4/6/8/1008468-mallari-0-1000-0-1500-crop.jpg?v=776a9f989b",

//     description:
//       "As Father Severino Mallari, a 19th century priest during the Spanish occupation, descends into madness, his life and work as a parish priest in Pampanga is recounted, where he reportedly murdered 57 people to aid his ailing mother.",

//     genre: ["Horror, Thriller"],

//     releaseDate: "2023-12-25",

//     rating: ["6"],

//     awards: "Best Supporting Actor, Best Musical Score, Best Visual Effects",

//     link: "https://www.youtube.com/watch?v=MlxxhaggsfM",
//   },

//   {
//     title: "When I Met You in Tokyo",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/0/6/0/2/5/3/1060253-when-i-met-you-in-tokyo-0-1000-0-1500-crop.jpg?v=689f53618e",

//     description:
//       "Azon, a feisty and bubbly woman known for the generosity of her heart, meets Joey, a divorcee who still harbors the scars of his ex-wife’s infidelity in this romance-family drama tackling unconditional love, sacrifices and aging from the perspective of two elderly overseas Filipino workers in the winter of their lives.",

//     genre: ["Romance, Drama"],

//     releaseDate: "2023-12-25",

//     rating: ["4.7"],

//     awards: "Fernando Poe Jr. Memorial Award for Excellence, Best Float",

//     link: "https://www.youtube.com/watch?v=DHvrBfDhsBM",
//   },

//   {
//     title: "And the Breadwinner Is...",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/1/6/0/2/0/8/1160208-and-the-breadwinner-is-0-1000-0-1500-crop.jpg?v=bb7d83e254",

//     description:
//       "A mistaken identity leads to a promising opportunity when breadwinner Bambi comes home to her own funeral. Instead of correcting the comical mistake, Bambi, together with her dysfunctional family, decide to keep up the ridiculous act of her death in order to claim her 10 million peso life insurance in hopes of finally turning their dream life to reality.",

//     genre: ["Comedy, Family"],

//     releaseDate: "2024-12-25",

//     rating: ["6.7"],

//     awards: "Gender Sensitivity Award",

//     link: "https://www.youtube.com/watch?v=l1OiWrv5gFY",
//   },

//   {
//     title: "Green Bones",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/2/6/3/4/2/7/1263427-green-bones-0-1000-0-1500-crop.jpg?v=343b39250e",

//     description:
//       "A soon-to-be released criminal and a corrections officer is still grieving over the death of his sister opposing the prisoner’s release.",

//     genre: ["Suspense, Drama"],

//     releaseDate: "2024-12-25",

//     rating: ["4.9"],

//     awards:
//       "Best Picture, Best Actor, Best Supporting Actor, Best Screenplay, Best Cinematography, Best Child Performer",

//     link: "https://www.youtube.com/watch?v=lYKdomzSCpg",
//   },

//   {
//     title: "Isang Himala",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/2/6/3/4/2/8/1263428-isang-himala-0-1000-0-1500-crop.jpg?v=e9a5daabd0",

//     description:
//       "Amid drought and famine in Cupang, a young woman named Elsa claims to have seen the Virgin Mary and been blessed with the ability to heal the sick. As people flock to witness her powers, the village becomes consumed by faith, prosperity, greed, and deceit. Is Elsa a true symbol of hope in a world desperate for salvation? “Isang Himala” is a rousing adaptation of “Himala” (1982), written by National Artist Ricky Lee.",

//     genre: ["Musical"],

//     releaseDate: "2024-12-25",

//     rating: ["7.4"],

//     awards:
//       "Best Supporting Actress, Best Original Theme Song, Best Musical Score",

//     link: "https://www.youtube.com/watch?v=r2c3Sm02-bQ",
//   },

//   {
//     title: "The Kingdom",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/2/6/5/9/8/6/1265986-the-kingdom-2024-1-0-1000-0-1500-crop.jpg?v=68c507067e",

//     description:
//       "Set in the contemporary era in an alternate version of the Philippines where the islands were never colonized, the Kingdom of Kalayaan sees a ruler’s favored child kidnapped, leading to a failed rescue and a deadly duel.",

//     genre: ["Action, Family, Drama"],

//     releaseDate: "2024-12-25",

//     rating: ["7.9"],

//     awards:
//       "Best Director, Best Production Design, Best Visual Effects, Gatpuno Antonio J. Villegas Cultural Award",

//     link: "https://www.youtube.com/watch?v=rl-KjeepAaM",
//   },

//   {
//     title: "Strange Frequencies: Taiwan Killer Hospital",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/2/6/7/2/6/8/1267268-strange-frequencies-0-1000-0-1500-crop.jpg?v=7931c7f033",

//     description:
//       "A team of adventurous celebrities filming in Taiwan’s infamous Xinglin Hospital, one of Southeast Asia’s most haunted locations, quickly descends into terror as they encounter escalating paranormal phenomena. As tensions rise and personalities clash, they become pawns of a malevolent entity, forcing them to make difficult choices and sacrifices to survive the horrifying ordeal.",

//     genre: ["Horror"],

//     releaseDate: "2024-12-25",

//     rating: ["7.9"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=9alAvn2eXM4",
//   },

//   {
//     title: "Espantaho",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/2/4/5/7/3/9/1245739-espantaho-0-1000-0-1500-crop.jpg?v=3f30de3e64",

//     description:
//       "During the nine days vigil (pasiyam) and wake (paglalamay) at the Lazatin-Henson-Katigbak Mansion, food and drinks are served. Narrative sequences from Monet and Rosa’s mourning of patriarch Pabling where a horrifying secrecy and an evil death plot surface, even during the funeral procession, carrying of the hearse and entombment in the Catholic cemetery.",

//     genre: ["Horror"],

//     releaseDate: "2024-12-25",

//     rating: ["5.7"],

//     awards: "Best Actress",

//     link: "https://www.youtube.com/watch?v=ZJ84Aug0pok",
//   },

//   {
//     title: "Hold Me Close",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/2/6/5/9/8/0/1265980-hold-me-close-0-1000-0-1500-crop.jpg?v=490c6026fb",

//     description:
//       "Hold on to Love this Christmas After seven years of traveling the world in search of a place to settle, Woody arrives in Japan. There, he meets Lynlyn, who has a unique ability: with just a touch, she can sense whether someone will bring her happiness or harm.",

//     genre: ["Romance"],

//     releaseDate: "2024-12-25",

//     rating: ["7.4"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=DP9JZeDlhpk",
//   },

//   {
//     title: "My Future You",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/2/6/7/2/8/2/1267282-my-future-you-0-1000-0-1500-crop.jpg?v=6146945b9d",

//     description:
//       "Karen and Lex meet on a dating app, only to discover they’re living fifteen years apart, connected by a comet. As they unravel the mystery of their unique situation, they work together to change the past and alter their fates.",

//     genre: ["Romantic comedy"],

//     releaseDate: "2024-12-25",

//     rating: ["8.3"],

//     awards: "Best Editing, Breakthrough Performance Award",

//     link: "https://www.youtube.com/watch?v=geZVIDif2Vc",
//   },

//   {
//     title: "Topakk",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/0/2/0/5/1/5/1020515-triggered-2023-0-1000-0-1500-crop.jpg?v=c368315908",

//     description:
//       "In a bid for redemption, an Ex-Special Forces security guard attempts to save the life of a woman who is being hunted by a corrupt police death squad working for a drug cartel.",

//     genre: ["Action, Thriller"],

//     releaseDate: "2024-12-25",

//     rating: ["N/A"],

//     awards: "Fernando Poe Jr. Memorial Award for Excellence, Best Float",

//     link: "https://www.youtube.com/watch?v=Brienotyyng",
//   },

//   {
//     title: "Uninvited",

//     poster:
//       "https://a.ltrbxd.com/resized/film-poster/1/2/6/5/9/9/1/1265991-uninvited-2024-0-1000-0-1500-crop.jpg?v=fbf3cbffdc",

//     description:
//       "Eva seeks revenge on billionaire Guilly for killing her daughter. Disguised, she attends his party with a vengeful plan.",

//     genre: ["Thriller"],

//     releaseDate: "2024-12-25",

//     rating: ["6.7"],

//     awards: ["None"],

//     link: "https://www.youtube.com/watch?v=sVDE75afqdQ",
//   },
// ];

// const seedData = async () => {
//   try {
//     await connectDB();

//     await movieSchema.insertMany(movies);
//     console.log("Database successfully seeded! 🌱");
//     process.exit(); // Exit process
//   } catch (err) {
//     console.error("Seeding error:", err);
//     process.exit(1);
//   }
// };

// seedData();
