import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchTerm}) { 
  const [freeItems, setFreeItems] = useState([])
  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(data=>setFreeItems(data)
  )},[])
  
  function handleDeleteItem(deleteItem){
    const newFreeItems = freeItems.filter((item)=>item.id!==deleteItem.id)
    setFreeItems(newFreeItems)
  }

  const filteredItems = freeItems.filter((item)=>{
    if(searchTerm===""){
      return true
    }else{
      return item.description.toLowerCase().includes(searchTerm)
    }
  })

  return (
    <main>
      <ul className="cards">
        {filteredItems.map((freeItem)=><ListingCard key={freeItem.id} freeItem={freeItem} onDeleteItem={handleDeleteItem}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
