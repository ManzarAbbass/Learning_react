import axios from "axios";

// 👇 apni images ka path adjust kar lena
import img1 from "../assets/users/1.jpg";
import img2 from "../assets/users/2.jpg";
import img3 from "../assets/users/3.jpg";
import img4 from "../assets/users/4.jpg";
import img5 from "../assets/users/5.jpg";
import img6 from "../assets/users/6.jpg";
import img7 from "../assets/users/7.jpg";
import img8 from "../assets/users/8.jpg";
import img9 from "../assets/users/9.jpg";
import img10 from "../assets/users/10.jpg";

export const getUsers = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    // 👇 extra data (custom)
    const roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];
    const rates = ["$10/hr", "$20/hr", "$30/hr"];
    const skills = [
      ["React", "Tailwind"],
      ["Node", "MongoDB"],
      ["React", "Node"]
    ];

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    // 👇 SAFE enhancement (no breaking changes)
    const enhancedUsers = res.data.map((user, index) => {
      const i = user.id % roles.length;

      return {
        ...user, // ✅ existing data untouched

        // 👇 new fields (safe add)
        role: roles[i],
        rate: rates[i],
        skills: skills[i],
        image: images[index % images.length],
      };
    });

    return enhancedUsers;

  } catch (error) {
    console.log(error);
    return [];
  }
};