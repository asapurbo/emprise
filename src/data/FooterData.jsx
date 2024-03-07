const FooterData = () => {
  const footerItemData = [
    {
      headTxt: "Services",
      name: [
        { linkData: "Budget Tours", to: "/budgetTours" },
        { linkData: "Expert Insigh", to: "/expertInsigh" },
        { linkData: "Independent", to: "/independent" },
        { linkData: "Safety Tips", to: "/safety Tips" },
        { linkData: "Luxury Tours", to: "/luxuryTours" },
        { linkData: "Tips n Tricks", to: "/tipsnTricks" },
      ],
    },
    {
      headTxt: "Adventures",
      name: [
        { linkData: "Beach Activity", to: "/beachActivity" },
        { linkData: "Bungee Jump", to: "/bungeeJump" },
        { linkData: "City Tour", to: "/cityTour" },
        { linkData: "Hiking Trips", to: "/hikingTrips" },
        { linkData: "Jungle Safari", to: "/jungleSafari" },
        { linkData: "Night City Walk", to: "/nightCityWalk" },
      ],
    },
    {
      headTxt: "Country",
      name: [
        { linkData: "USA", to: "/usa" },
        { linkData: "Australia", to: "/australia" },
        { linkData: "South Africa", to: "/southAfrica" },
        { linkData: "West Indies" },
        { linkData: "New Zealand", to: "/newZealand" },
        { linkData: "Srilanka", to: "/srilanka" },
      ],
    },
  ];
  return { footerItemData };
};

export default FooterData;
