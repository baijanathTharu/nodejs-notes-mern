module.exports = function (userDetails, userModel) {
  const {
    full_name,
    phone_number,
    username,
    password,
    email_address,
    dob,
    temp_address,
    permanent_address,
    gender,
    marital_status,
  } = userDetails;

  if (full_name) userModel.name = full_name;
  if (phone_number) userModel.phoneNumber = phone_number;
  if (username) userModel.username = username;
  if (password) userModel.password = password;
  if (email_address) userModel.email = email_address;
  if (dob) userModel.dob = dob;
  if (temp_address) userModel.address.tempAddress = temp_address.split(",");
  if (permanent_address) userModel.address.permanentAddress = permanent_address;
  if (gender) userModel.gender = gender;
  if (marital_status) userModel.maritalStatus = marital_status;

  return userModel;
};
