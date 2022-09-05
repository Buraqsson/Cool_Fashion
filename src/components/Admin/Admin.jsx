import React from 'react'

const Admin = () => {
  return (
    <>
     <fieldset>
        <form method="post"  class="mx-5 mt-5">
         <legend class='form-group col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4'>Create a new Product</legend>
    <div class="form-group col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <label for="exampleFormControlInput1">Catogory</label>
        <input 
        type="text" 
        name="Catogory" 
        class="form-control mt-3" 
        id="exampleFormControlInput1"
        placeholder="Catogory" />
    </div>
    <div class="form-group mt-4 col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <label for="exampleFormControlTextarea1">Beskrivning</label>
        <textarea class="form-control mt-3 "
         name="description" 
         id="exampleFormControlTextarea1"
          rows="3">
        </textarea>
    </div>

    <div  class="form-group mt-4 col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <label for="exampleFormControlSelect1">Bild</label>
        <input 
        type="file" 
        name="image_url" 
        class="form-control mt-3" 
        id="exampleFormControlInput1"
        placeholder="https://via.placeholder.com/150x150?text=XXXX"
   />
           <input 
        type="text" 
        name="image_url" 
        class="form-control mt-3" 
        id="exampleFormControlInput1"
        placeholder="https://via.placeholder.com/150x150?text=XXXX"
   />

    </div>
   
    <div class="form-group mt-4 col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <label for="exampleFormControlInput1">Pris</label>
        <input 
        type="number"
         name="Pris" 
         class="form-control mt-3" 
         id="exampleFormControlInput1"
         placeholder="Pris" />
    </div>

<div class="form-group mt-4 col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
    <button  class="btn btn-primary ">Lägg till</button>
    </div>

</form>
</fieldset>
   
        
        </>
  )
}

export default Admin