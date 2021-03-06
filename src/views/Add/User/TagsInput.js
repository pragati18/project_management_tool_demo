import React from "react";

const TagsInput = () => {
    const [tags, setTags] = React.useState([]);
    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };
    
    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };
    return (
        <div className="tags-input">
            <ul id="tags">
            {tags.map((tag, index) => (
    <li className="tag" key={index}>
        <span className="tag-title" >{tag}</span>
            &nbsp;&nbsp;<span className="tag-close-icon" onClick={() => removeTags(index)} >X</span>
            
    </li> 
))}

            </ul>
            <input className="form-control"
                type="text"
                onKeyUp={event => addTags(event)}
                placeholder="Press enter to add tags"
            />
        </div>
    );
};
export default TagsInput;