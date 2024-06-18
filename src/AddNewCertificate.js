import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddNewCertificate = () => {
    return (
        <div>
            <div id="page-content-wrapper">
                <div className="container">
                <h2>Add New Certificate</h2>



      <form>
        
        <div className="form-group">
          <label htmlFor="coursename"> Certificate Name</label>
          <input
            type="text"
            className="form-control"
            id="coursename"
            placeholder=" Certificate Name"
          />
        </div>
        



        <div className="form-group">
          <label htmlFor="coursename">Session/Course</label>
          <textarea
            className="form-control"
            id="coursename"
            placeholder="Session/Course"
          ></textarea>
        </div>



        <div className="form-group">
          <label htmlFor="coursename">Description
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




        <div className="row">
          <div className="col-lg-6">
         <div className="form-group">
                                      
          <label htmlFor="coursename">Enabled
          </label>
          <select type="select" name="payment_required" className="form-control" data-options="required:true" required="required"><option value="0">No</option><option value="1">Yes</option></select>
       
        </div>
        </div>


        <div className="col-lg-6">
         <div className="form-group">
                                      
          <label htmlFor="coursename">Orientation
          </label>
          <select type="select" name="payment_required" className="form-control" data-options="required:true" required="required">
            <option value="0">Portrait</option>
            <option value="1">Landscape</option></select>
       
        </div>
        </div>




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

export default AddNewCertificate;
