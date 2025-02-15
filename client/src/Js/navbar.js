function showNav(navdata) {
    let menulist = document.getElementById("menulist");
    menulist.innerHTML = ""; // Clear previous items

    for (let m of navdata) {
       let listItem = document.createElement("li");
       let link = document.createElement("a");
       link.href = m.path;
       link.innerHTML = `<i class="${m.icon}"></i> ${m.content}`;
       listItem.appendChild(link);

       // Check if item has a submenu
       if (m.submenu) {
          let dropdown = document.createElement("ul");
          dropdown.classList.add("dropdown");

          for (let sub of m.submenu) {
             let subItem = document.createElement("li");
             let subLink = document.createElement("a");
             subLink.href = sub.path;
             subLink.innerHTML = `<i class="${sub.icon}"></i> ${sub.content}`;
             subItem.appendChild(subLink);
             dropdown.appendChild(subItem);
          }

          listItem.appendChild(dropdown);
       }

       menulist.appendChild(listItem);
    }
 }
 

 let data = [
    {
       path: "/Pages/onpopproduct.html",
       content: "Web Design",
       icon: "bi bi-window",
       submenu: [
          { path: "#", content: "HTML Website Design", icon: "bi bi-file-code" },
          { path: "#", content: "WordPress Website Design", icon: "bi bi-wordpress" },
          { path: "#", content: "Shopify Website Design", icon: "bi bi-shop" },
       ],
    },
    {
       path: "#",
       content: "Web Development",
       icon: "bi bi-code-slash",
       submenu: [
          { path: "#", content: "Core PHP Web Development", icon: "bi bi-file-code" },
          { path: "#", content: "React Web Development", icon: "bi bi-filetype-jsx" },
          { path: "#", content: "Laravel Web Development", icon: "bi bi-layers" },
       ],
    },
    {
       path: "#",
       content: "Mobile App",
       icon: "bi bi-phone",
       submenu: [
          { path: "#", content: "Android Apps", icon: "bi bi-android" },
          { path: "#", content: "Flutter App Development", icon: "bi bi-phone" },
          { path: "#", content: "React Native App Development", icon: "bi bi-filetype-jsx" },
       ],
    },
    {
       path: "#",
       content: "Portal",
       icon: "bi bi-box",
       submenu: [
          { path: "#", content: "B2B Portal Development", icon: "bi bi-briefcase" },
          { path: "#", content: "Travel Portal Development", icon: "bi bi-airplane" },
          { path: "#", content: "Real Estate Portal", icon: "bi bi-building" },
       ],
    },
    {
       path: "#",
       content: "Digital Marketing",
       icon: "bi bi-globe",
       submenu: [
          { path: "#", content: "Domain & Hosting", icon: "bi bi-server" },
          { path: "#", content: "Email Marketing", icon: "bi bi-envelope" },
          { path: "#", content: "Social Media Marketing", icon: "bi bi-facebook" },
          { path: "#", content: "SEO Services", icon: "bi bi-search" },
       ],
    },
    {
        path: "#",
        content: "Graphics Design",
        icon: "bi bi-palette", // Changed to a design-related icon
        submenu: [
            { path: "#", content: "Catalog Design Services", icon: "bi bi-journal-richtext" }, // Changed
            { path: "#", content: "Logo Design Services", icon: "bi bi-brush" }, // Changed
            { path: "#", content: "3D Logo Design Services", icon: "bi bi-cube" }, // Changed
            { path: "#", content: "Creative Label Design Services", icon: "bi bi-paint-bucket" }, // Changed
        ],
    },
    {
        path: "#",
        content: "Portfolio",
        icon: "bi bi-folder-symlink", // Changed to a folder-related icon
        submenu: [
            { path: "#", content: "Our Website Work", icon: "bi bi-window" }, // Changed
            { path: "#", content: "Web Designing", icon: "bi bi-layout-text-window-reverse" }, // Changed
            { path: "#", content: "E-commerce Website Portfolio", icon: "bi bi-cart-check" }, // Changed
            { path: "#", content: "Logo Design", icon: "bi bi-paint-bucket" }, // Changed
            { path: "#", content: "3D Logo", icon: "bi bi-cube" }, // Changed
            { path: "#", content: "Catalog Design", icon: "bi bi-journal-text" }, // Changed
            { path: "#", content: "Label Design", icon: "bi bi-tags" }, // Changed
        ],
    },
    
 ];

 showNav(data);

 document.getElementById("toggleofmenu").addEventListener("click", function (e) {
    e.preventDefault();
    let menu = document.getElementById("menulist");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
 });

 