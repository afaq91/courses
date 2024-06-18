import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddNewCourse = () => {
    return (
        <div>
            <div id="page-content-wrapper">
                <div className="container">
                <h2>Add New Online Course</h2>

<ul className="tabs">
<li className="info-tab-click">Info</li>
<li className="option-tab-click">Options</li>
<li className="schedule-tab-click">Scheduling & Instructor</li>


</ul>

      <form>
        

<div className="info-tab select-tabs">
        <div className="form-group">
          <label htmlFor="coursename">Course Name</label>
          <input
            type="text"
            className="form-control"
            id="coursename"
            placeholder="Course Name"
          />
        </div>
        



        <div className="form-group">
          <label htmlFor="coursename">Short Description</label>
          <textarea
            className="form-control"
            id="coursename"
            placeholder="Short Description"
          ></textarea>
        </div>



        <div className="form-group">
          <label htmlFor="coursename">*Course Description
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
          <label htmlFor="coursename">*Introduction
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



</div>



        
<div className="option-tab select-tabs d-none">
<div className="row">

<div className="col-lg-6">
<label htmlFor="coursename">*Payment Required
</label>
<select type="select" name="payment_required" className="form-control" data-options="required:true" required="required"><option value="0">No</option><option value="1">Yes</option></select>
</div>

<div className="col-lg-6">
<label htmlFor="coursename">*Course Fee</label>
<input name="amount" type="text" className="form-control digit" data-options="required:true" placeholder="Digits only. Optional"></input>
</div>


</div>




<div className="row">

<div className="col-lg-6">
<label htmlFor="coursename">*Effort
</label>
<input name="effort" type="text" className="form-control " data-options="required:true" placeholder="Example: 6 hours per week"></input>
</div>

<div className="col-lg-6">
<label htmlFor="coursename">*Length</label>
<input name="length" type="text" className="form-control " data-options="required:true" placeholder="Example: 10 weeks"></input>
</div>


</div>






<div className="row">

<div className="col-lg-6">
<label htmlFor="coursename">*Status
</label>
<select type="select" name="session_status" className="form-control" data-options="required:true" required="required"><option value="0">Disabled</option><option value="1">Enabled</option></select>
</div>

<div className="col-lg-6">
<label htmlFor="coursename">*Enable Discussions</label>
<select type="select" name="enable_discussion" className="form-control" data-options="required:true" required="required"><option value="1">Yes</option><option value="0">No</option></select>
</div>


</div>







<div className="row">

<div className="col-lg-6">
<label htmlFor="coursename">*Enable Live Chat
</label>
<select type="select" name="enable_chat" className="form-control" data-options="required:true" required="required" id="enable_chat"><option value="1">Yes</option><option value="0">No</option></select>
</div>

<div className="col-lg-6">
<label htmlFor="coursename">*Enforce Class Order</label>
<select type="select" name="enforce_order" className="form-control" data-options="required:true" required="required" id="enforce_order"><option value="0">No</option><option value="1">Yes</option></select>
</div>


</div>








<div className="row">

<div className="col-lg-6">
<label htmlFor="coursename">*Enable Student Forum?
</label>
<select type="select" name="payment_required" className="form-control" data-options="required:true" required="required"><option value="0">No</option><option value="1">Yes</option></select>
</div>

<div className="col-lg-6">
<label htmlFor="coursename">*Capacity</label>
<input name="amount" type="text" className="form-control digit" data-options="required:true" placeholder="Digits only. Optional"></input>
</div>


</div>





<div className="row">

<div className="col-lg-6">
<label htmlFor="coursename">*Enforce Capacity
</label>
<select type="select" name="payment_required" className="form-control" data-options="required:true" required="required"><option value="0">No</option><option value="1">Yes</option></select>
</div>

<div className="col-lg-6">

</div>
</div>

</div>








<div className="schedule-tab select-tabs d-none">

<div className="row">

<div className="col-lg-6">
<label htmlFor="coursename">Course Start Date (Optional)
</label>
<input name="effort" type="date" className="form-control " data-options="required:true" placeholder="Example: 6 hours per week"></input>
</div>

<div className="col-lg-6">
<label htmlFor="coursename">*Course End Date (Optional)
</label>
<input name="length" type="date" className="form-control " data-options="required:true" placeholder="Example: 10 weeks"></input>
</div>


</div>




<div className="row">

<div className="col-lg-6">
<label htmlFor="coursename">Enrollment Closes (Optional)
</label>
<input name="effort" type="date" className="form-control " data-options="required:true" placeholder="Example: 6 hours per week"></input>
</div>

<div className="col-lg-6">
<label htmlFor="coursename">Course Instructor
</label>
<select type="select" name="payment_required" className="form-control" data-options="required:true" required="required">

<option></option>

</select>
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

export default AddNewCourse;
