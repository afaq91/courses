import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ManageCertificate = () => {
    return (
        <div>
            <div id="page-content-wrapper">
                <div className="container">
                <h2>Certificates</h2>

                <table className="table mt-4">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Session/Course</th>
      <th scope="col">Enabled</th>
      <th scope="col">Price</th>
      <th scope="col">Created By</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td><button className="btn btn-warning">Actions</button></td>
    </tr>
      
      </tbody>
</table>

      
    </div>
                </div>
            </div> 
        
    );
};

export default ManageCertificate;
