const ShippingInfo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input type="text" />
        <label htmlFor="">LastName:</label>
        <input type="text" />
        <button>Next</button>
      </form>
    </div>
  );
};

export default ShippingInfo;
