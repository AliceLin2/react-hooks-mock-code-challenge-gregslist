import React, {useState} from "react";

function ListingCard({freeItem, onDeleteItem}) {
  const [isFavorite, setIsFavorite] = useState(false)
  const {description, image, location} = freeItem

  function handleDeleteItem(){
    fetch(`http://localhost:6001/listings/${freeItem.id}`,{
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(()=>onDeleteItem(freeItem))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={()=>setIsFavorite(!isFavorite)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=>setIsFavorite(!isFavorite)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteItem}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
