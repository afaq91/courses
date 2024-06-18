import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ManageBlog = () => {
    return (
        <div>
            <div id="page-content-wrapper">
                <div className="container">
                <h2>Blog Posts</h2>

                <table className="table mt-4">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Published On</th>
      <th scope="col">Enabled</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button className="btn btn-warning mr-2">View</button>
      <button className="btn btn-success mr-2">Edit</button>
      <button className="btn btn-danger mr-2">Delete</button>
      </td>
    </tr>
      
      </tbody>
</table>

      
    </div>
                </div>
            </div> 
        
    );
};

export default ManageBlog;
