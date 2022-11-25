const NewProductForm = function(props) {
  
  const handleSubmit = function(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    props.submitForm({
      seller: { full_name: 'Steve Steveston'},
      title: formData.get('title'),
      description: formData.get('description'),
      price: formData.get('price'),
      created_at: new Date()
    })
    event.currentTarget.reset()
  }

  return(
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor='title'>Title</label>
        <input type='text' name='title'/>
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <textarea type='text' name='description'/>
      </div>
      <div>
        <label htmlFor='price'>Price</label>
        <input type='number' name='price'/>
      </div>
      <div>
        <input type='submit' value='Create Product'/>
      </div>
    </form>
  )
}

export default NewProductForm;