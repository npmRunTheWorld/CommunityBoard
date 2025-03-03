import images from "../assets/images";

export const sections = [
   {
      title: "Events",
      description: "Find local events in your community.",
      bgColor: "bg-gray-100",
      sectionType: "event",
      cards: [
         { id: 1, title: "Plant new trees with your friends", description: "Join us for a fun tree-planting event to make the community greener.", image: images.plantwork, link: "/event", cardType: "event" },
         { id: 2, title: "Storytelling event", description: "Listen to inspiring stories from local storytellers.", image: images.storytelling, link: "/event", cardType: "event" },
         { id: 3, title: "Work in the community garden", description: "Help us grow fresh produce and beautify the garden.", image: images.herbclass, link: "/event", cardType: "event" }
      ]
   },
   {
      title: "Food", sectionType: "food", description: "Find local food and drink in your community.", bgColor: "bg-gray-100", cards: [
         { id: 4, title: "Lina's taco shop", description: "Best authentic tacos in town!", image: images.foodpink, link: "/food", cardType: "food" },
         { id: 5, title: "Fresh garden fruits", description: "Locally grown, organic, and fresh fruits.", image: images.tomatos, link: "/food", cardType: "food" },
         { id: 6, title: "Community bar eats", description: "Delicious pub food and drinks.", image: images.barNight, link: "/food", cardType: "food" },
         { id: 7, title: "Sam's vegan shop", description: "Healthy and tasty vegan options.", image: images.foodblue, link: "/food", cardType: "food" },
      ]
   },
   {
      title: "Fun activities", sectionType: "fun-activity", description: "Find local projects in your community.", bgColor: "bg-gray-100", cards: [
         { id: 8, title: "2025 basketball championship", description: "Come and watch the best teams battle for the championship!", image: images.basketball, link: "/fun-activity", cardType: "fun-activity" },
         { id: 9, title: "Open golf course", description: "Enjoy a day at the open golf course with friends.", image: images.golf, link: "/fun-activity", cardType: "fun-activity" },
         { id: 10, title: "Women's volleyball arena", description: "Experience an exciting women's volleyball match!", image: images.volleyball, link: "/fun-activity", cardType: "fun-activity" }
      ]
   }
];
