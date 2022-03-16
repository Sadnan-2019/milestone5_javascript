console.log("first js file");



const blogs =document.getElementsByTagName("p");
// console.log(p);

for (const blog of blogs) {
          blog.style.backgroundColor ="aqua";
          blog.style.margin ="10px";
          blog.style.padding="20px";
          blog.style.border="2px solid blue";
          blog.style.borderRadius="5px";
          
}

const blogChange=document.getElementById('blog-two')
// blogChange.innerText="This is change by innerText";
blogChange.innerHTML =`
          <h2>My Element</h2>
          <div>
          <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
          </ul>
          </div>


`


const removeBlog=document.getElementById('ul')
// console.log(removeBlog.children);
 const four =removeBlog.children[2];

removeBlog.removeChild(four);


const addBlog=document.createElement('li');
addBlog.innerText="Blog-3";
removeBlog.append(addBlog);



