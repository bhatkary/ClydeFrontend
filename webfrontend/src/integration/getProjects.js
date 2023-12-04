// getProjects.js
import GoogleLogo from "../assets/examples/GoogleLogo.jpg";
import MetaLogo from "../assets/examples/MetaLogo.png";
import AppleLogo from "../assets/examples/AppleLogo.jpg";
import NetflixLogo from "../assets/examples/NetflixLogo.jpg";
import MicrosoftLogo from "../assets/examples/MicrosoftLogo.png";



const getProjects = () => {
  // Replace this dummy data with actual project data retrieval logic
  return [
    { id: 1, name: "Google", imageSrc: GoogleLogo },
    { id: 2, name: "Meta", imageSrc: MetaLogo },
    {id: 3, name:"Apple", imageSrc: AppleLogo},
    {id: 4, name:"Netflix", imageSrc: NetflixLogo},
    {id: 5, name:"Microsoft", imageSrc: MicrosoftLogo},

    // Add more projects as needed
  ];
};

export default getProjects;
