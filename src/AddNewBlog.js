import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddNewBlog = () => {
    return (
        <div>
            <div id="page-content-wrapper">
                <div className="container">
                <h2>Create New Blog Post</h2>



      <form>
        
        <div className="form-group">
          <label htmlFor="coursename">Title</label>
          <input
            type="text"
            className="form-control"
            id="coursename"
            placeholder="Blog Title"
          />
        </div>
        



        <div className="form-group">
          <label htmlFor="coursename">Content
          </label>
          <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event ) => {
                        console.log( event );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
        </div>




        <div className="form-group">
          <label htmlFor="coursename">Published On</label>
          <input
            type="date"
            className="form-control"
            id="coursename"
          />
        </div>





        <div className="form-group">
          <label htmlFor="coursename">Categories</label>
          <select type="select" name="payment_required" className="form-control" data-options="required:true" required="required">
            <option value="0">CAT1</option>
            <option value="1">CAT2</option></select>
        </div>





        <div class="custom-file mb-5">
        
    <input type="file" class="custom-file-input" id="customFile"></input>
    <label class="custom-file-label" for="customFile">Cover Image</label>
  </div>






  <div className="form-group">
          <label htmlFor="coursename">Meta Title</label>
          <input
            type="text"
            className="form-control"
            id="coursename"
          />
        </div>






        <div className="form-group">
          <label htmlFor="coursename">Meta Description</label>
          <input
            type="text"
            className="form-control"
            id="coursename"
          />
        </div>




        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
                </div>
            </div> 
        
    );
};

export default AddNewBlog;
