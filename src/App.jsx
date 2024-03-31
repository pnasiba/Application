import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const [post, setPost] = useState([]);

  const addPost=()=>{
    const newPost={
      id: Math.round(Math.random()*1000),
      title: title,
      description: description,
      createAt: Date.now()
    }

    if(title.trim().length===0 || description.trim().length===0){
      alert("Please fill in all fields")
    } else{
      setPost([...post, newPost]);
      setTitle("");
      setDescription("");
    }
  }

  return (
    <div className="container mx-auto p-12 shadow-lg bg-white my-4 rounded-lg">
      <h1 className="text-blue-600 m-4 text-4xl font-semibold">Add new post</h1>
      <div className="flex-col flex">
        <input
          placeholder="Enter post title"
          value={title}
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="p-3  border border-sky-600 rounded-lg focus:ring-2 outline-none m-4"
        />

        <textarea
          placeholder="Enter post description"
          className="m-4 p-3 rounded-lg outline-none  border border-sky-600"
          id=""
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>

        <div className="m-4 flex gap-8">
          <input type="date" name="date" id="date" className="outline-none border border-blue-500 rounded-lg p-2" />
          <input type="time" name="time" id="time" className="outline-none border border-blue-500 rounded-lg p-2" />
        </div>

        <button
          onClick={addPost}
          className="p-3 bg-blue-700 m-4 text-white rounded-lg focus:ring-2"
        >
          Add post
        </button>
      </div>

      <div className="m-4">
        <ul className="list-group">
          {post.length ? (
            post?.map((item, index) => {
              return (
                <li
                  className="list-group-item border p-4 rounded-lg my-3"
                  key={index}
                >
                  <h5 className="font-semibold text-xl">{item?.title}</h5>
                  <p className="mb-2">{item?.description}</p>
                  <small>{item?.createAt}</small>
                </li>
              );
            })
          ) : (
            <h1 className="text-center text-red-600 font-bold text-3xl">
              Not Found Post
            </h1>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
