import '../ClothingListItem.css';

export default function ClothingListItem({ clothingItem }) {
  return (
    <div className="ClothingListItem">
      {/* <div className="emoji flex-ctr-ctr">{menuItem.emoji}</div>
      <div className="name">{menuItem.name}</div> */}
      {/* <div className="buy">
        <span>${menuItem.price.toFixed(2)}</span> */}
        <button className="btn-sm" onClick={() => console.log('clicked')}>
          ADD
        </button>
      </div>
    // </div>
  );
}