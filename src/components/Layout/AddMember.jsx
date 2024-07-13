import React, { useState } from 'react';
import './AddMember.css';

const AddMember = () => {
  const [formValues, setFormValues] = useState({
    serviceType: '',
    firstName: '',
    lastName: '',
    mobileNo: '',
    email: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    aadharCardNo: '',
    panCardNo: '',
    userStatus: 'active',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log('Form submitted:', formValues);
  };

  return (
    <div className="add-member">
      <h2>Add Member</h2>
      <form className="add-member-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="serviceType">Select Service Type</label>
          <select id="serviceType" name="serviceType" value={formValues.serviceType} onChange={handleChange}>
            <option value="">Select</option>
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={formValues.firstName} onChange={handleChange} placeholder="First Name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={formValues.lastName} onChange={handleChange} placeholder="Last Name" />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo">Mobile No</label>
          <input type="text" id="mobileNo" name="mobileNo" value={formValues.mobileNo} onChange={handleChange} placeholder="Mobile No" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} placeholder="Valid Email" />
        </div>
        <div className="form-group">
          <label htmlFor="dob">DOB</label>
          <input type="date" id="dob" name="dob" value={formValues.dob} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" value={formValues.address} onChange={handleChange} placeholder="Enter Address" />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" value={formValues.city} onChange={handleChange} placeholder="Enter City" />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input type="text" id="state" name="state" value={formValues.state} onChange={handleChange} placeholder="Enter State" />
        </div>
        <div className="form-group">
          <label htmlFor="pinCode">Pin Code</label>
          <input type="text" id="pinCode" name="pinCode" value={formValues.pinCode} onChange={handleChange} placeholder="Enter PinCode" />
        </div>
        <div className="form-group">
          <label htmlFor="aadharCardNo">Aadhar Card No</label>
          <input type="text" id="aadharCardNo" name="aadharCardNo" value={formValues.aadharCardNo} onChange={handleChange} placeholder="Aadhar Card No" />
        </div>
        <div className="form-group">
          <label htmlFor="panCardNo">Pan Card No</label>
          <input type="text" id="panCardNo" name="panCardNo" value={formValues.panCardNo} onChange={handleChange} placeholder="Pan Card No" />
        </div>
        <div className="form-group">
          <label htmlFor="userStatus">User Status</label>
          <select id="userStatus" name="userStatus" value={formValues.userStatus} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMember;
