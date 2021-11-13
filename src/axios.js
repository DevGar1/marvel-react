import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const ts = 5;
const apikey = process.env.REACT_APP_PUBLIC;
const private_key = process.env.REACT_APP_PRIVATE_KEY;
console.log(ts + private_key + apikey);
const hash = "4928838ee3d0444031cecc16ae6d6693";

const url = `http://gateway.marvel.com/v1/public`;
const marvelInstance = axios.create({
  baseURL: url,
  params: {
    ts,
    apikey,
    hash,
  },
});

const response = {
  offset: 0,
  limit: 20,
  total: 1559,
  count: 20,
  results: [
    {
      id: 1011334,
      name: "3-D Man",
      description: "",
      modified: "2014-04-29T14:18:17-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1011334",
      comics: {
        available: 12,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/21366",
            name: "Avengers: The Initiative (2007) #14",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/24571",
            name: "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/21546",
            name: "Avengers: The Initiative (2007) #15",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/21741",
            name: "Avengers: The Initiative (2007) #16",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/21975",
            name: "Avengers: The Initiative (2007) #17",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/22299",
            name: "Avengers: The Initiative (2007) #18",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/22300",
            name: "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/22506",
            name: "Avengers: The Initiative (2007) #19",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/8500",
            name: "Deadpool (1997) #44",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/10223",
            name: "Marvel Premiere (1972) #35",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/10224",
            name: "Marvel Premiere (1972) #36",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/10225",
            name: "Marvel Premiere (1972) #37",
          },
        ],
        returned: 12,
      },
      series: {
        available: 3,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1945",
            name: "Avengers: The Initiative (2007 - 2010)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2005",
            name: "Deadpool (1997 - 2002)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2045",
            name: "Marvel Premiere (1972 - 1981)",
          },
        ],
        returned: 3,
      },
      stories: {
        available: 21,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/19947",
            name: "Cover #19947",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/19948",
            name: "The 3-D Man!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/19949",
            name: "Cover #19949",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/19950",
            name: "The Devil's Music!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/19951",
            name: "Cover #19951",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/19952",
            name: "Code-Name:  The Cold Warrior!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/47184",
            name: "AVENGERS: THE INITIATIVE (2007) #14",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/47185",
            name: "Avengers: The Initiative (2007) #14 - Int",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/47498",
            name: "AVENGERS: THE INITIATIVE (2007) #15",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/47499",
            name: "Avengers: The Initiative (2007) #15 - Int",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/47792",
            name: "AVENGERS: THE INITIATIVE (2007) #16",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/47793",
            name: "Avengers: The Initiative (2007) #16 - Int",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/48361",
            name: "AVENGERS: THE INITIATIVE (2007) #17",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/48362",
            name: "Avengers: The Initiative (2007) #17 - Int",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/49103",
            name: "AVENGERS: THE INITIATIVE (2007) #18",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/49104",
            name: "Avengers: The Initiative (2007) #18 - Int",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/49106",
            name: "Avengers: The Initiative (2007) #18, Zombie Variant - Int",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/49888",
            name: "AVENGERS: THE INITIATIVE (2007) #19",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/49889",
            name: "Avengers: The Initiative (2007) #19 - Int",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/54371",
            name: "Avengers: The Initiative (2007) #14, Spotlight Variant - Int",
            type: "interiorStory",
          },
        ],
        returned: 20,
      },
      events: {
        available: 1,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/events",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/269",
            name: "Secret Invasion",
          },
        ],
        returned: 1,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1017100,
      name: "A-Bomb (HAS)",
      description:
        "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
      modified: "2013-09-18T15:54:04-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1017100",
      comics: {
        available: 4,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1017100/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/47176",
            name: "FREE COMIC BOOK DAY 2013 1 (2013) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/40632",
            name: "Hulk (2008) #53",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/40630",
            name: "Hulk (2008) #54",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/40628",
            name: "Hulk (2008) #55",
          },
        ],
        returned: 4,
      },
      series: {
        available: 2,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1017100/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/17765",
            name: "FREE COMIC BOOK DAY 2013 1 (2013)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3374",
            name: "Hulk (2008 - 2012)",
          },
        ],
        returned: 2,
      },
      stories: {
        available: 7,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1017100/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/92078",
            name: "Hulk (2008) #55",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/92079",
            name: "Interior #92079",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/92082",
            name: "Hulk (2008) #54",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/92083",
            name: "Interior #92083",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/92086",
            name: "Hulk (2008) #53",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/92087",
            name: "Interior #92087",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/105929",
            name: "cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1",
            type: "cover",
          },
        ],
        returned: 7,
      },
      events: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1017100/events",
        items: [],
        returned: 0,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1009144,
      name: "A.I.M.",
      description: "AIM is a terrorist organization bent on destroying the world.",
      modified: "2013-10-17T14:41:30-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1009144",
      comics: {
        available: 52,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009144/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/36763",
            name: "Ant-Man & the Wasp (2010) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17553",
            name: "Avengers (1998) #67",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/7340",
            name: "Avengers (1963) #87",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/4214",
            name: "Avengers and Power Pack Assemble! (2006) #2",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/63217",
            name: "Avengers and Power Pack (2017) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/63218",
            name: "Avengers and Power Pack (2017) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/63219",
            name: "Avengers and Power Pack (2017) #5",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/63220",
            name: "Avengers and Power Pack (2017) #6",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/64790",
            name: "Avengers by Brian Michael Bendis: The Complete Collection Vol. 2 (Trade Paperback)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/1170",
            name: "Avengers Vol. 2: Red Zone (Trade Paperback)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/1214",
            name: "Avengers Vol. II: Red Zone (Trade Paperback)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/12787",
            name: "Captain America (1998) #28",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/7513",
            name: "Captain America (1968) #132",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/7514",
            name: "Captain America (1968) #133",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/65466",
            name: "Captain America by Mark Waid, Ron Garney & Andy Kubert (Hardcover)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/20367",
            name: "Defenders (1972) #57",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/31068",
            name: "Incredible Hulks (2010) #606 (VARIANT)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/46168",
            name: "Indestructible Hulk (2012) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/43944",
            name: "Iron Man (2012) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/49865",
            name: "Iron Man (2012) #1",
          },
        ],
        returned: 20,
      },
      series: {
        available: 34,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009144/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/13082",
            name: "Ant-Man & the Wasp (2010 - 2011)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/354",
            name: "Avengers (1998 - 2004)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1991",
            name: "Avengers (1963 - 1996)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/23123",
            name: "Avengers and Power Pack (2017)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1046",
            name: "Avengers and Power Pack Assemble! (2006)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/23600",
            name: "Avengers by Brian Michael Bendis: The Complete Collection Vol. 2 (2017)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/227",
            name: "Avengers Vol. 2: Red Zone (2003)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/271",
            name: "Avengers Vol. II: Red Zone (2003)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1996",
            name: "Captain America (1968 - 1996)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1997",
            name: "Captain America (1998 - 2002)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/23810",
            name: "Captain America by Mark Waid, Ron Garney & Andy Kubert (2017)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3743",
            name: "Defenders (1972 - 1986)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/8842",
            name: "Incredible Hulks (2010 - 2011)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/16583",
            name: "Indestructible Hulk (2012 - 2014)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/16593",
            name: "Iron Man (2012 - 2014)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2029",
            name: "Iron Man (1968 - 1996)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/23915",
            name: "Iron Man Epic Collection: Doom (2018)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/9718",
            name: "Marvel Adventures Super Heroes (2010 - 2012)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/189",
            name: "Marvel Masterworks: Captain America Vol. 1 - 2nd Edition (2003)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1506",
            name: "MARVEL MASTERWORKS: CAPTAIN AMERICA VOL. 1 HC (2005)",
          },
        ],
        returned: 20,
      },
      stories: {
        available: 54,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009144/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/5800",
            name: "Avengers and Power Pack Assemble! (2006) #2",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/5801",
            name: "2 of 4 - 4XLS",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/10253",
            name: "When the Unliving Strike",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/10255",
            name: "Cover #10255",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/10256",
            name: "The Enemy Within!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/10259",
            name: "Death Before Dishonor!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/10261",
            name: "Cover #10261",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/10262",
            name: "The End of A.I.M.!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11921",
            name: "The Red Skull Lives!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11930",
            name: "He Who Holds the Cosmic Cube",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11936",
            name: "The Maddening Mystery of the Inconceivable Adaptoid!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11981",
            name: "If This Be... Modok",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11984",
            name: "A Time to Die -- A Time to Live!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11995",
            name: "At the Mercy of the Maggia",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/15243",
            name: "Look Homeward, Avenger",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/17518",
            name: "Captain America (1968) #132",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/17519",
            name: "The Fearful Secret of Bucky Barnes",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/17520",
            name: "Captain America (1968) #133",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/17521",
            name: "Madness In the Slums",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28233",
            name: "In Sin Airy X",
            type: "interiorStory",
          },
        ],
        returned: 20,
      },
      events: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009144/events",
        items: [],
        returned: 0,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/characters/77/aim.?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/A.I.M.?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1009144/aim.?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1010699,
      name: "Aaron Stack",
      description: "",
      modified: "1969-12-31T19:00:00-0500",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1010699",
      comics: {
        available: 14,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010699/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/40776",
            name: "Dark Avengers (2012) #177",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/40773",
            name: "Dark Avengers (2012) #179",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/40774",
            name: "Dark Avengers (2012) #180",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/40778",
            name: "Dark Avengers (2012) #181",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/40787",
            name: "Dark Avengers (2012) #182",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/40786",
            name: "Dark Avengers (2012) #183",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/38073",
            name: "Hulk (2008) #43",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/11910",
            name: "Universe X (2000) #6",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/11911",
            name: "Universe X (2000) #7",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/11912",
            name: "Universe X (2000) #8",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/11913",
            name: "Universe X (2000) #9",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/11903",
            name: "Universe X (2000) #10",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/11904",
            name: "Universe X (2000) #11",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/11905",
            name: "Universe X (2000) #12",
          },
        ],
        returned: 14,
      },
      series: {
        available: 3,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010699/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/789",
            name: "Dark Avengers (2012 - 2013)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3374",
            name: "Hulk (2008 - 2012)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2085",
            name: "Universe X (2000 - 2001)",
          },
        ],
        returned: 3,
      },
      stories: {
        available: 27,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010699/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/25634",
            name: "Universe X (2000) #10",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/25635",
            name: "Interior #25635",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/25637",
            name: "Universe X (2000) #12",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/25638",
            name: "Interior #25638",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/25647",
            name: "Universe X (2000) #6",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/25648",
            name: "Interior #25648",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/25649",
            name: "Universe X (2000) #7",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/25650",
            name: "Interior #25650",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/25651",
            name: "Universe X (2000) #8",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/25652",
            name: "Interior #25652",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/25653",
            name: "Universe X (2000) #9",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/25654",
            name: "Interior #25654",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/67100",
            name: "Universe X (2000) #11",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/89190",
            name: "Hulk (2008) #43",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/90002",
            name: "Interior #90002",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/92370",
            name: "Dark Avengers (2012) #179",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/92371",
            name: "Interior #92371",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/92372",
            name: "Dark Avengers (2012) #180",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/92373",
            name: "Interior #92373",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/92376",
            name: "Dark Avengers (2012) #177",
            type: "cover",
          },
        ],
        returned: 20,
      },
      events: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010699/events",
        items: [],
        returned: 0,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/characters/2809/aaron_stack?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1010699/aaron_stack?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1009146,
      name: "Abomination (Emil Blonsky)",
      description:
        "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
      modified: "2012-03-20T12:32:12-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1009146",
      comics: {
        available: 53,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009146/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17547",
            name: "Avengers (1998) #61",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17548",
            name: "Avengers (1998) #62",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/1098",
            name: "Avengers Vol. 1: World Trust (Trade Paperback)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/8557",
            name: "Earth X (1999) #7",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/4241",
            name: "EARTH X TPB [NEW PRINTING] (Trade Paperback)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/20863",
            name: "Hulk (2008) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/2499",
            name: "Hulk: Destruction (2005) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14424",
            name: "Hulk (1999) #24",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14425",
            name: "Hulk (1999) #25",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14428",
            name: "Hulk (1999) #28",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14450",
            name: "Hulk (1999) #50",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14451",
            name: "Hulk (1999) #51",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14453",
            name: "Hulk (1999) #53",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14454",
            name: "Hulk (1999) #54",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/8948",
            name: "Incredible Hulk (1962) #137",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/8982",
            name: "Incredible Hulk (1962) #171",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/9005",
            name: "Incredible Hulk (1962) #194",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/9006",
            name: "Incredible Hulk (1962) #195",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/9007",
            name: "Incredible Hulk (1962) #196",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/9011",
            name: "Incredible Hulk (1962) #200",
          },
        ],
        returned: 20,
      },
      series: {
        available: 26,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009146/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/354",
            name: "Avengers (1998 - 2004)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/158",
            name: "Avengers Vol. 1: World Trust (2003)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/378",
            name: "Earth X (1999 - 2000)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1806",
            name: "EARTH X TPB [NEW PRINTING] (2006)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/465",
            name: "Hulk (1999 - 2008)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3374",
            name: "Hulk (2008 - 2012)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/924",
            name: "Hulk: Destruction (2005)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2021",
            name: "Incredible Hulk (1962 - 1999)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2983",
            name: "Incredible Hulk Annual (1976 - 1994)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/22424",
            name: "Incredible Hulk Epic Collection: The Hulk Must Die (2017)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/212",
            name: "Incredible Hulk Vol. 4: Abominable (2003)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/244",
            name: "Incredible Hulk Vol. IV: Abominable (2003)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/8842",
            name: "Incredible Hulks (2010 - 2011)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2572",
            name: "Iron Man (1998 - 2004)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/977",
            name: "Irredeemable Ant-Man (2006 - 2007)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2423",
            name: "Irredeemable Ant-Man Vol. 1: Low-Life (2007)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3722",
            name: "Killraven (2002 - 2003)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2437",
            name: "KILLRAVEN PREMIERE HC (2007)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/21675",
            name: "Marvel Cinematic Universe Guidebook: The Avengers Initiative (2017)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/22327",
            name: "Marvel Masterworks: The Incredible Hulk Vol. 11 (2017)",
          },
        ],
        returned: 20,
      },
      stories: {
        available: 63,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009146/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/4946",
            name: "4 of 4 - 4XLS",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/5496",
            name: "Irredeemable Ant-Man (2006) #1",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/12370",
            name: "Cover #12370",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/12372",
            name: "Whosoever Harms the Hulk..!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18419",
            name: "[none]",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18420",
            name: "The Stars Mine Enemy",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18488",
            name: "Incredible Hulk (1962) #171",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18489",
            name: "Revenge",
            type: "",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18534",
            name: "Incredible Hulk (1962) #194",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18535",
            name: "The Day of the Locust!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18536",
            name: "Incredible Hulk (1962) #195",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18537",
            name: "Warfare In Wonderland!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18538",
            name: "Incredible Hulk (1962) #196",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18539",
            name: "The Abomination Proclamation!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18546",
            name: "Incredible Hulk (1962) #200",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18547",
            name: "An Intruder In the Mind!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18776",
            name: "Cover #18776",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18877",
            name: "Incredible Hulk (1962) #364",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18878",
            name: "Countdown Part 4: The Abomination",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18881",
            name: "Incredible Hulk (1962) #366",
            type: "cover",
          },
        ],
        returned: 20,
      },
      events: {
        available: 1,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009146/events",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/296",
            name: "Chaos War",
          },
        ],
        returned: 1,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/characters/81/abomination?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/Abomination?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1009146/abomination_emil_blonsky?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1016823,
      name: "Abomination (Ultimate)",
      description: "",
      modified: "2012-07-10T19:11:52-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1016823",
      comics: {
        available: 2,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1016823/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/40638",
            name: "Hulk (2008) #50",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/15717",
            name: "Ultimate X-Men (2001) #26",
          },
        ],
        returned: 2,
      },
      series: {
        available: 2,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1016823/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3374",
            name: "Hulk (2008 - 2012)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/474",
            name: "Ultimate X-Men (2001 - 2009)",
          },
        ],
        returned: 2,
      },
      stories: {
        available: 3,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1016823/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/31883",
            name: "Free Preview of THE INCREDIBLE HULK #50",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/92098",
            name: "Hulk (2008) #50",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/92099",
            name: "Interior #92099",
            type: "interiorStory",
          },
        ],
        returned: 3,
      },
      events: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1016823/events",
        items: [],
        returned: 0,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/characters/81/abomination?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1016823/abomination_ultimate?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1009148,
      name: "Absorbing Man",
      description: "",
      modified: "2013-10-24T14:32:08-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1009148",
      comics: {
        available: 96,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009148/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/43507",
            name: "A+X (2012) #8",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/7045",
            name: "Avengers (1963) #183",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/7046",
            name: "Avengers (1963) #184",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/7142",
            name: "Avengers (1963) #270",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/36481",
            name: "Avengers Academy (2010) #16",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/36480",
            name: "Avengers Academy (2010) #17",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/36479",
            name: "Avengers Academy (2010) #18",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/36484",
            name: "Avengers Academy (2010) #19",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17776",
            name: "Avengers Annual (1967) #20",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/63662",
            name: "Black Bolt (2017) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/64278",
            name: "Black Bolt (2017) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/66533",
            name: "Black Bolt (2017) #11",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/65327",
            name: "Black Bolt Vol. 1: Hard Time (Trade Paperback)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/12783",
            name: "Captain America (1998) #24",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/20427",
            name: "Dazzler (1981) #18",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/20428",
            name: "Dazzler (1981) #19",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/8499",
            name: "Deadpool (1997) #43",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/15541",
            name: "Fantastic Four (1998) #22",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/13151",
            name: "Fantastic Four (1961) #330",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/41433",
            name: "Fear Itself (2010) #2 (3rd Printing Variant)",
          },
        ],
        returned: 20,
      },
      series: {
        available: 48,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009148/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/16450",
            name: "A+X (2012 - 2014)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1991",
            name: "Avengers (1963 - 1996)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/9086",
            name: "Avengers Academy (2010 - 2012)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1988",
            name: "Avengers Annual (1967 - 1994)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/23121",
            name: "Black Bolt (2017 - 2018)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/23778",
            name: "Black Bolt Vol. 1: Hard Time (2017)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1997",
            name: "Captain America (1998 - 2002)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3745",
            name: "Dazzler (1981 - 1986)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2005",
            name: "Deadpool (1997 - 2002)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2121",
            name: "Fantastic Four (1961 - 1998)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/421",
            name: "Fantastic Four (1998 - 2012)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/13691",
            name: "Fear Itself (2010 - 2011)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/13857",
            name: "Fear Itself: Fellowship of Fear (2011)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/13827",
            name: "Fear Itself: The Worthy (2011)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/31372",
            name: "Gamma Flight (2021)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/20084",
            name: "Heroes for Hire (1997 - 1999)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/465",
            name: "Hulk (1999 - 2008)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/20552",
            name: "Illuminati (2015 - 2016)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/24278",
            name: "Immortal Hulk (2018 - Present)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/24891",
            name: "Immortal Hulk Vol. 2: The Green Door (2019)",
          },
        ],
        returned: 20,
      },
      stories: {
        available: 109,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009148/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/4988",
            name: "1 of 1",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/7866",
            name: "Punisher War Journal (2006) #4",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/10997",
            name: "Journey Into Mystery (1952) #114",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/10998",
            name: "The Stronger I Am, the Sooner I Die",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11000",
            name: "Journey Into Mystery (1952) #115",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11001",
            name: "The Vengeance of the Thunder God",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11022",
            name: "Journey Into Mystery (1952) #120",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11023",
            name: "With My Hammer In Hand",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11025",
            name: "Journey Into Mystery (1952) #121",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11026",
            name: "The Power!  The Passion!  The Pride!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11028",
            name: "Journey Into Mystery (1952) #122",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11029",
            name: "Where Mortals Fear To Tread!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11031",
            name: "Journey Into Mystery (1952) #123",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/11032",
            name: "While a Universe Trembles",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/12951",
            name: "Fantastic Four (1961) #330",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/12952",
            name: "Good Dreams!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/14628",
            name: "Avengers (1963) #183",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/14630",
            name: "Avengers (1963) #184",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/14823",
            name: "Avengers (1963) #270",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/16688",
            name: "Thor (1966) #206",
            type: "cover",
          },
        ],
        returned: 20,
      },
      events: {
        available: 4,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009148/events",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/238",
            name: "Civil War",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/302",
            name: "Fear Itself",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/270",
            name: "Secret Wars",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/273",
            name: "Siege",
          },
        ],
        returned: 4,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/characters/84/absorbing_man?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/Absorbing_Man?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1009148/absorbing_man?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1009149,
      name: "Abyss",
      description: "",
      modified: "2014-04-29T14:10:43-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1009149",
      comics: {
        available: 8,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009149/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/13943",
            name: "Uncanny X-Men (1981) #402",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/13945",
            name: "Uncanny X-Men (1981) #404",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/13946",
            name: "Uncanny X-Men (1981) #405",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/13947",
            name: "Uncanny X-Men (1981) #406",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/13970",
            name: "Uncanny X-Men (1981) #429",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/13972",
            name: "Uncanny X-Men (1981) #431",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/12386",
            name: "X-Men: Alpha (1995) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/2539",
            name: "X-Men: The Complete Age of Apocalypse Epic Book 2 (Trade Paperback)",
          },
        ],
        returned: 8,
      },
      series: {
        available: 3,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009149/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2258",
            name: "Uncanny X-Men (1981 - 2011)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2104",
            name: "X-Men: Alpha (1995)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1583",
            name: "X-Men: The Complete Age of Apocalypse Epic Book 2 (2005)",
          },
        ],
        returned: 3,
      },
      stories: {
        available: 8,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009149/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/26281",
            name: "A Beginning",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28352",
            name: "Utility of Myth",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28356",
            name: "Army Ants",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28358",
            name: "Ballroom Blitzkrieg",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28360",
            name: "Staring Contests are for Suckers",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28407",
            name: "The Draco Part One: Sins of the Father",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28411",
            name: "The Draco Part Three",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28413",
            name: "The Draco Part Four",
            type: "interiorStory",
          },
        ],
        returned: 8,
      },
      events: {
        available: 1,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009149/events",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/227",
            name: "Age of Apocalypse",
          },
        ],
        returned: 1,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/comics/characters/1009149/abyss?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/Abyss_(alien)?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1009149/abyss?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1010903,
      name: "Abyss (Age of Apocalypse)",
      description: "",
      modified: "1969-12-31T19:00:00-0500",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1010903",
      comics: {
        available: 3,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010903/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/18099",
            name: "Weapon X (1995) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/12386",
            name: "X-Men: Alpha (1995) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/2539",
            name: "X-Men: The Complete Age of Apocalypse Epic Book 2 (Trade Paperback)",
          },
        ],
        returned: 3,
      },
      series: {
        available: 3,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010903/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3635",
            name: "Weapon X (1995)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2104",
            name: "X-Men: Alpha (1995)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1583",
            name: "X-Men: The Complete Age of Apocalypse Epic Book 2 (2005)",
          },
        ],
        returned: 3,
      },
      stories: {
        available: 2,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010903/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/26280",
            name: "X-Men: Alpha (1994) #1",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/38448",
            name: "X-Facts",
            type: "",
          },
        ],
        returned: 2,
      },
      events: {
        available: 1,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010903/events",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/227",
            name: "Age of Apocalypse",
          },
        ],
        returned: 1,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/characters/85/abyss?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/Abyss_(Age_of_Apocalypse)?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1010903/abyss_age_of_apocalypse?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1011266,
      name: "Adam Destine",
      description: "",
      modified: "1969-12-31T19:00:00-0500",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1011266",
      comics: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011266/comics",
        items: [],
        returned: 0,
      },
      series: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011266/series",
        items: [],
        returned: 0,
      },
      stories: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011266/stories",
        items: [],
        returned: 0,
      },
      events: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011266/events",
        items: [],
        returned: 0,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/characters/2902/adam_destine?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/Destine,_Adam?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1011266/adam_destine?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1010354,
      name: "Adam Warlock",
      description:
        "Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.",
      modified: "2013-08-07T13:49:06-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1010354",
      comics: {
        available: 188,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010354/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/62151",
            name: "All-New Guardians of the Galaxy Vol. 3: Infinity Quest (Trade Paperback)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17271",
            name: "Annihilation: Conquest (2007) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17405",
            name: "Annihilation: Conquest (2007) #2",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17645",
            name: "Annihilation: Conquest (2007) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/20686",
            name: "Annihilation: Conquest (2007) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/20885",
            name: "Annihilation: Conquest (2007) #5",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/21016",
            name: "Annihilation: Conquest (2007) #6",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/12412",
            name: "Avengers Forever (1998) #9",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/1033",
            name: "Avengers Legends Vol. I: Avengers Forever (Trade Paperback)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/20731",
            name: "CLANDESTINE CLASSIC PREMIERE HC (Hardcover)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/20187",
            name: "Doctor Strange, Sorcerer Supreme (1988) #27",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/20193",
            name: "Doctor Strange, Sorcerer Supreme (1988) #32",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/20197",
            name: "Doctor Strange, Sorcerer Supreme (1988) #36",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/8552",
            name: "Earth X (1999) #2",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/8550",
            name: "Earth X (1999) #11",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/4241",
            name: "EARTH X TPB [NEW PRINTING] (Trade Paperback)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/12975",
            name: "Fantastic Four (1961) #172",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/13195",
            name: "Fantastic Four (1961) #370",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/25305",
            name: "Guardians of the Galaxy (2008) #17",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/65547",
            name: "All-New Guardians of the Galaxy (2017) #150",
          },
        ],
        returned: 20,
      },
      series: {
        available: 82,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010354/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/23058",
            name: "All-New Guardians of the Galaxy (2017)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/22778",
            name: "All-New Guardians of the Galaxy Vol. 3: Infinity Quest (2018)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3061",
            name: "Annihilation: Conquest (2007)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2111",
            name: "Avengers Forever (1998 - 1999)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/93",
            name: "Avengers Legends Vol. I: Avengers Forever (2002)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3874",
            name: "CLANDESTINE CLASSIC PREMIERE HC (2008)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3741",
            name: "Doctor Strange, Sorcerer Supreme (1988 - 1996)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/378",
            name: "Earth X (1999 - 2000)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1806",
            name: "EARTH X TPB [NEW PRINTING] (2006)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2121",
            name: "Fantastic Four (1961 - 1998)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/4885",
            name: "Guardians of the Galaxy (2008 - 2010)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/27554",
            name: "Guardians Of The Galaxy Annual (2019)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/26496",
            name: "Guardians Of The Galaxy Vol. 2: Faithless (2020)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/22422",
            name: "GUARDIANS OF THE GALAXY: ROAD TO ANNIHILATION VOL. 2 TPB (2017)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2021",
            name: "Incredible Hulk (1962 - 1999)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2983",
            name: "Incredible Hulk Annual (1976 - 1994)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/26307",
            name: "Infinity By Starlin & Hickman (2019)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/24050",
            name: "Infinity Countdown (2018)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/24300",
            name: "Infinity Countdown Prime (2018)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/23991",
            name: "Infinity Countdown: Adam Warlock (2018)",
          },
        ],
        returned: 20,
      },
      stories: {
        available: 217,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010354/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/1412",
            name: "Cover #1412",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/1602",
            name: "Cover #1602",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/1800",
            name: "Cover #1800",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/1842",
            name: "Cover #1842",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/3758",
            name: "WARLOCK (2004) #3",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/3760",
            name: "WARLOCK (2004) #1",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/3762",
            name: "WARLOCK (2004) #2",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/3764",
            name: "WARLOCK (2004) #4",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/12568",
            name: "Fantastic Four (1961) #172",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/12569",
            name: "Cry, the Bedeviled Planet!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/13121",
            name: "Forever Evil",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18500",
            name: "Incredible Hulk (1962) #177",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18501",
            name: "Peril of the Paired Planets",
            type: "",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/18503",
            name: "Triumph On Terra-Two",
            type: "",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/19847",
            name: "Cover #19847",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/19848",
            name: "Performance",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/19859",
            name: "Days of Future Present Part 4",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/19860",
            name: "You Must Remember This",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/19883",
            name: "The Adventures of Lockheed the Space Dragon and His Pet Girl, Kitty",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/19884",
            name: "The Saga of Storm: Goddess of Thunder",
            type: "cover",
          },
        ],
        returned: 20,
      },
      events: {
        available: 8,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010354/events",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/293",
            name: "Annihilation: Conquest",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/233",
            name: "Atlantis Attacks",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/235",
            name: "Blood and Thunder",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/240",
            name: "Days of Future Present",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/29",
            name: "Infinity War",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/263",
            name: "Mutant Massacre",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/271",
            name: "Secret Wars II",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/280",
            name: "X-Tinction Agenda",
          },
        ],
        returned: 8,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/comics/characters/1010354/adam_warlock?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/Warlock,_Adam?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1010354/adam_warlock?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1010846,
      name: "Aegis (Trey Rollins)",
      description: "",
      modified: "1969-12-31T19:00:00-0500",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d",
        extension: "gif",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1010846",
      comics: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010846/comics",
        items: [],
        returned: 0,
      },
      series: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010846/series",
        items: [],
        returned: 0,
      },
      stories: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010846/stories",
        items: [],
        returned: 0,
      },
      events: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1010846/events",
        items: [],
        returned: 0,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/characters/95/aegis?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/Aegis_%28Trey_Rollins%29?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1010846/aegis_trey_rollins?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1017851,
      name: "Aero (Aero)",
      description: "",
      modified: "2021-08-27T17:52:34-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1017851",
      comics: {
        available: 23,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1017851/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/76349",
            name: "Aero (2019) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/76350",
            name: "Aero (2019) #2",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/76351",
            name: "Aero (2019) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/76352",
            name: "Aero (2019) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/76353",
            name: "Aero (2019) #5",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/76354",
            name: "Aero (2019) #6",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/76355",
            name: "Aero (2019) #7",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/76356",
            name: "Aero (2019) #8",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/76357",
            name: "Aero (2019) #9",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/76358",
            name: "Aero (2019) #10",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/76359",
            name: "Aero (2019) #11",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/76360",
            name: "Aero (2019) #12",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/77001",
            name: "Agents of Atlas (2019) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/77003",
            name: "Agents of Atlas (2019) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/77005",
            name: "Agents of Atlas (2019) #5",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/83989",
            name: "Atlantis Attacks (2020) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/83993",
            name: "Atlantis Attacks (2020) #2",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/83994",
            name: "Atlantis Attacks (2020) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/83995",
            name: "Atlantis Attacks (2020) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/83996",
            name: "Atlantis Attacks (2020) #5",
          },
        ],
        returned: 20,
      },
      series: {
        available: 5,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1017851/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/27392",
            name: "Aero (2019 - 2020)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/27624",
            name: "Agents of Atlas (2019)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/29600",
            name: "Atlantis Attacks (2020)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/31376",
            name: "King In Black: Black Knight (2021)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/28381",
            name: "The Marvels (2021 - Present)",
          },
        ],
        returned: 5,
      },
      stories: {
        available: 23,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1017851/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/169570",
            name: "cover from Aero (2019) #1",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/169572",
            name: "cover from Aero (2019) #2",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/169574",
            name: "cover from Aero (2019) #3",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/169576",
            name: "cover from Aero (2019) #4",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/169578",
            name: "cover from Aero (2019) #5",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/169580",
            name: "cover from Aero (2019) #6",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/169582",
            name: "cover from Aero (2019) #7",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/169584",
            name: "cover from Aero (2019) #8",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/169586",
            name: "cover from Aero (2019) #9",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/169588",
            name: "cover from Aero (2019) #10",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/169590",
            name: "cover from Aero (2019) #11",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/169592",
            name: "cover from Aero (2019) #12",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/170874",
            name: "cover from New Agents of Atlas (2019) #1",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/170878",
            name: "cover from New Agents of Atlas (2019) #3",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/170882",
            name: "cover from New Agents of Atlas (2019) #5",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/178282",
            name: "cover from The Marvels (2029) #2",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/178288",
            name: "cover from The Marvels (2029) #4",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/185766",
            name: "cover from Agents of Atlas: Atlantis Attacks (2020) #1",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/185774",
            name: "cover from Agents of Atlas: Atlantis Attacks (2020) #2",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/185776",
            name: "cover from Agents of Atlas: Atlantis Attacks (2020) #3",
            type: "cover",
          },
        ],
        returned: 20,
      },
      events: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1017851/events",
        items: [],
        returned: 0,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/comics/characters/1017851/aero_aero?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1017851/aero_aero?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1012717,
      name: "Agatha Harkness",
      description: "",
      modified: "2021-08-06T11:30:56-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/a0/4ce5a9bf70e19",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1012717",
      comics: {
        available: 19,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1012717/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17751",
            name: "Avengers (1996) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17756",
            name: "Avengers (1996) #2",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17757",
            name: "Avengers (1996) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17758",
            name: "Avengers (1996) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17762",
            name: "Avengers (1996) #8",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/21358",
            name: "Avengers Fairy Tales (2008) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/77235",
            name: "Captain America (2018) #19",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/13304",
            name: "Fantastic Four (1961) #94",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/4203",
            name: "Marvel Masterworks: The Fantastic Four Vol.10 (Hardcover)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/54974",
            name: "Scarlet Witch (1994) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/57094",
            name: "Scarlet Witch (2015) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/54977",
            name: "Scarlet Witch (1994) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/54978",
            name: "Scarlet Witch (1994) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/60028",
            name: "Scarlet Witch (2015) #13",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/21182",
            name: "Ultimate Fantastic Four (2003) #54",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/21332",
            name: "Ultimate Fantastic Four (2003) #55",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/21510",
            name: "Ultimate Fantastic Four (2003) #56",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/18460",
            name: "Vision and the Scarlet Witch (1985) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/18458",
            name: "Vision and the Scarlet Witch (1985) #12",
          },
        ],
        returned: 19,
      },
      series: {
        available: 9,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1012717/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3621",
            name: "Avengers (1996 - 1997)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3971",
            name: "Avengers Fairy Tales (2008)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/24503",
            name: "Captain America (2018 - Present)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2121",
            name: "Fantastic Four (1961 - 1998)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1693",
            name: "Marvel Masterworks: The Fantastic Four Vol.10 (2006)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/20854",
            name: "Scarlet Witch (2015 - 2017)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/20338",
            name: "Scarlet Witch (1994)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/702",
            name: "Ultimate Fantastic Four (2003 - 2009)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3655",
            name: "Vision and the Scarlet Witch (1985 - 1986)",
          },
        ],
        returned: 9,
      },
      stories: {
        available: 23,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1012717/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/13503",
            name: "The Return of the Frightful Four",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37673",
            name: "Avengers (1996) #1",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37688",
            name: "Avengers (1996) #2",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37690",
            name: "Avengers (1996) #3",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37693",
            name: "Avengers (1996) #4",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37701",
            name: "Avengers (1996) #8",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/39320",
            name: "VISION AND THE SCARLET WITCH (1985) #12",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/39325",
            name: "Ancestors",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/46790",
            name: "Ultimate Fantastic Four (2003) #54",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/46791",
            name: "Namor War 1 of 4",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/47112",
            name: "Ultimate Fantastic Four (2003) #55",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/47113",
            name: "Namor War 2 of 4",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/47169",
            name: "Avengers Fairy Tales (2008) #4",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/47170",
            name: "The Wizard of Oz",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/47425",
            name: "Ultimate Fantastic Four (2003) #56",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/47426",
            name: "3 of 4 - Salem Seven",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/125005",
            name: "cover from Scarlet Witch (2016) #1",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/130587",
            name: "cover from Scarlet Witch (2015) #13",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/135317",
            name: "interior to Scarlet Witch (1994) #1",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/135321",
            name: "interior to Scarlet Witch (1994) #3",
            type: "interiorStory",
          },
        ],
        returned: 20,
      },
      events: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1012717/events",
        items: [],
        returned: 0,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/comics/characters/1012717/agatha_harkness?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/Agatha%20Harkness?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1012717/agatha_harkness?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1011297,
      name: "Agent Brand",
      description: "",
      modified: "2013-10-24T13:09:30-0400",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1011297",
      comics: {
        available: 25,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011297/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/6120",
            name: "Astonishing X-Men (2004) #21",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/6309",
            name: "Astonishing X-Men (2004) #22",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/16119",
            name: "Astonishing X-Men (2004) #23",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17353",
            name: "Astonishing X-Men (2004) #24",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/24503",
            name: "Astonishing X-Men (2004) #32",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/24504",
            name: "Astonishing X-Men (2004) #33",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/38318",
            name: "Astonishing X-Men (2004) #38",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/38319",
            name: "Astonishing X-Men (2004) #40",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/40024",
            name: "Astonishing X-Men (2004) #40 (I Am Captain America Variant)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/45950",
            name: "Cable and X-Force (2012) #8",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/39890",
            name: "Heralds (Trade Paperback)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/90340",
            name: "S.W.O.R.D. (2020) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/90341",
            name: "S.W.O.R.D. (2020) #2",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/26232",
            name: "S.W.O.R.D. (2009) #2",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/90342",
            name: "S.W.O.R.D. (2020) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/26233",
            name: "S.W.O.R.D. (2009) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/90343",
            name: "S.W.O.R.D. (2020) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/26234",
            name: "S.W.O.R.D. (2009) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/90344",
            name: "S.W.O.R.D. (2020) #5",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/30518",
            name: "S.W.O.R.D. (2009) #5",
          },
        ],
        returned: 20,
      },
      series: {
        available: 6,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011297/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/744",
            name: "Astonishing X-Men (2004 - 2013)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/16907",
            name: "Cable and X-Force (2012 - 2014)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/13065",
            name: "Heralds (2010)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/8233",
            name: "S.W.O.R.D. (2009 - 2010)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/31083",
            name: "S.W.O.R.D. (2020 - Present)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/22551",
            name: "The Mighty Captain Marvel (2017 - 2018)",
          },
        ],
        returned: 6,
      },
      stories: {
        available: 29,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011297/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/3353",
            name: "Interior #3353",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/7670",
            name: "ASTONISHING X-MEN (2004) #21",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/8144",
            name: "ASTONISHING X-MEN (2004) #22",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/32919",
            name: "ASTONISHING X-MEN (2004) #23",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/36374",
            name: "ASTONISHING X-MEN (2004) #24",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/54039",
            name: "ASTONISHING X-MEN (2004) #32",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/54041",
            name: "ASTONISHING X-MEN (2004) #33",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/57763",
            name: "S.W.O.R.D. (2009) #2",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/57765",
            name: "S.W.O.R.D. (2009) #3",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/57767",
            name: "S.W.O.R.D. (2009) #4",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/69862",
            name: "S.W.O.R.D. (2009) #5",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/89830",
            name: "ASTONISHING X-MEN (2004) #38",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/89900",
            name: "Astonishing X-Men (2004) #38",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/90548",
            name: "Heralds TPB",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/90819",
            name: "Interior #90819",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/90853",
            name: " Interior  Astonishing X-Men (2004) #40",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/90944",
            name: "ASTONISHING X-MEN (2004) #40",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/103418",
            name: "Cable and X-Force (2012) #8",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/103419",
            name: "story from Cable and X-Force (2012) #8",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/133289",
            name: "cover from Captain Marvel (2016) #5",
            type: "cover",
          },
        ],
        returned: 20,
      },
      events: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011297/events",
        items: [],
        returned: 0,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/characters/100/agent_brand?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/Agent_Brand?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1011297/agent_brand?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1011031,
      name: "Agent X (Nijo)",
      description:
        "Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the Four Winds crime family, which included Nijo's brother.",
      modified: "1969-12-31T19:00:00-0500",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1011031",
      comics: {
        available: 18,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011031/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17702",
            name: "Agent X (2002) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17709",
            name: "Agent X (2002) #2",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17710",
            name: "Agent X (2002) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17711",
            name: "Agent X (2002) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17712",
            name: "Agent X (2002) #5",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17713",
            name: "Agent X (2002) #6",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17714",
            name: "Agent X (2002) #7",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17715",
            name: "Agent X (2002) #8",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17716",
            name: "Agent X (2002) #9",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17703",
            name: "Agent X (2002) #10",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17704",
            name: "Agent X (2002) #11",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17705",
            name: "Agent X (2002) #12",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17706",
            name: "Agent X (2002) #13",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/17707",
            name: "Agent X (2002) #14",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/394",
            name: "Agent X (2002) #15",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/1649",
            name: "Cable & Deadpool (2004) #12",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/21845",
            name: "Cable & Deadpool (2004) #46 (Zombie Variant)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/5761",
            name: "Cable & Deadpool Vol. 2: The Burnt Offering (Trade Paperback)",
          },
        ],
        returned: 18,
      },
      series: {
        available: 3,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011031/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/459",
            name: "Agent X (2002 - 2004)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/693",
            name: "Cable & Deadpool (2004 - 2008)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1338",
            name: "Cable & Deadpool Vol. 2: The Burnt Offering (2007)",
          },
        ],
        returned: 3,
      },
      stories: {
        available: 23,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011031/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/1135",
            name: "AGENT X (2002) #15",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/2484",
            name: "CABLE & DEADPOOL (2004) #12",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37514",
            name: "AGENT X (2002) #1",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37515",
            name: "Dead Man's Switch Part One",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37516",
            name: "AGENT X (2002) #10",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37518",
            name: "AGENT X (2002) #11",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37521",
            name: "AGENT X (2002) #13",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37523",
            name: "AGENT X (2002) #14",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37525",
            name: "AGENT X (2002) #2",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37526",
            name: "Dead Man's Switch Part Two",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37527",
            name: "AGENT X (2002) #3",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37528",
            name: "Dead Man's Switch Part Three",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37529",
            name: "AGENT X (2002) #4",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37530",
            name: "Dead Man's Switch Part Four",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37531",
            name: "AGENT X (2002) #5",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37532",
            name: "Dead Man's Switch Part Five",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37533",
            name: "AGENT X (2002) #6",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37534",
            name: "Dead Man's Switch Part Six",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/37535",
            name: "AGENT X (2002) #7",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/67703",
            name: "AGENT X (2002) #12",
            type: "cover",
          },
        ],
        returned: 20,
      },
      events: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011031/events",
        items: [],
        returned: 0,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/characters/101/agent_x?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/Agent_X_(Nijo)?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1011031/agent_x_nijo?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1009150,
      name: "Agent Zero",
      description: "",
      modified: "1969-12-31T19:00:00-0500",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1009150",
      comics: {
        available: 28,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009150/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/18082",
            name: "Weapon X (2002) #2",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/18092",
            name: "Weapon X (2002) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/18074",
            name: "Weapon X (2002) #12",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/246",
            name: "Weapon X (2002) #13",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/2204",
            name: "Weapon X: Days of Future Now (2005) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/2324",
            name: "Weapon X: Days of Future Now (2005) #2",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/2438",
            name: "Weapon X: Days of Future Now (2005) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/2439",
            name: "Weapon X: Days of Future Now (2005) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/3016",
            name: "Weapon X: Days of Future Now (2005) #5",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/3357",
            name: "Weapon X: Days of Future Now (Trade Paperback)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/18408",
            name: "Weapon X: The Draft – Agent Zero (2002) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14182",
            name: "Wolverine (1988) #60",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14183",
            name: "Wolverine (1988) #61",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14184",
            name: "Wolverine (1988) #62",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14185",
            name: "Wolverine (1988) #63",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14186",
            name: "Wolverine (1988) #64",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14189",
            name: "Wolverine (1988) #67",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14190",
            name: "Wolverine (1988) #68",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14211",
            name: "Wolverine (1988) #87",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/14107",
            name: "Wolverine (1988) #163",
          },
        ],
        returned: 20,
      },
      series: {
        available: 9,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009150/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/543",
            name: "Weapon X (2002 - 2004)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1478",
            name: "Weapon X: Days of Future Now (2006)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/869",
            name: "Weapon X: Days of Future Now (2005)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3649",
            name: "Weapon X: The Draft – Agent Zero (2002)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2262",
            name: "Wolverine (1988 - 2003)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/84",
            name: "WOLVERINE/DEADPOOL: WEAPON X TPB (1999)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3643",
            name: "X-Man (1995 - 2000)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/2265",
            name: "X-Men (1991 - 2001)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/3637",
            name: "X-Men Unlimited (1993 - 2003)",
          },
        ],
        returned: 9,
      },
      stories: {
        available: 30,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009150/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/1131",
            name: "WEAPON X (2002) #13",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/4603",
            name: "1 of 5 - 5XLS",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/4605",
            name: "2 of 5 - 5XLS",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/4606",
            name: "3 of 5 - 5XLS",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/4608",
            name: "4 of 5 - 5XLS",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/4610",
            name: "5 of 5 - 5XLS",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28706",
            name: "The Hunted Part 2",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28712",
            name: "The Hunted Part 5",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28738",
            name: "The Logan Files Epilogue",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28881",
            name: "Counting Coup",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28883",
            name: "Nightmare Quest!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28885",
            name: "Reunion!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28887",
            name: "Bastions of Glory!",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28889",
            name: "What Goes Around...",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28895",
            name: "Valley O' Death",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28897",
            name: "Epsilon Red",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/28941",
            name: "Showdown In Lowtown",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/29125",
            name: "Last Stand",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/29139",
            name: "Over...Again",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/38511",
            name: "Second Contact",
            type: "interiorStory",
          },
        ],
        returned: 20,
      },
      events: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1009150/events",
        items: [],
        returned: 0,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/characters/102/agent_zero?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/Agent_Zero?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1009150/agent_zero?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1011198,
      name: "Agents of Atlas",
      description: "",
      modified: "2016-02-03T10:25:22-0500",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1011198",
      comics: {
        available: 45,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011198/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/23659",
            name: "Agents of Atlas (2009) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/4801",
            name: "Agents of Atlas (2006) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/77001",
            name: "Agents of Atlas (2019) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/23660",
            name: "Agents of Atlas (2009) #1 (50/50 COVER)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/5089",
            name: "Agents of Atlas (2006) #2",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/23825",
            name: "Agents of Atlas (2009) #2",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/27402",
            name: "Agents of Atlas (2009) #2 (BACHALO 2ND PRINTING VARIANT)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/23824",
            name: "Agents of Atlas (2009) #2 (MCGUINNESS VARIANT)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/5241",
            name: "Agents of Atlas (2006) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/24015",
            name: "Agents of Atlas (2009) #3",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/24016",
            name: "Agents of Atlas (2009) #3 (MCGUINNESS VARIANT)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/24017",
            name: "Agents of Atlas (2009) #3 (Wolverine Art Appreciation Variant)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/5404",
            name: "Agents of Atlas (2006) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/24219",
            name: "Agents of Atlas (2009) #4",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/24221",
            name: "Agents of Atlas (2009) #5",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/5665",
            name: "Agents of Atlas (2006) #5",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/24222",
            name: "Agents of Atlas (2009) #5 (MCGUINNESS VARIANT)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/24360",
            name: "Agents of Atlas (2009) #6",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/5842",
            name: "Agents of Atlas (2006) #6",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/24361",
            name: "Agents of Atlas (2009) #7",
          },
        ],
        returned: 20,
      },
      series: {
        available: 13,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011198/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1097",
            name: "Agents of Atlas (2006 - 2007)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/6807",
            name: "Agents of Atlas (2009)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/27624",
            name: "Agents of Atlas (2019)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1980",
            name: "AGENTS OF ATLAS PREMIERE HC (2007)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/24134",
            name: "Agents of Atlas: The Complete Collection Vol. 1 (2018)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/29600",
            name: "Atlantis Attacks (2020)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/9782",
            name: "Atlas (2010)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/9181",
            name: "Avengers Vs. Atlas (2010)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/6415",
            name: "Dark Reign: New Nation (2008)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/27620",
            name: "Incoming! (2019)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/27505",
            name: "War of the Realms: New Agents of Atlas (2019)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/27374",
            name: "War Of The Realms: New Agents Of Atlas (2019)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/22365",
            name: "Wolverine: Prehistory (2017)",
          },
        ],
        returned: 13,
      },
      stories: {
        available: 52,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011198/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/6008",
            name: "1 of 6 - 6 XLS-",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/6009",
            name: "1 of 6 - 6 XLS-",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/6010",
            name: "2 of 6 - 6 XLS -",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/6011",
            name: "2 of 6 - 6 XLS -",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/6012",
            name: "3 of 6 - 6 XLS -",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/6013",
            name: "3 of 6 - 6 XLS -",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/6014",
            name: "4 of 6 - 6 XLS -",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/6015",
            name: "4 of 6 - 6 XLS -",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/6016",
            name: "5 of 6 - 6 XLS -",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/6017",
            name: "5 of 6 - 6 XLS -",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/6018",
            name: "5 of 6 - Story A - 6XLS",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/6019",
            name: "5 of 6 - Story A - 6XLS",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/51050",
            name: "1 of 1",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/52393",
            name: "1 of 3",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/52395",
            name: "1 of 3",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/52861",
            name: "2 of 3",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/52863",
            name: "2 of 3",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/53263",
            name: "3 of 3",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/53265",
            name: "3 of 3",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/53266",
            name: "3 of 3",
            type: "interiorStory",
          },
        ],
        returned: 20,
      },
      events: {
        available: 1,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011198/events",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/318",
            name: "Dark Reign",
          },
        ],
        returned: 1,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/comics/characters/1011198/agents_of_atlas?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/Agents_of_Atlas?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1011198/agents_of_atlas?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1011175,
      name: "Aginar",
      description: "",
      modified: "1969-12-31T19:00:00-0500",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1011175",
      comics: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011175/comics",
        items: [],
        returned: 0,
      },
      series: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011175/series",
        items: [],
        returned: 0,
      },
      stories: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011175/stories",
        items: [],
        returned: 0,
      },
      events: {
        available: 0,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011175/events",
        items: [],
        returned: 0,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/characters/105/aginar?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/Aginar?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1011175/aginar?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
    {
      id: 1011136,
      name: "Air-Walker (Gabriel Lan)",
      description: "",
      modified: "1969-12-31T19:00:00-0500",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg",
      },
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1011136",
      comics: {
        available: 4,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011136/comics",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/4108",
            name: "Annihilation: Silver Surfer (2006) #1",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/5589",
            name: "Heroes Reborn: Iron Man (Trade Paperback)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/16330",
            name: "Iron Man (1996) #11",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/comics/16331",
            name: "Iron Man (1996) #12",
          },
        ],
        returned: 4,
      },
      series: {
        available: 3,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011136/series",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1078",
            name: "Annihilation: Silver Surfer (2006)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/1814",
            name: "Heroes Reborn: Iron Man (2006)",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/series/13577",
            name: "Iron Man (1996 - 1998)",
          },
        ],
        returned: 3,
      },
      stories: {
        available: 3,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011136/stories",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/5925",
            name: "Annihilation: Silver Surfer (2006) #1",
            type: "cover",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/34082",
            name: "Magical Mystery Tour",
            type: "interiorStory",
          },
          {
            resourceURI: "http://gateway.marvel.com/v1/public/stories/34085",
            name: "Matters of the Heart",
            type: "interiorStory",
          },
        ],
        returned: 3,
      },
      events: {
        available: 1,
        collectionURI: "http://gateway.marvel.com/v1/public/characters/1011136/events",
        items: [
          {
            resourceURI: "http://gateway.marvel.com/v1/public/events/229",
            name: "Annihilation",
          },
        ],
        returned: 1,
      },
      urls: [
        {
          type: "detail",
          url: "http://marvel.com/characters/109/air-walker?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "wiki",
          url: "http://marvel.com/universe/Air-Walker_(Gabriel_Lan)?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
        {
          type: "comiclink",
          url: "http://marvel.com/comics/characters/1011136/air-walker_gabriel_lan?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
        },
      ],
    },
  ],
};

