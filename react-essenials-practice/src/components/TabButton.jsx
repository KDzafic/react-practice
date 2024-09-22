function TabButton({ isSelected, children, onClick }) {
    return (
      <li>
        <button className={isSelected ? 'active' : undefined} onClick={onClick}>{children}</button>
      </li>
    );
  }
  
  export default TabButton;
  