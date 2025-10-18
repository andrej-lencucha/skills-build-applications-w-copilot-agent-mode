// Modal and form scaffolding for future use
// Example: <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#activityModal">Add Activity</button>
// <div className="modal fade" id="activityModal" tabIndex="-1" aria-labelledby="activityModalLabel" aria-hidden="true">
//   <div className="modal-dialog">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="activityModalLabel">Add Activity</h5>
//         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div className="modal-body">
//         <form>
//           <div className="mb-3">
//             <label htmlFor="user" className="form-label">User</label>
//             <input type="text" className="form-control" id="user" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="type" className="form-label">Type</label>
//             <input type="text" className="form-control" id="type" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="duration" className="form-label">Duration</label>
//             <input type="number" className="form-control" id="duration" />
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const endpoint = `${process.env.REACT_APP_CODESPACE_URL}/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Activities API endpoint:', endpoint);
        console.log('Fetched activities:', results);
      });
  }, [endpoint]);

  return (
    <div>
      <h2 className="mb-4 text-primary">Activities</h2>
      <div className="card">
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>User</th>
                <th>Type</th>
                <th>Duration (min)</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, idx) => (
                <tr key={idx}>
                  <td>{activity.user}</td>
                  <td>{activity.type}</td>
                  <td>{activity.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Activities;