const hero = {
  id: 1017100,
  name: "A-Bomb (HAS)",
  description:
    "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
  modified: "2013-09-18T15:54:04-0400",
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
    extension: "jpg",
  },
  resourceURI: "http://gateway.marvel.com/v1/public/characters/1017100",
  comics: {
    available: 4,
    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017100/comics",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/47176",
        name: "FREE COMIC BOOK DAY 2013 1 (2013) #1",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40632",
        name: "Hulk (2008) #53",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40630",
        name: "Hulk (2008) #54",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40628",
        name: "Hulk (2008) #55",
      },
    ],
    returned: 4,
  },
  series: {
    available: 2,
    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017100/series",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/17765",
        name: "FREE COMIC BOOK DAY 2013 1 (2013)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/series/3374",
        name: "Hulk (2008 - 2012)",
      },
    ],
    returned: 2,
  },
  stories: {
    available: 7,
    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017100/stories",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/92078",
        name: "Hulk (2008) #55",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/92079",
        name: "Interior #92079",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/92082",
        name: "Hulk (2008) #54",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/92083",
        name: "Interior #92083",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/92086",
        name: "Hulk (2008) #53",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/92087",
        name: "Interior #92087",
        type: "interiorStory",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/105929",
        name: "cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1",
        type: "cover",
      },
    ],
    returned: 7,
  },
  events: {
    available: 0,
    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017100/events",
    items: [],
    returned: 0,
  },
  urls: [
    {
      type: "detail",
      url: "http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
    },
    {
      type: "comiclink",
      url: "http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6",
    },
  ],
};
const comics = [
  {
      "id": 92307,
      "digitalId": 57481,
      "title": "X-Men Unlimited Infinity Comic (2021) #1",
      "issueNumber": 1,
      "variantDescription": "",
      "description": "The mutants of earth have risen up and founded the nation of Krakoa… but that has not meant any less trouble for them. An all-star cast of creators bring you rotating adventures of the various mutants of the world and their friends and allies!",
      "modified": "2021-09-07T17:10:39-0400",
      "isbn": "",
      "upc": "75960620046700111",
      "diamondCode": "",
      "ean": "",
      "issn": "",
      "format": "Digital Vertical Comic",
      "pageCount": 12,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "The mutants of earth have risen up and founded the nation of Krakoa… but that has not meant any less trouble for them. An all-star cast of creators bring you rotating adventures of the various mutants of the world and their friends and allies!"
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/92307",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/92307/x-men_unlimited_infinity_comic_2021_1?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "reader",
              "url": "http://marvel.com/digitalcomics/view.htm?iid=57481&utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/31573",
          "name": "X-Men Unlimited Infinity Comic (2021 - Present)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2021-09-02T00:00:00-0400"
          },
          {
              "type": "focDate",
              "date": "2021-08-09T00:00:00-0400"
          },
          {
              "type": "unlimitedDate",
              "date": "2021-09-02T00:00:00-0400"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 0
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/611e6f42d016f",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/611e6f42d016f",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/92307/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11743",
                  "name": "Jonathan Hickman",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                  "name": "Vc Joe Sabino",
                  "role": "letterer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11354",
                  "name": "Declan Shalvey",
                  "role": "colorist"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                  "name": "Jordan D. White",
                  "role": "editor"
              }
          ],
          "returned": 4
      },
      "characters": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/92307/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                  "name": "Wolverine"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                  "name": "X-Men"
              }
          ],
          "returned": 3
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/92307/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/205698",
                  "name": "cover from X-Men Vertical Comic (2021) #1",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/205699",
                  "name": "story from X-Men Vertical Comic (2021) #1",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/92307/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 92308,
      "digitalId": 57136,
      "title": "X-Men Unlimited Infinity Comic (2021) #2",
      "issueNumber": 2,
      "variantDescription": "",
      "description": "Wolverine takes A.I.M. to save a missing mutant! The Infinity Comics adventure by Jonathan Hickman and Declan Shalvey continues!",
      "modified": "2021-09-07T17:11:07-0400",
      "isbn": "",
      "upc": "75960620046700211",
      "diamondCode": "",
      "ean": "",
      "issn": "",
      "format": "Digital Vertical Comic",
      "pageCount": 12,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "Wolverine takes A.I.M. to save a missing mutant! The Infinity Comics adventure by Jonathan Hickman and Declan Shalvey continues!"
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/92308",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/92308/x-men_unlimited_infinity_comic_2021_2?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "reader",
              "url": "http://marvel.com/digitalcomics/view.htm?iid=57136&utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/31573",
          "name": "X-Men Unlimited Infinity Comic (2021 - Present)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2021-09-02T00:00:00-0400"
          },
          {
              "type": "focDate",
              "date": "2021-08-09T00:00:00-0400"
          },
          {
              "type": "unlimitedDate",
              "date": "2021-09-02T00:00:00-0400"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 0
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/30/611e6f42d0681",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/30/611e6f42d0681",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/92308/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11743",
                  "name": "Jonathan Hickman",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                  "name": "Vc Joe Sabino",
                  "role": "letterer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11354",
                  "name": "Declan Shalvey",
                  "role": "colorist"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                  "name": "Jordan D. White",
                  "role": "editor"
              }
          ],
          "returned": 4
      },
      "characters": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/92308/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                  "name": "Wolverine"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                  "name": "X-Men"
              }
          ],
          "returned": 3
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/92308/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/205700",
                  "name": "cover from X-Men Vertical Comic (2021) #2",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/205701",
                  "name": "story from X-Men Vertical Comic (2021) #2",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/92308/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 65941,
      "digitalId": 0,
      "title": "Iron Man Epic Collection: Doom (Trade Paperback)",
      "issueNumber": 0,
      "variantDescription": "",
      "description": "Collects Iron Man (1968) #245-257, Annual #10-11 and material from Captain America Annual #9. Iron Man and Doctor Doom face off in the future! The armored foes renew their rivalry in a future version of Camelot, where they must join a reborn Arthur and Merlin in battle against some very familiar faces! Then, Loki cultivates chaos as his Acts of Vengeance pit shell-head against the Wrecker and Chemistro! Inside the armor, Tony Stark continues to come to terms with his paralysis, and the Maggia makes its move — but what is its involvement with Hydra and A.I.M.? Plus: Iron Man and Crimson Dynamo see the world through each other’s eyes! Tony defends the surface when Atlantis attacks! Iron Man and Captain America join forces to deal with the return of Terminus! And don’t forget the Dreadnoughts, Madame Masque, the Hulk and…Santa Claus?!",
      "modified": "2018-01-18T18:43:01-0500",
      "isbn": "978-1-302-91013-6",
      "upc": "",
      "diamondCode": "NOV171079",
      "ean": "9781302 910136 53999",
      "issn": "",
      "format": "Trade Paperback",
      "pageCount": 472,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "Collects Iron Man (1968) #245-257, Annual #10-11 and material from Captain America Annual #9. Iron Man and Doctor Doom face off in the future! The armored foes renew their rivalry in a future version of Camelot, where they must join a reborn Arthur and Merlin in battle against some very familiar faces! Then, Loki cultivates chaos as his Acts of Vengeance pit shell-head against the Wrecker and Chemistro! Inside the armor, Tony Stark continues to come to terms with his paralysis, and the Maggia makes its move — but what is its involvement with Hydra and A.I.M.? Plus: Iron Man and Crimson Dynamo see the world through each other’s eyes! Tony defends the surface when Atlantis attacks! Iron Man and Captain America join forces to deal with the return of Terminus! And don’t forget the Dreadnoughts, Madame Masque, the Hulk and…Santa Claus?!"
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/65941",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/collection/65941/iron_man_epic_collection_doom_trade_paperback?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/23915",
          "name": "Iron Man Epic Collection: Doom (2018)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2018-01-24T00:00:00-0500"
          },
          {
              "type": "focDate",
              "date": "2017-12-04T00:00:00-0500"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 39.99
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/10/5a612c90dfdb5",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/10/5a612c90dfdb5",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 15,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65941/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/270",
                  "name": "Gene Colan",
                  "role": "penciller"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1901",
                  "name": "Tom Morgan",
                  "role": "penciller"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/13196",
                  "name": "John Romita Jr.",
                  "role": "penciller"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/431",
                  "name": "Paul Smith",
                  "role": "penciller"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/199",
                  "name": "Herb Trimpe",
                  "role": "penciller"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1333",
                  "name": "Jim Valentino",
                  "role": "penciller"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2384",
                  "name": "Rich Yanizeski",
                  "role": "penciller"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/6049",
                  "name": "Danny Fingeroth",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2652",
                  "name": "Randall Frenz",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/392",
                  "name": "Dwayne Mcduffie",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2784",
                  "name": "David Michelinie",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2706",
                  "name": "Dann Thomas",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2909",
                  "name": "Roy Thomas",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1247",
                  "name": "Bob Layton",
                  "role": "penciller (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                  "name": "Jeff Youngquist",
                  "role": "editor"
              }
          ],
          "returned": 15
      },
      "characters": {
          "available": 8,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65941/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                  "name": "Captain America"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009251",
                  "name": "Crimson Dynamo"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009281",
                  "name": "Doctor Doom"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
                  "name": "Hulk"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009359",
                  "name": "Hydra"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                  "name": "Iron Man"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010884",
                  "name": "Wrecker"
              }
          ],
          "returned": 8
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65941/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/143002",
                  "name": "cover from IRON MAN EPIC COLLECTION: DOOM TPB (2018) #15",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/143003",
                  "name": "story from IRON MAN EPIC COLLECTION: DOOM TPB (2018) #15",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65941/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 65466,
      "digitalId": 0,
      "title": "Captain America by Mark Waid, Ron Garney & Andy Kubert (Hardcover)",
      "issueNumber": 0,
      "variantDescription": "",
      "description": "One of the most celebrated runs in Captain America history - collected in full! The world believes Cap dead, but his life is saved by his greatest love - and his deadliest enemy! Will America celebrate his return, or will he become a man without a country? After facing Onslaught, Cap will find himself reborn once more - only to lose his shield! But there's no slowing down for the Sentinel of Liberty as Cap takes on Hydra, Skrulls, A.I.M. and more; unites with Iron Man against M.O.D.O.K.; and battles Korvac and the Red Skull for the fate of the future! Plus: Tales from World War II and more - from all eras of the Sentinel of Liberty's star-studded history! Collecting CAPTAIN AMERICA (1968) #444-454, CAPTAIN AMERICA (1998) #1-23, IRON MAN/CAPTAIN AMERICA ANNUAL '98, CAPTAIN AMERICA: SENTINEL OF LIBERTY #1-12 and ROUGH CUT, and material from CAPTAIN AMERICA: THE LEGEND and CAPTAIN AMERICA: RED, WHITE & BLUE.",
      "modified": "2017-12-01T15:00:12-0500",
      "isbn": "978-1-302-90831-7",
      "upc": "",
      "diamondCode": "JUN171040",
      "ean": "9781302 908317 59999",
      "issn": "",
      "format": "Hardcover",
      "pageCount": 1328,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "One of the most celebrated runs in Captain America history - collected in full! The world believes Cap dead, but his life is saved by his greatest love - and his deadliest enemy! Will America celebrate his return, or will he become a man without a country? After facing Onslaught, Cap will find himself reborn once more - only to lose his shield! But there's no slowing down for the Sentinel of Liberty as Cap takes on Hydra, Skrulls, A.I.M. and more; unites with Iron Man against M.O.D.O.K.; and battles Korvac and the Red Skull for the fate of the future! Plus: Tales from World War II and more - from all eras of the Sentinel of Liberty's star-studded history! Collecting CAPTAIN AMERICA (1968) #444-454, CAPTAIN AMERICA (1998) #1-23, IRON MAN/CAPTAIN AMERICA ANNUAL '98, CAPTAIN AMERICA: SENTINEL OF LIBERTY #1-12 and ROUGH CUT, and material from CAPTAIN AMERICA: THE LEGEND and CAPTAIN AMERICA: RED, WHITE & BLUE."
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/65466",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/collection/65466/captain_america_by_mark_waid_ron_garney_andy_kubert_hardcover?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/23810",
          "name": "Captain America by Mark Waid, Ron Garney & Andy Kubert (2017)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2017-12-06T00:00:00-0500"
          },
          {
              "type": "focDate",
              "date": "2017-08-07T00:00:00-0400"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 125
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/50/5a21c1a2471bf",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/50/5a21c1a2471bf",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65466/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/10581",
                  "name": "Vero Gandini",
                  "role": "colorist (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/120",
                  "name": "Ron Garney",
                  "role": "penciller (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/175",
                  "name": "Andy Kubert",
                  "role": "penciller"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/119",
                  "name": "Mark Waid",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                  "name": "Jeff Youngquist",
                  "role": "editor"
              }
          ],
          "returned": 5
      },
      "characters": {
          "available": 10,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65466/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                  "name": "Captain America"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009359",
                  "name": "Hydra"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                  "name": "Iron Man"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011312",
                  "name": "Korvac"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010726",
                  "name": "M.O.D.O.K."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009483",
                  "name": "Onslaught"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009535",
                  "name": "Red Skull"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009228",
                  "name": "Sharon Carter"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009599",
                  "name": "Skrulls"
              }
          ],
          "returned": 10
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65466/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/142052",
                  "name": "cover from CAPTAIN AMERICA BY MARK WAID, RON GARNEY & ANDY KUBERT OMNIBUS HC (2017) #1",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/142053",
                  "name": "story from CAPTAIN AMERICA BY MARK WAID, RON GARNEY & ANDY KUBERT OMNIBUS HC (2017) #1",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65466/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 65357,
      "digitalId": 0,
      "title": "Marvel Universe Avengers: Ultron Revolution (2017) #2",
      "issueNumber": 2,
      "variantDescription": "",
      "description": "The Scientist Supreme unveils the latest deadly creation from A.I.M., Advanced Idea Mechanics!",
      "modified": "2017-10-06T10:38:18-0400",
      "isbn": "",
      "upc": "75960608938300211",
      "diamondCode": "",
      "ean": "",
      "issn": "",
      "format": "Infinite Comic",
      "pageCount": 1,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "The Scientist Supreme unveils the latest deadly creation from A.I.M., Advanced Idea Mechanics!"
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/65357",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/65357/marvel_universe_avengers_ultron_revolution_2017_2?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/23793",
          "name": "Marvel Universe Avengers: Ultron Revolution (2017 - 2018)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2017-10-17T00:00:00-0400"
          },
          {
              "type": "focDate",
              "date": "-0001-11-30T00:00:00-0500"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 0
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/80/59d2acf17c923",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/80/59d2acf17c923",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65357/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11401",
                  "name": "Various",
                  "role": "penciller (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                  "name": "Vc Joe Caramagna",
                  "role": "writer"
              }
          ],
          "returned": 2
      },
      "characters": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65357/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                  "name": "Avengers"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009685",
                  "name": "Ultron"
              }
          ],
          "returned": 3
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65357/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/141832",
                  "name": "cover from Marvel Universe Avengers: Ultron Revolution (Digital Comic) (2017) #2",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/141833",
                  "name": "story from Marvel Universe Avengers: Ultron Revolution (Digital Comic) (2017) #2",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65357/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 64790,
      "digitalId": 0,
      "title": "Avengers by Brian Michael Bendis: The Complete Collection Vol. 2 (Trade Paperback)",
      "issueNumber": 0,
      "variantDescription": "",
      "description": "Brian Michael Bendis' Avengers odyssey continues! When Spider-Woman disappears, the team must face the Intelligencia - just before Fear Itself hammers our heroes! The Red Skull's daughter has unleashed an evil as old as Midgard itself. The Serpent has risen to reclaim Earth, recruiting powerful superhumans as his advance guard, the Worthy. The result is all-out action in classic Avengers style! And when the dust settles, Tony Stark's fortune is gone, Captain America's leadership is questioned and Thor is no more! Worse still, Norman Osborn is back! Freed from prison by his H.A.M.M.E.R. loyalists, Osborn unites with A.I.M., Superia and Madame Hydra, seeking revenge in the worst way possible. Plus: Bendis literally writes the book on the glorious history of Earth's Mightiest Heroes! COLLECTING: AVENGERS (2010) #12.1, #13-24; AVENGERS ASSEMBLE: AN ORAL HISTORY OF EARTH'S MIGHTIEST HEROES.",
      "modified": "2017-10-06T12:21:32-0400",
      "isbn": "978-1-302-90774-7",
      "upc": "",
      "diamondCode": "JUL171229",
      "ean": "9781302 907747 53999",
      "issn": "",
      "format": "Trade Paperback",
      "pageCount": 480,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "Brian Michael Bendis' Avengers odyssey continues! When Spider-Woman disappears, the team must face the Intelligencia - just before Fear Itself hammers our heroes! The Red Skull's daughter has unleashed an evil as old as Midgard itself. The Serpent has risen to reclaim Earth, recruiting powerful superhumans as his advance guard, the Worthy. The result is all-out action in classic Avengers style! And when the dust settles, Tony Stark's fortune is gone, Captain America's leadership is questioned and Thor is no more! Worse still, Norman Osborn is back! Freed from prison by his H.A.M.M.E.R. loyalists, Osborn unites with A.I.M., Superia and Madame Hydra, seeking revenge in the worst way possible. Plus: Bendis literally writes the book on the glorious history of Earth's Mightiest Heroes! COLLECTING: AVENGERS (2010) #12.1, #13-24; AVENGERS ASSEMBLE: AN ORAL HISTORY OF EARTH'S MIGHTIEST HEROES."
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/64790",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/collection/64790/avengers_by_brian_michael_bendis_the_complete_collection_vol_2_trade_paperback?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/23600",
          "name": "Avengers by Brian Michael Bendis: The Complete Collection Vol. 2 (2017)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2017-10-11T00:00:00-0400"
          },
          {
              "type": "focDate",
              "date": "2017-08-21T00:00:00-0400"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 39.99
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/70/59d7bb5d029cb",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/70/59d7bb5d029cb",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/64790/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1004",
                  "name": "Daniel Acuna",
                  "role": "penciller (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/232",
                  "name": "Chris Bachalo",
                  "role": "penciller"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/339",
                  "name": "Bryan Hitch",
                  "role": "penciller"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/13196",
                  "name": "John Romita Jr.",
                  "role": "penciller"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
                  "name": "Brian Michael Bendis",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/442",
                  "name": "Dean White",
                  "role": "colorist"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                  "name": "Jeff Youngquist",
                  "role": "editor"
              }
          ],
          "returned": 7
      },
      "characters": {
          "available": 8,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/64790/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                  "name": "Avengers"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009412",
                  "name": "Madame Hydra"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009325",
                  "name": "Norman Osborn"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010898",
                  "name": "Sin"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                  "name": "Spider-Man (Peter Parker)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009608",
                  "name": "Spider-Woman (Jessica Drew)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                  "name": "Wolverine"
              }
          ],
          "returned": 8
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/64790/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/140629",
                  "name": "cover from AVENGERS BY BRIAN MICHAEL BENDIS: THE COMPLETE COLLECTION VOL. 2 TPB (2017) #2",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/140630",
                  "name": "story from AVENGERS BY BRIAN MICHAEL BENDIS: THE COMPLETE COLLECTION VOL. 2 TPB (2017) #2",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/64790/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 63220,
      "digitalId": 0,
      "title": "Avengers and Power Pack (2017) #6",
      "issueNumber": 6,
      "variantDescription": "",
      "description": "Will Power Pack's dreams of becoming the hottest new heroes on the scene be squashed by one of the greatest Avengers villains of all time?",
      "modified": "2017-09-06T17:34:36-0400",
      "isbn": "",
      "upc": "",
      "diamondCode": "",
      "ean": "",
      "issn": "",
      "format": "Infinite Comic",
      "pageCount": 12,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "Will Power Pack's dreams of becoming the hottest new heroes on the scene be squashed by one of the greatest Avengers villains of all time?"
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/63220",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/63220/avengers_and_power_pack_2017_6?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/23123",
          "name": "Avengers and Power Pack (2017)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2017-09-12T00:00:00-0400"
          },
          {
              "type": "focDate",
              "date": "-0001-11-30T00:00:00-0500"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 0
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/90/59b068e5c98d8",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/90/59b068e5c98d8",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63220/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/13511",
                  "name": "Nate Cosby",
                  "role": "editor"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/14063",
                  "name": "G Gurihiru",
                  "role": "penciller (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8429",
                  "name": "Dave Sharpe",
                  "role": "letterer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/718",
                  "name": "Marc Sumerak",
                  "role": "writer"
              }
          ],
          "returned": 4
      },
      "characters": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63220/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                  "name": "Avengers"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009384",
                  "name": "Kang"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010770",
                  "name": "Power Pack"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                  "name": "Spider-Man (Peter Parker)"
              }
          ],
          "returned": 5
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63220/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/137278",
                  "name": "cover from Avengers and Power Pack Infinite Comic (2017) #6",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/137279",
                  "name": "story from Avengers and Power Pack Infinite Comic (2017) #6",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63220/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 63219,
      "digitalId": 0,
      "title": "Avengers and Power Pack (2017) #5",
      "issueNumber": 5,
      "variantDescription": "",
      "description": "The Powers are on their way to the Big Apple...and our favorite sibling super heroes are ready to join the big leagues!",
      "modified": "2017-08-23T11:37:45-0400",
      "isbn": "",
      "upc": "",
      "diamondCode": "",
      "ean": "",
      "issn": "",
      "format": "Infinite Comic",
      "pageCount": 12,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "The Powers are on their way to the Big Apple...and our favorite sibling super heroes are ready to join the big leagues!"
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/63219",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/63219/avengers_and_power_pack_2017_5?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/23123",
          "name": "Avengers and Power Pack (2017)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2017-09-05T00:00:00-0400"
          },
          {
              "type": "focDate",
              "date": "-0001-11-30T00:00:00-0500"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 0
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/d0/599da020b7c0b",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/d0/599da020b7c0b",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63219/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/13511",
                  "name": "Nate Cosby",
                  "role": "editor"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/14063",
                  "name": "G Gurihiru",
                  "role": "penciller (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8429",
                  "name": "Dave Sharpe",
                  "role": "letterer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/718",
                  "name": "Marc Sumerak",
                  "role": "writer"
              }
          ],
          "returned": 4
      },
      "characters": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63219/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                  "name": "Avengers"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009384",
                  "name": "Kang"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010770",
                  "name": "Power Pack"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                  "name": "Spider-Man (Peter Parker)"
              }
          ],
          "returned": 5
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63219/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/137276",
                  "name": "cover from Avengers and Power Pack Infinite Comic (2017) #5",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/137277",
                  "name": "story from Avengers and Power Pack Infinite Comic (2017) #5",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63219/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 63218,
      "digitalId": 0,
      "title": "Avengers and Power Pack (2017) #4",
      "issueNumber": 4,
      "variantDescription": "",
      "description": "Is Jack Power really looking to save the day or is he just hoping for a hefty reward?",
      "modified": "2017-08-18T16:30:43-0400",
      "isbn": "",
      "upc": "",
      "diamondCode": "",
      "ean": "",
      "issn": "",
      "format": "Infinite Comic",
      "pageCount": 12,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "Is Jack Power really looking to save the day or is he just hoping for a hefty reward?"
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/63218",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/63218/avengers_and_power_pack_2017_4?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/23123",
          "name": "Avengers and Power Pack (2017)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2017-08-29T00:00:00-0400"
          },
          {
              "type": "focDate",
              "date": "-0001-11-30T00:00:00-0500"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 0
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/d0/59974dc49df93",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/d0/59974dc49df93",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63218/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4421",
                  "name": "MacKenzie Cadenhead",
                  "role": "editor"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/13511",
                  "name": "Nate Cosby",
                  "role": "editor"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4600",
                  "name": "Mark Paniccia",
                  "role": "editor"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/14063",
                  "name": "G Gurihiru",
                  "role": "penciller (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8429",
                  "name": "Dave Sharpe",
                  "role": "letterer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/718",
                  "name": "Marc Sumerak",
                  "role": "writer"
              }
          ],
          "returned": 6
      },
      "characters": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63218/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                  "name": "Avengers"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                  "name": "Iron Man"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009384",
                  "name": "Kang"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010770",
                  "name": "Power Pack"
              }
          ],
          "returned": 5
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63218/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/137274",
                  "name": "cover from Avengers and Power Pack Infinite Comic (2017) #4",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/137275",
                  "name": "story from Avengers and Power Pack Infinite Comic (2017) #4",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63218/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 63217,
      "digitalId": 0,
      "title": "Avengers and Power Pack (2017) #3",
      "issueNumber": 3,
      "variantDescription": "",
      "description": "When one of billionaire Tony Stark's greatest inventions is stolen, it's up to the invincible Iron Man to track it down...unless, of course, Power Pack beats him to the punch!",
      "modified": "2017-08-18T16:25:06-0400",
      "isbn": "",
      "upc": "",
      "diamondCode": "",
      "ean": "",
      "issn": "",
      "format": "Infinite Comic",
      "pageCount": 12,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "When one of billionaire Tony Stark's greatest inventions is stolen, it's up to the invincible Iron Man to track it down...unless, of course, Power Pack beats him to the punch!"
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/63217",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/63217/avengers_and_power_pack_2017_3?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/23123",
          "name": "Avengers and Power Pack (2017)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2017-08-22T00:00:00-0400"
          },
          {
              "type": "focDate",
              "date": "-0001-11-30T00:00:00-0500"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 0
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/c0/59974bd6b7f59",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/c0/59974bd6b7f59",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63217/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4421",
                  "name": "MacKenzie Cadenhead",
                  "role": "editor"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/13511",
                  "name": "Nate Cosby",
                  "role": "editor"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4600",
                  "name": "Mark Paniccia",
                  "role": "editor"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/14063",
                  "name": "G Gurihiru",
                  "role": "penciller (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8429",
                  "name": "Dave Sharpe",
                  "role": "letterer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/718",
                  "name": "Marc Sumerak",
                  "role": "writer"
              }
          ],
          "returned": 6
      },
      "characters": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63217/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                  "name": "Avengers"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                  "name": "Iron Man"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009384",
                  "name": "Kang"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010770",
                  "name": "Power Pack"
              }
          ],
          "returned": 5
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63217/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/137272",
                  "name": "cover from Avengers and Power Pack Infinite Comic (2017) #3",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/137273",
                  "name": "story from Avengers and Power Pack Infinite Comic (2017) #3",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/63217/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 48818,
      "digitalId": 33039,
      "title": "Secret Avengers (2013) #16",
      "issueNumber": 16,
      "variantDescription": "",
      "description": "HOW TO MA.I.M. A MOCKINGBIRD CONCLUSION!\r\n\r\n\r\n\r\n\r\n<ul><li>Maria Hill strikes a deal with...A.I.M.???</li><li>Some are dead. Some are alive. Some are in between. And some quit.</li><li>The Secret Avengers will never be the same.</li></ul>",
      "modified": "2014-02-24T15:38:01-0500",
      "isbn": "",
      "upc": "75960607911701611",
      "diamondCode": "DEC130725",
      "ean": "",
      "issn": "",
      "format": "Comic",
      "pageCount": 32,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "HOW TO MA.I.M. A MOCKINGBIRD CONCLUSION!\r\n\r\n\r\n\r\n\r\n<ul><li>Maria Hill strikes a deal with...A.I.M.???</li><li>Some are dead. Some are alive. Some are in between. And some quit.</li><li>The Secret Avengers will never be the same.</li></ul>"
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/48818",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/48818/secret_avengers_2013_16?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "purchase",
              "url": "http://comicstore.marvel.com/Secret-Avengers-16/digital-comic/33039?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "reader",
              "url": "http://marvel.com/digitalcomics/view.htm?iid=33039&utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "inAppLink",
              "url": "https://applink.marvel.com/issue/33039?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/17547",
          "name": "Secret Avengers (2013 - 2014)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2014-02-26T00:00:00-0500"
          },
          {
              "type": "focDate",
              "date": "2014-02-12T00:00:00-0500"
          },
          {
              "type": "unlimitedDate",
              "date": "2014-08-25T00:00:00-0400"
          },
          {
              "type": "digitalPurchaseDate",
              "date": "2014-02-26T00:00:00-0500"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 3.99
          },
          {
              "type": "digitalPurchasePrice",
              "price": 1.99
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/a0/579b65f99cde3",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/a0/579b65f99cde3",
              "extension": "jpg"
          },
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/52866198bda00",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/48818/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2697",
                  "name": "Butch Guice",
                  "role": "penciller (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2338",
                  "name": "Luke Ross",
                  "role": "artist"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11434",
                  "name": "Nick Spencer",
                  "role": "writer"
              }
          ],
          "returned": 3
      },
      "characters": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/48818/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011220",
                  "name": "Mockingbird"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009552",
                  "name": "S.H.I.E.L.D."
              }
          ],
          "returned": 3
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/48818/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/109727",
                  "name": "cover from Secret Avengers (2013) #16",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/109728",
                  "name": "story from Secret Avengers (2013) #16",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/48818/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 48817,
      "digitalId": 33017,
      "title": "Secret Avengers (2013) #15",
      "issueNumber": 15,
      "variantDescription": "",
      "description": "HOW TO MA.I.M. A MOCKINGBIRD, Part Four\r\n\r\n\r\n\r\n\r\n\r\n<ul><li>Secret Avengers X the A.I.M. island = Blood, sweat, punches and broken bones.</li><li>Events that began in #1 move to their conclusion.</li><li>A Secret Avenger dies.</li></ul>",
      "modified": "2014-02-07T15:25:17-0500",
      "isbn": "",
      "upc": "75960607911701511",
      "diamondCode": "DEC130724",
      "ean": "",
      "issn": "",
      "format": "Comic",
      "pageCount": 32,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "HOW TO MA.I.M. A MOCKINGBIRD, Part Four\r\n\r\n\r\n\r\n\r\n\r\n<ul><li>Secret Avengers X the A.I.M. island = Blood, sweat, punches and broken bones.</li><li>Events that began in #1 move to their conclusion.</li><li>A Secret Avenger dies.</li></ul>"
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/48817",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/48817/secret_avengers_2013_15?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "purchase",
              "url": "http://comicstore.marvel.com/Secret-Avengers-15/digital-comic/33017?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "reader",
              "url": "http://marvel.com/digitalcomics/view.htm?iid=33017&utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "inAppLink",
              "url": "https://applink.marvel.com/issue/33017?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/17547",
          "name": "Secret Avengers (2013 - 2014)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2014-02-12T00:00:00-0500"
          },
          {
              "type": "focDate",
              "date": "2014-01-20T00:00:00-0500"
          },
          {
              "type": "unlimitedDate",
              "date": "2014-08-11T00:00:00-0400"
          },
          {
              "type": "digitalPurchaseDate",
              "date": "2014-02-12T00:00:00-0500"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 3.99
          },
          {
              "type": "digitalPurchasePrice",
              "price": 1.99
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/70/52fa84fddcc44",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/70/52fa84fddcc44",
              "extension": "jpg"
          },
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/b0/52df15bc02462",
              "extension": "jpg"
          },
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/52df15974733b",
              "extension": "jpg"
          },
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/52df154fc293c",
              "extension": "jpg"
          },
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/40/528661575d4e9",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/48817/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                  "name": "Tom Brevoort",
                  "role": "editor"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                  "name": "Vc Clayton Cowles",
                  "role": "letterer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2697",
                  "name": "Butch Guice",
                  "role": "inker (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/12394",
                  "name": "Ales Kot",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11434",
                  "name": "Nick Spencer",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2338",
                  "name": "Luke Ross",
                  "role": "inker"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/10279",
                  "name": "Matthew Wilson",
                  "role": "colorist (cover)"
              }
          ],
          "returned": 7
      },
      "characters": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/48817/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011220",
                  "name": "Mockingbird"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009552",
                  "name": "S.H.I.E.L.D."
              }
          ],
          "returned": 3
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/48817/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/109725",
                  "name": "cover from Secret Avengers (2013) #15",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/109726",
                  "name": "story from Secret Avengers (2013) #15",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/48817/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 48816,
      "digitalId": 32829,
      "title": "Secret Avengers (2013) #14",
      "issueNumber": 14,
      "variantDescription": "",
      "description": "The traitor at the heart of the group is revealed. Mockingbird faces a crossroads that threatens to tear her apart. Travel to the past. See the future.",
      "modified": "2014-01-09T12:55:23-0500",
      "isbn": "",
      "upc": "75960607911701411",
      "diamondCode": "NOV130652",
      "ean": "",
      "issn": "",
      "format": "Comic",
      "pageCount": 32,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "The traitor at the heart of the group is revealed. Mockingbird faces a crossroads that threatens to tear her apart. Travel to the past. See the future."
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/48816",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/48816/secret_avengers_2013_14?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "purchase",
              "url": "http://comicstore.marvel.com/Secret-Avengers-14/digital-comic/32829?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "reader",
              "url": "http://marvel.com/digitalcomics/view.htm?iid=32829&utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "inAppLink",
              "url": "https://applink.marvel.com/issue/32829?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/17547",
          "name": "Secret Avengers (2013 - 2014)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2014-01-15T00:00:00-0500"
          },
          {
              "type": "focDate",
              "date": "2013-12-29T00:00:00-0500"
          },
          {
              "type": "unlimitedDate",
              "date": "2014-07-14T00:00:00-0400"
          },
          {
              "type": "digitalPurchaseDate",
              "date": "2014-01-15T00:00:00-0500"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 3.99
          },
          {
              "type": "digitalPurchasePrice",
              "price": 1.99
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/40/52cee157a8bfa",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/40/52cee157a8bfa",
              "extension": "jpg"
          },
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/526164dbd7ec3",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/48816/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2697",
                  "name": "Butch Guice",
                  "role": "penciller (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11434",
                  "name": "Nick Spencer",
                  "role": "writer"
              }
          ],
          "returned": 2
      },
      "characters": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/48816/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011220",
                  "name": "Mockingbird"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009552",
                  "name": "S.H.I.E.L.D."
              }
          ],
          "returned": 3
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/48816/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/109723",
                  "name": "cover from Secret Avengers (2013) #14",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/109724",
                  "name": "story from Secret Avengers (2013) #14",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/48816/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 46168,
      "digitalId": 28124,
      "title": "Indestructible Hulk (2012) #3",
      "issueNumber": 3,
      "variantDescription": "",
      "description": "Hulk: Agent of S.H.I.E.L.D.! His first official mission: to take down the all-new Quintronic Man! Banner's hold over Maria Hill is revealed! And what and where is Bannertown, U.S.A.?",
      "modified": "2014-07-13T14:02:17-0400",
      "isbn": "",
      "upc": "75960607908700311",
      "diamondCode": "NOV120688",
      "ean": "",
      "issn": "",
      "format": "Comic",
      "pageCount": 32,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "<ul><li>HULK&rsquo;S first official mission: take down the ALL-NEW QUINTRONIC MAN!!!</li><li>More on Banner&rsquo;s secret hold over S.H.I.E.L.D. Director Maria Hill!</li><li>What and where is&hellip;BANNERTOWN, U.S.A?</li></ul>"
          },
          {
              "type": "issue_preview_text",
              "language": "en-us",
              "text": "Hulk: Agent of S.H.I.E.L.D.! His first official mission: to take down the all-new Quintronic Man! Banner's hold over Maria Hill is revealed! And what and where is Bannertown, U.S.A.?"
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/46168",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/46168/indestructible_hulk_2012_3?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "purchase",
              "url": "http://comicstore.marvel.com/Indestructible-Hulk-3/digital-comic/28124?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "reader",
              "url": "http://marvel.com/digitalcomics/view.htm?iid=28124&utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "inAppLink",
              "url": "https://applink.marvel.com/issue/28124?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/16583",
          "name": "Indestructible Hulk (2012 - 2014)"
      },
      "variants": [
          {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/47470",
              "name": "Indestructible Hulk (2012) #3 (2nd Printing Variant)"
          },
          {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/46169",
              "name": "Indestructible Hulk (2012) #3 (Bianchi Variant)"
          }
      ],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2013-01-16T00:00:00-0500"
          },
          {
              "type": "focDate",
              "date": "2013-01-02T00:00:00-0500"
          },
          {
              "type": "unlimitedDate",
              "date": "2013-07-15T00:00:00-0400"
          },
          {
              "type": "digitalPurchaseDate",
              "date": "2013-01-16T00:00:00-0500"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 3.99
          },
          {
              "type": "digitalPurchasePrice",
              "price": 1.99
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/30/5b98052c1ae54",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/30/5b98052c1ae54",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/46168/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8542",
                  "name": "Gerry Alanguilan",
                  "role": "inker"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
                  "name": "Virtual Calligr",
                  "role": "letterer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11579",
                  "name": "Sunny Gho",
                  "role": "colorist (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11808",
                  "name": "Jonathan Moisan",
                  "role": "editor"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4600",
                  "name": "Mark Paniccia",
                  "role": "editor"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/119",
                  "name": "Mark Waid",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/758",
                  "name": "Leinil Francis Yu",
                  "role": "penciler (cover)"
              }
          ],
          "returned": 7
      },
      "characters": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/46168/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
                  "name": "Hulk"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011335",
                  "name": "Maria Hill"
              }
          ],
          "returned": 3
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/46168/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/103896",
                  "name": "Indestructible Hulk (2012) #3",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/103897",
                  "name": "story from Indestructible Hulk (2012) #3",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/46168/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 43944,
      "digitalId": 27961,
      "title": "Iron Man (2012) #1",
      "issueNumber": 1,
      "variantDescription": "",
      "description": "Tony Stark&mdash;Iron Man: Technological visionary, wealthy playboy, unparalleled engineer, and armored Avenger. His greatest invention becomes his greatest mistake. Iron Man must act fast&hellip;and Tony Stark must build faster! The lethal techno virus Extremis is out in the wild and out for grabs to the highest bidder! It&rsquo;s up to Tony Stark to contain it and that means creating a new suit of armor&hellip;NOW!",
      "modified": "2017-09-21T16:12:58-0400",
      "isbn": "",
      "upc": "75960607909400111",
      "diamondCode": "SEP120550",
      "ean": "",
      "issn": "",
      "format": "Comic",
      "pageCount": 32,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "Tony Stark&mdash;Iron Man: Technological visionary, wealthy playboy, unparalleled engineer, and armored Avenger. His greatest invention becomes his greatest mistake. Iron Man must act fast&hellip;and Tony Stark must build faster! The lethal techno virus Extremis is out in the wild and out for grabs to the highest bidder! It&rsquo;s up to Tony Stark to contain it and that means creating a new suit of armor&hellip;NOW!"
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/43944",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/43944/iron_man_2012_1?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "purchase",
              "url": "http://comicstore.marvel.com/Iron-Man-1/digital-comic/27961?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "reader",
              "url": "http://marvel.com/digitalcomics/view.htm?iid=27961&utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "inAppLink",
              "url": "https://applink.marvel.com/issue/27961?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/16593",
          "name": "Iron Man (2012 - 2014)"
      },
      "variants": [
          {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/47357",
              "name": "Iron Man (2012) #1 (2nd Printing)"
          },
          {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/49865",
              "name": "Iron Man (2012) #1"
          }
      ],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2012-11-07T00:00:00-0500"
          },
          {
              "type": "focDate",
              "date": "2012-10-24T00:00:00-0400"
          },
          {
              "type": "unlimitedDate",
              "date": "2013-05-13T00:00:00-0400"
          },
          {
              "type": "digitalPurchaseDate",
              "date": "2012-11-07T00:00:00-0500"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 3.99
          },
          {
              "type": "digitalPurchasePrice",
              "price": 1.99
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/90/5a79e06439b05",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/90/5a79e06439b05",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/43944/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                  "name": "Vc Joe Caramagna",
                  "role": "letterer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/12239",
                  "name": "Guru Efx",
                  "role": "colorist"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8901",
                  "name": "Kieron Gillen",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/425",
                  "name": "Greg Land",
                  "role": "penciller (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/616",
                  "name": "Jay Leisten",
                  "role": "inker"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4600",
                  "name": "Mark Paniccia",
                  "role": "editor"
              }
          ],
          "returned": 6
      },
      "characters": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/43944/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                  "name": "Iron Man"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009494",
                  "name": "Pepper Potts"
              }
          ],
          "returned": 3
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/43944/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/99129",
                  "name": "Iron Man (2012) #1",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/99130",
                  "name": "story from Iron Man (2012) #1",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/43944/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 49865,
      "digitalId": 0,
      "title": "Iron Man (2012) #1",
      "issueNumber": 1,
      "variantDescription": "",
      "description": "Iron Man (2012) #1",
      "modified": "2018-02-06T12:22:49-0500",
      "isbn": "",
      "upc": "",
      "diamondCode": "",
      "ean": "",
      "issn": "",
      "format": "Digital Comic",
      "pageCount": 32,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "Iron Man (2012) #1"
          },
          {
              "type": "issue_preview_text",
              "language": "en-us",
              "text": "Iron Man (2012) #1"
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49865",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/49865/iron_man_2012_1?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/16593",
          "name": "Iron Man (2012 - 2014)"
      },
      "variants": [
          {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/47357",
              "name": "Iron Man (2012) #1 (2nd Printing)"
          },
          {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43944",
              "name": "Iron Man (2012) #1"
          }
      ],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2012-11-07T00:00:00-0500"
          },
          {
              "type": "focDate",
              "date": "2012-10-24T00:00:00-0400"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 0
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/90/5a79e06439b05",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/90/5a79e06439b05",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49865/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                  "name": "Vc Joe Caramagna",
                  "role": "letterer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/12239",
                  "name": "Guru Efx",
                  "role": "colorist"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8901",
                  "name": "Kieron Gillen",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/425",
                  "name": "Greg Land",
                  "role": "penciller (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/616",
                  "name": "Jay Leisten",
                  "role": "inker"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4600",
                  "name": "Mark Paniccia",
                  "role": "editor"
              }
          ],
          "returned": 6
      },
      "characters": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49865/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                  "name": "Iron Man"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009494",
                  "name": "Pepper Potts"
              }
          ],
          "returned": 3
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49865/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/99129",
                  "name": "Iron Man (2012) #1",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/99130",
                  "name": "story from Iron Man (2012) #1",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49865/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 36737,
      "digitalId": 22522,
      "title": "Marvel Adventures Super Heroes (2010) #16",
      "issueNumber": 16,
      "variantDescription": "",
      "description": "Featuring Captain America! Spider-Man gets the thrill of a lifetime as he meets the living legend of World War II, Captain America! Webs spin and shields fly as Cap and everybody's favorite wall-crawler come face to face with the Gray Gargoyle and the nefarious schemes of AIM! Note: This issue reprints the contents of MARVEL AGE SPIDER-MAN TEAM-UP #2.",
      "modified": "2012-11-14T13:14:31-0500",
      "isbn": "",
      "upc": "5960607126-01611",
      "diamondCode": "",
      "ean": "",
      "issn": "1938-0380",
      "format": "Comic",
      "pageCount": 32,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "Featuring Captain America! Spider-Man gets the thrill of a lifetime as he meets the living legend of World War II, Captain America! Webs spin and shields fly as Cap and everybody's favorite wall-crawler come face to face with the Gray Gargoyle and the nefarious schemes of AIM! Note: This issue reprints the contents of MARVEL AGE SPIDER-MAN TEAM-UP #2."
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/36737",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/36737/marvel_adventures_super_heroes_2010_16?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "reader",
              "url": "http://marvel.com/digitalcomics/view.htm?iid=22522&utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/9718",
          "name": "Marvel Adventures Super Heroes (2010 - 2012)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2011-07-13T00:00:00-0400"
          },
          {
              "type": "focDate",
              "date": "2011-06-20T00:00:00-0400"
          },
          {
              "type": "unlimitedDate",
              "date": "2013-01-02T00:00:00-0500"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 2.99
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/10/60d395f1d99c5",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/10/60d395f1d99c5",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/36737/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/682",
                  "name": "Todd Dezago",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/873",
                  "name": "Lou Kang",
                  "role": "penciller"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11879",
                  "name": "Stephen Wacker",
                  "role": "editor"
              }
          ],
          "returned": 3
      },
      "characters": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/36737/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                  "name": "Captain America"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011420",
                  "name": "Grey Gargoyle"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                  "name": "Spider-Man (Peter Parker)"
              }
          ],
          "returned": 4
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/36737/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/81474",
                  "name": "Cover #81474",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/81475",
                  "name": "Interior #81475",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/36737/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 36972,
      "digitalId": 0,
      "title": "Taskmaster (Trade Paperback)",
      "issueNumber": 1,
      "variantDescription": "",
      "description": "Taskmaster has trained henchmen for every terrorist organization and criminal cartel in the Marvel Universe. So when the rumor starts that he's turned traitor and now works for Steve Rogers, a billion-dollar bounty is put on his head. Now, every cadre of costumed fanatics - A.I.M., Hydra, Ultimatum, the Sons of the Serpent and more - is looking to collect. Taskmaster must fight hordes upon hordes of his psychopathic students while at the same time uncovering who framed him - which requires him figuring out who he really is! That's right, the man with the photographic reflexes has no memory of his true identity - and you'll learn the unexpected truth along with him! The action-packed secret origin comes courtesy of New York Times bestselling writer Fred Van Lente (AMAZING SPIDER-MAN) and acclaimed artist Jefte Paolo (DOCTOR VOODOO)! Collecting TASKMASTER #1-4 and material from AGE OF HEROES #3.",
      "modified": "2011-04-29T09:38:27-0400",
      "isbn": "978-0-7851-5260-6",
      "upc": "5960615260-00111",
      "diamondCode": "",
      "ean": "9780785 152606 51499",
      "issn": "",
      "format": "Trade Paperback",
      "pageCount": 112,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "Taskmaster has trained henchmen for every terrorist organization and criminal cartel in the Marvel Universe. So when the rumor starts that he's turned traitor and now works for Steve Rogers, a billion-dollar bounty is put on his head. Now, every cadre of costumed fanatics - A.I.M., Hydra, Ultimatum, the Sons of the Serpent and more - is looking to collect. Taskmaster must fight hordes upon hordes of his psychopathic students while at the same time uncovering who framed him - which requires him figuring out who he really is! That's right, the man with the photographic reflexes has no memory of his true identity - and you'll learn the unexpected truth along with him! The action-packed secret origin comes courtesy of New York Times bestselling writer Fred Van Lente (AMAZING SPIDER-MAN) and acclaimed artist Jefte Paolo (DOCTOR VOODOO)! Collecting TASKMASTER #1-4 and material from AGE OF HEROES #3."
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/36972",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/collection/36972/taskmaster_trade_paperback?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/13213",
          "name": "Taskmaster (2010)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2011-05-04T00:00:00-0400"
          },
          {
              "type": "focDate",
              "date": "2011-04-20T00:00:00-0400"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 14.99
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/4d5aa3967657b",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/4d5aa3967657b",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/36972/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8003",
                  "name": "Alex Garner",
                  "role": "penciller (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8728",
                  "name": "Jefte Palo",
                  "role": "penciller"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/7894",
                  "name": "Fred Van Lente",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                  "name": "Jeff Youngquist",
                  "role": "editor"
              }
          ],
          "returned": 4
      },
      "characters": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/36972/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009359",
                  "name": "Hydra"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009648",
                  "name": "Taskmaster"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009684",
                  "name": "Ultimatum"
              }
          ],
          "returned": 4
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/36972/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/81983",
                  "name": "Taskmaster: Unthinkable TPB",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/81984",
                  "name": "Interior #81984",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/36972/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 36763,
      "digitalId": 18813,
      "title": "Ant-Man & the Wasp (2010) #3",
      "issueNumber": 3,
      "variantDescription": "",
      "description": "The first team up of Marvel's most unlikely duo may be their last! While his body lay dying, it's up to Ant-Man to save Bill Foster from a burning heaven! And The Wasp is on his own against Monica Rappacini, her elite AIM troops, and the half-sleepwalker villainess ANESTHESIA!  See how the smallest Avengers get out of their over-sized jam in the conclusion to this miniseries by writer/artist Tim Seeley (Hack/Slash)!",
      "modified": "2011-01-03T13:19:55-0500",
      "isbn": "",
      "upc": "5960607434-00311",
      "diamondCode": "NOV100533",
      "ean": "",
      "issn": "",
      "format": "Comic",
      "pageCount": 32,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "The first team up of Marvel's most unlikely duo may be their last! While his body lay dying, it's up to Ant-Man to save Bill Foster from a burning heaven! And The Wasp is on his own against Monica Rappacini, her elite AIM troops, and the half-sleepwalker villainess ANESTHESIA!  See how the smallest Avengers get out of their over-sized jam in the conclusion to this miniseries by writer/artist Tim Seeley (Hack/Slash)!"
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/36763",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/36763/ant-man_the_wasp_2010_3?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "purchase",
              "url": "http://comicstore.marvel.com/Ant-Man-the-Wasp-3/digital-comic/18813?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "reader",
              "url": "http://marvel.com/digitalcomics/view.htm?iid=18813&utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          },
          {
              "type": "inAppLink",
              "url": "https://applink.marvel.com/issue/18813?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/13082",
          "name": "Ant-Man & the Wasp (2010 - 2011)"
      },
      "variants": [],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2011-01-05T00:00:00-0500"
          },
          {
              "type": "focDate",
              "date": "2010-12-12T00:00:00-0500"
          },
          {
              "type": "unlimitedDate",
              "date": "2011-12-05T00:00:00-0500"
          },
          {
              "type": "digitalPurchaseDate",
              "date": "2011-02-16T00:00:00-0500"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 3.99
          },
          {
              "type": "digitalPurchasePrice",
              "price": 1.99
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/f0/56ddd896e1ddb",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/f0/56ddd896e1ddb",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/36763/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/13251",
                  "name": "Salva Espin",
                  "role": "penciller"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/9550",
                  "name": "Tim Seeley",
                  "role": "penciller"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                  "name": "Jordan D. White",
                  "role": "editor"
              }
          ],
          "returned": 3
      },
      "characters": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/36763/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010802",
                  "name": "Ant-Man (Eric O'Grady)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
                  "name": "Hank Pym"
              }
          ],
          "returned": 3
      },
      "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/36763/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/81526",
                  "name": "Ant-Man & the Wasp (2010) #3 cover",
                  "type": "cover"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/81527",
                  "name": "Ant-Man & the Wasp (2010) #3 interior",
                  "type": "interiorStory"
              }
          ],
          "returned": 2
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/36763/events",
          "items": [],
          "returned": 0
      }
  },
  {
      "id": 31068,
      "digitalId": 0,
      "title": "Incredible Hulks (2010) #606 (VARIANT)",
      "issueNumber": 606,
      "variantDescription": "VARIANT",
      "description": "He's fought Thor, Black Bolt, the Juggernaut, and virtually every Avenger on the planet.  But nothing's ever hit Bruce Banner as hard as \"The Fall of the Hulks\"!  As the epic storyline begins, Bruce Banner makes the best and worst discovery of his life, Skaar, the savage Son of Hulk, finally shows his true colors, and a Green Goliath in purple pants takes on Doctor Doom himself!  \"Planet Hulk\" writer Greg Pak teams up with fan favorite penciler Paul Pelletier to deliver massive revelations, shocking emotional twists, and epic smashing that will transform Bruce Banner's life forever. Rated A $3.99",
      "modified": "2011-09-20T15:45:51-0400",
      "isbn": "",
      "upc": "5960606637-60621",
      "diamondCode": "",
      "ean": "",
      "issn": "",
      "format": "Comic",
      "pageCount": 40,
      "textObjects": [
          {
              "type": "issue_solicit_text",
              "language": "en-us",
              "text": "He's fought Thor, Black Bolt, the Juggernaut, and virtually every Avenger on the planet.  But nothing's ever hit Bruce Banner as hard as \"The Fall of the Hulks\"!  As the epic storyline begins, Bruce Banner makes the best and worst discovery of his life, Skaar, the savage Son of Hulk, finally shows his true colors, and a Green Goliath in purple pants takes on Doctor Doom himself!  \"Planet Hulk\" writer Greg Pak teams up with fan favorite penciler Paul Pelletier to deliver massive revelations, shocking emotional twists, and epic smashing that will transform Bruce Banner's life forever. Rated A $3.99"
          }
      ],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/31068",
      "urls": [
          {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/31068/incredible_hulks_2010_606_variant/variant?utm_campaign=apiRef&utm_source=f8674bf3e0ed56ca2ef49c8193d8b1f6"
          }
      ],
      "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/8842",
          "name": "Incredible Hulks (2010 - 2011)"
      },
      "variants": [
          {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/30428",
              "name": "Incredible Hulks (2010) #606 (2ND PRINTING VARIANT)"
          },
          {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/27651",
              "name": "Incredible Hulks (2010) #606"
          }
      ],
      "collections": [],
      "collectedIssues": [],
      "dates": [
          {
              "type": "onsaleDate",
              "date": "2010-01-20T00:00:00-0500"
          },
          {
              "type": "focDate",
              "date": "2009-12-28T00:00:00-0500"
          }
      ],
      "prices": [
          {
              "type": "printPrice",
              "price": 3.99
          }
      ],
      "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/4e78ed9a17072",
          "extension": "jpg"
      },
      "images": [
          {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/4e78ed9a17072",
              "extension": "jpg"
          }
      ],
      "creators": {
          "available": 9,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/31068/creators",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4992",
                  "name": "Simon Bowland",
                  "role": "letterer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
                  "name": "Frank D'ARMATA",
                  "role": "colorist"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/570",
                  "name": "Klaus Janson",
                  "role": "penciller (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/13196",
                  "name": "John Romita Jr.",
                  "role": "penciller (cover)"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/13146",
                  "name": "Danny Miki",
                  "role": "inker"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/536",
                  "name": "Greg Pak",
                  "role": "writer"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4600",
                  "name": "Mark Paniccia",
                  "role": "editor"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                  "name": "Jordan D. White",
                  "role": "editor"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/559",
                  "name": "Paul Pelletier",
                  "role": "penciller"
              }
          ],
          "returned": 9
      },
      "characters": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/31068/characters",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                  "name": "A.I.M."
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                  "name": "Avengers"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009299",
                  "name": "Fantastic Four"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
                  "name": "Hulk"
              }
          ],
          "returned": 4
      },
      "stories": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/31068/stories",
          "items": [
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/60572",
                  "name": "Interior #60572",
                  "type": "interiorStory"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/70910",
                  "name": "Interior #70910",
                  "type": "interiorStory"
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/73476",
                  "name": "",
                  "type": ""
              },
              {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/94788",
                  "name": "Incredible Hulks (2009) #606, VARIANT",
                  "type": "cover"
              }
          ],
          "returned": 4
      },
      "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/31068/events",
          "items": [],
          "returned": 0
      }
  }
]
export const getCharacters = async () => {
  //   const {
  //     data: { data },
  //   } = await marvelInstance.get("");
  return response;
};
export const getCharacter = async (id) => {
  // const {
  //   data: { data },
  // } = await marvelInstance.get(`/characters/${id}`);
  // const {results} = data;
  // return results[0];
  return hero;
};

export const getContentByCharacter = async (id, path) => {
  // const {
  //   data: { data },
  // } = await marvelInstance.get(`characters/${id}/${path}`);
  // console.log(data.results);
  // return data.results;
  return comics;
};
