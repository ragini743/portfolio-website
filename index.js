
const expand = document.getElementById("expand");
const mobileNav = document.querySelector(".mobile-nav");
const ulNavMobile = document.querySelector('.nav-ul-link') ;


expand.addEventListener("click", (event) => {
  mobileNav.classList.toggle("hidden");
});

ulNavMobile.addEventListener('click', () => {
  mobileNav.classList.toggle("hidden");
})



 const data = [
  {
    src : "./project-image.png",
    text1: " Developed youtube app using youtube-API in react.",
    text2:"  implemented YouTube features like the homepage recommended videos,search & explore, playlists display etc.",
    url:"https://github.com/ragini743/youtube" ,
  },
    {
      src: "./project2-image.png " ,
      text1 :"  Developed movie web app with features listings, searching an details.",
      text2:"",
      url:"https://github.com/ragini743/react-project/tree/main/project-1",
    },
  {
    src:"./project3-image.png",
    text1:"  Developed youtube app using youtube-API in react.",
    text2: "  implemented YouTube features like the homepage recommended videos,search & explore, playlists display etc.",
  url:"https://github.com/ragini743/react/tree/master/assignment-12",
  },
  {
    src  :"./project4.png" ,
    text1 :" Developed weather app using weather api. " ,
    text2 : " implemented weather app features  where it has default location . you can search the weather report at different places" ,
    url :"https://weather-app743.netlify.app/" ,
  } ,
  {
    src :"./project5.png",
    text1:" created a figma design using react" ,
    text2: "",
    url :"https://figma11-design.netlify.app/" ,
  } ,
  {
    src :"./project-6.png",
    text1:" created a movie app .usinng tvmaje api" ,
    text2: " Implement a feature similar to a movie app where users can explore movies, find information about them, and book movie tickets.",
    url :"https://tvmaje-movie-app.netlify.app/" ,
  }


]


const addProject = document.getElementById("add-project")
console.log(addProject)
data.forEach((project)=>{
  
  const projectDiv = document.createElement("div")
  projectDiv.innerHTML = `<div class="pb-20 md:flex md:justify-between md:py-10 md:mx-auto border-gray border-2 mb-10"
>
  <div class="border-gray-100 shadow-lg border-2 md:w-[45%]">
    <img src= ${project.src} />
  </div>
  <div class="pt-10 md:w-[45%]">
    <p class="pb-4 px-2">${project.text1}
    <br />
   ${project.text2}
    </p>
    <div class="flex justify-center">
      <button
        type="button"
        class="bg-indigo-500 text-white px-10 py-1 rounded-md font-bold"
      >
        <a href= ${project.url} class="">Link</a>
      </button>
    </div>
  </div>
</div>`
addProject.appendChild(projectDiv)
  

})
