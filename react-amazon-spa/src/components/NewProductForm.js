const NewProductForm = (props) => {
  const getDataAndSubmit = (event) => {
    event.preventDefault();
    // const fd = new FormData(event.currentTarget);
    // console.log(fd.get("title"), fd.get("description"), fd.get("price"));
    props.submitForm();

    event.currentTarget.reset();
  };

  return (
    <form onSubmit={getDataAndSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" name="title" id="" 
           value={props.product.title}
           onChange={props.onChange}
         />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <br />
        <input type="text" name="description" id="" 
           value={props.product.description}
           onChange={props.onChange}
         />
      </div>{" "}
      <div>
        <label htmlFor="price">Price</label>
        <br />
        <input type="text" name="price" id="" 
           value={props.product.price}
           onChange={props.onChange}
         />
      </div>
      <div>
        <input type="submit" value="Create Product" />
      </div>
    </form>
  );
};

export default NewProductForm;
